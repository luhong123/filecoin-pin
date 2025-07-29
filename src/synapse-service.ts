import { Synapse, StorageService, RPC_URLS, type SynapseOptions, type UploadCallbacks } from '@filoz/synapse-sdk'
import type { Logger } from 'pino'
import type { Config } from './config.js'

let synapseInstance: Synapse | null = null
let storageInstance: StorageService | null = null

/**
 * Reset the service instances (for testing)
 */
export function resetSynapseService (): void {
  synapseInstance = null
  storageInstance = null
}

export interface SynapseService {
  synapse: Synapse
  storage: StorageService
}

/**
 * Initialize Synapse SDK and create storage service
 */
export async function initializeSynapse (config: Config, logger: Logger): Promise<SynapseService> {
  // Log the configuration status
  logger.info({
    hasPrivateKey: config.privateKey != null,
    rpcUrl: config.rpcUrl
  }, 'Initializing Synapse')

  // Check if Synapse is configured
  if (config.privateKey == null) {
    throw new Error('PRIVATE_KEY environment variable is required')
  }

  try {
    logger.info({ event: 'synapse.init' }, 'Initializing Synapse SDK')

    // Create Synapse instance
    const synapseOptions: SynapseOptions = {
      privateKey: config.privateKey,
      rpcURL: config.rpcUrl ?? RPC_URLS.calibration.websocket
    }

    if (config.pandoraAddress != null) {
      synapseOptions.pandoraAddress = config.pandoraAddress
    }

    const synapse = await Synapse.create(synapseOptions)

    // Get network info for logging
    const network = synapse.getNetwork()
    logger.info({
      event: 'synapse.init',
      network,
      rpcUrl: synapseOptions.rpcURL
    }, 'Synapse SDK initialized')

    // Create storage service
    logger.info({ event: 'synapse.storage.create' }, 'Creating storage service')

    const storage = await synapse.createStorage({
      withCDN: false,
      callbacks: {
        onProviderSelected: (provider) => {
          logger.info({
            event: 'synapse.storage.provider_selected',
            provider: {
              owner: provider.owner,
              pdpUrl: provider.pdpUrl,
              pieceRetrievalUrl: provider.pieceRetrievalUrl
            }
          }, 'Selected storage provider')
        },
        onProofSetResolved: (info) => {
          logger.info({
            event: 'synapse.storage.proof_set_resolved',
            proofSetId: info.proofSetId,
            isExisting: info.isExisting,
            provider: info.provider.owner
          }, info.isExisting ? 'Using existing proof set' : 'Created new proof set')
        },
        onProofSetCreationStarted: (transaction, statusUrl) => {
          logger.info({
            event: 'synapse.storage.proof_set_creation_started',
            txHash: transaction.hash,
            statusUrl
          }, 'Proof set creation transaction submitted')
        },
        onProofSetCreationProgress: (status) => {
          logger.info({
            event: 'synapse.storage.proof_set_creation_progress',
            transactionMined: status.transactionMined,
            proofSetLive: status.proofSetLive,
            elapsedMs: status.elapsedMs
          }, 'Proof set creation progress')
        }
      }
    })

    logger.info({
      event: 'synapse.storage.created',
      proofSetId: storage.proofSetId,
      storageProvider: storage.storageProvider
    }, 'Storage service created successfully')

    // Store instances
    synapseInstance = synapse
    storageInstance = storage

    return { synapse, storage }
  } catch (error) {
    logger.error({
      event: 'synapse.init.failed',
      error
    }, 'Failed to initialize Synapse')
    throw error
  }
}

/**
 * Get the initialized Synapse service
 */
export function getSynapseService (): SynapseService | null {
  if (synapseInstance == null || storageInstance == null) {
    return null
  }
  return {
    synapse: synapseInstance,
    storage: storageInstance
  }
}

/**
 * Upload data to Filecoin using Synapse
 */
export async function uploadToSynapse (
  data: Uint8Array,
  pinId: string,
  logger: Logger
): Promise<{
    commp: string
    rootId: number
    proofSetId: string
  }> {
  const service = getSynapseService()
  if (service == null) {
    throw new Error('Synapse service not initialized')
  }

  logger.info({
    event: 'synapse.upload.start',
    pinId,
    size: data.length
  }, 'Starting Synapse upload')

  const uploadCallbacks: UploadCallbacks = {
    onUploadComplete: (commp) => {
      logger.info({
        event: 'synapse.upload.piece_uploaded',
        pinId,
        commp: commp.toString()
      }, 'Upload to PDP server complete')
    },
    onRootAdded: (transaction) => {
      if (transaction != null) {
        logger.info({
          event: 'synapse.upload.root_added',
          pinId,
          txHash: transaction.hash
        }, 'Root addition transaction submitted')
      } else {
        logger.info({
          event: 'synapse.upload.root_added',
          pinId
        }, 'Root added to proof set')
      }
    },
    onRootConfirmed: (rootIds) => {
      logger.info({
        event: 'synapse.upload.root_confirmed',
        pinId,
        rootIds
      }, 'Root addition confirmed on-chain')
    }
  }

  const uploadResult = await service.storage.upload(data, uploadCallbacks)

  logger.info({
    event: 'synapse.upload.complete',
    pinId,
    commp: uploadResult.commp.toString(),
    rootId: uploadResult.rootId,
    proofSetId: service.storage.proofSetId
  }, 'Synapse upload completed successfully')

  return {
    commp: uploadResult.commp.toString(),
    rootId: uploadResult.rootId ?? 0,
    proofSetId: service.storage.proofSetId
  }
}

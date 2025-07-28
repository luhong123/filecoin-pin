import { createConfig } from './config.js'
import { createLogger } from './logger.js'
import { createFilecoinPinningServer } from './filecoin-pinning-server.js'

export interface ServiceInfo {
  service: string
  version: string
}

export async function daemon (serviceInfo: ServiceInfo): Promise<void> {
  const config = createConfig()
  const logger = createLogger(config)

  logger.info(`Starting ${serviceInfo.service} v${serviceInfo.version} daemon...`)

  try {
    const { server, pinStore } = await createFilecoinPinningServer(config, logger, serviceInfo)

    process.on('SIGINT', () => {
      void (async () => {
        logger.info('Received SIGINT, shutting down gracefully...')
        await server.close()
        await pinStore.stop()
        process.exit(0)
      })()
    })

    process.on('SIGTERM', () => {
      void (async () => {
        logger.info('Received SIGTERM, shutting down gracefully...')
        await server.close()
        await pinStore.stop()
        process.exit(0)
      })()
    })

    // Get the actual port the server is listening on
    const address = server.server.address()
    const port = typeof address === 'string' ? address : address?.port

    logger.info({ port }, `${serviceInfo.service} daemon started successfully`)
    logger.info(`Pinning service listening on http://${config.host}:${String(port)}`)
  } catch (error) {
    logger.error({ error }, 'Failed to start daemon')
    process.exit(1)
  }
}

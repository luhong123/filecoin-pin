import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { FilecoinPinStore } from '../../filecoin-pin-store.js'
import { createConfig } from '../../config.js'
import { createLogger } from '../../logger.js'
import { createHelia } from 'helia'
import { CID } from 'multiformats/cid'
import { sha256 } from 'multiformats/hashes/sha2'
import * as raw from 'multiformats/codecs/raw'
import { rm } from 'node:fs/promises'
import { existsSync } from 'node:fs'

describe('Simple Pin Test', () => {
  let pinStore: FilecoinPinStore
  let contentOriginHelia: any
  let testCID: CID
  let testBlock: Uint8Array
  const testOutputDir = './test-simple-car-output'

  beforeEach(async () => {
    // Create test data
    testBlock = new TextEncoder().encode('Simple test block')
    const hash = await sha256.digest(testBlock)
    testCID = CID.create(1, raw.code, hash)

    // Create test config
    const config = {
      ...createConfig(),
      carStoragePath: testOutputDir
    }
    const logger = createLogger(config)

    // Create a Helia node to serve content
    contentOriginHelia = await createHelia()
    await contentOriginHelia.blockstore.put(testCID, testBlock)

    // Create Filecoin pin store
    pinStore = new FilecoinPinStore({
      config,
      logger
    })

    await pinStore.start()
  })

  afterEach(async () => {
    await pinStore.stop()
    if (contentOriginHelia != null) {
      await contentOriginHelia.stop()
    }
    if (existsSync(testOutputDir)) {
      await rm(testOutputDir, { recursive: true, force: true })
    }
  })

  it('should pin content and create CAR file', async () => {
    // Get origin multiaddr
    const originAddrs = contentOriginHelia.libp2p.getMultiaddrs()
    const origins = originAddrs.map((addr: any) => addr.toString())

    console.log('Test: Creating pin with origins:', origins)
    console.log('Test: Number of origins:', origins.length)

    const pinResult = await pinStore.pin(
      { id: 'test-user', name: 'Test User' },
      testCID,
      { name: 'Simple Test', origins }
    )

    console.log('Test: Pin created:', pinResult.id, pinResult.status)

    // Wait for background processing - increased timeout to allow for block fetch
    await new Promise(resolve => setTimeout(resolve, 15000))

    // Check final status
    const finalStatus = await pinStore.get(
      { id: 'test-user', name: 'Test User' },
      pinResult.id
    )

    console.log('Test: Final status:', finalStatus?.status)
    console.log('Test: CAR file path:', finalStatus?.filecoin?.carFilePath)
    console.log('Test: CAR file exists:', existsSync(finalStatus?.filecoin?.carFilePath ?? ''))

    expect(finalStatus?.status).toBe('pinned')
    expect(finalStatus?.filecoin?.carFilePath).toBeDefined()
    expect(existsSync(finalStatus?.filecoin?.carFilePath ?? '')).toBe(true)
  }, 30000)
})

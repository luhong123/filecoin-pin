/**
 * Mock implementation of @filoz/synapse-sdk for testing
 */

import { vi } from 'vitest'
import { MockSynapse, mockProviderInfo } from './synapse-mocks.js'

// Mock the Synapse class
export const Synapse = {
  create: vi.fn(async () => new MockSynapse())
}

// Mock storage service class
export class StorageService {
  proofSetId = 'proof-set-123'
  storageProvider = mockProviderInfo.owner

  async upload (_data: ArrayBuffer | Uint8Array, callbacks?: any): Promise<any> {
    const commpString = `baga6ea4seaq${Math.random().toString(36).substring(2, 15)}`
    const rootId = Math.floor(Math.random() * 1000)

    // Mock CommP object with toString method
    const commp = {
      toString: () => commpString
    }

    if (callbacks?.onUploadComplete != null) {
      callbacks.onUploadComplete(commp)
    }
    if (callbacks?.onRootAdded != null) {
      // Mock transaction object for new servers
      const mockTransaction = Math.random() > 0.5 ? { hash: '0x' + Math.random().toString(16).substring(2) } : undefined
      callbacks.onRootAdded(mockTransaction)
    }
    if (callbacks?.onRootConfirmed != null) {
      // Mock root IDs for new servers
      callbacks.onRootConfirmed([rootId])
    }

    return { commp, rootId, size: 1024 }
  }
}

// Export mock RPC URLs
export const RPC_URLS = {
  calibration: {
    websocket: 'wss://wss.calibration.node.glif.io/apigw/lotus/rpc/v1'
  }
}

// Export types (these will be overridden by the actual types in tests)
export type SynapseOptions = any
export type UploadCallbacks = any
export type ApprovedProviderInfo = typeof mockProviderInfo

import type { ApprovedProviderInfo } from '@filoz/synapse-sdk'
import { EventEmitter } from 'node:events'

// Mock provider info for testing
export const mockProviderInfo: ApprovedProviderInfo = {
  owner: '0x78bF4d833fC2ba1Abd42Bc772edbC788EC76A28F',
  pdpUrl: 'http://localhost:8888/pdp',
  pieceRetrievalUrl: 'http://localhost:8888/retrieve',
  registeredAt: 1234567890,
  approvedAt: 1234567891
}

// Mock storage service that simulates successful uploads
export class MockStorageService extends EventEmitter {
  public readonly proofSetId = 'proof-set-123'
  public readonly storageProvider = mockProviderInfo.owner

  async upload (_data: ArrayBuffer | Uint8Array, callbacks?: any): Promise<any> {
    // Simulate upload delay
    await new Promise(resolve => setTimeout(resolve, 100))

    // Generate a mock CommP based on data size
    const commp = `baga6ea4seaq${Math.random().toString(36).substring(2, 15)}`
    const rootId = Math.floor(Math.random() * 1000)

    // Call callbacks if provided
    if (callbacks?.onUploadComplete != null) {
      callbacks.onUploadComplete(commp)
    }
    if (callbacks?.onRootAdded != null) {
      callbacks.onRootAdded()
    }

    return { commp, rootId, size: 1024 }
  }
}

// Mock Synapse instance
export class MockSynapse extends EventEmitter {
  private _storage: MockStorageService | null = null

  getNetwork (): any {
    return { chainId: 314159n, name: 'calibration' }
  }

  async createStorage (options?: any): Promise<any> {
    // Simulate provider selection
    if (options?.callbacks?.onProviderSelected != null) {
      options.callbacks.onProviderSelected(mockProviderInfo)
    }

    // Simulate proof set resolution
    if (options?.callbacks?.onProofSetResolved != null) {
      options.callbacks.onProofSetResolved({
        proofSetId: 'proof-set-123',
        isExisting: false,
        provider: mockProviderInfo
      })
    }

    this._storage = new MockStorageService()
    return this._storage
  }
}

#!/usr/bin/env node

import process from 'node:process'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { daemon } from './index.js'

// Get package.json for version info
const filename = fileURLToPath(import.meta.url)
const dirname_ = dirname(filename)
const packageJson = JSON.parse(readFileSync(join(dirname_, '../package.json'), 'utf-8')) as { version: string, name: string }

const command = process.argv[2]

const showHelp = (): void => {
  console.log(`
filecoin-pin - IPFS Pinning Service API with Filecoin storage

Usage:
  filecoin-pin daemon    Start the pinning service daemon
  filecoin-pin version   Show version information
  filecoin-pin help      Show this help message

Environment Variables:
  PORT                   API server port (default: 3456)
  HOST                   API server host (default: localhost)
  PRIVATE_KEY           Ethereum private key for Filecoin transactions
  RPC_URL               Filecoin RPC endpoint (default: calibration testnet)
  DATABASE_PATH         SQLite database location (default: ./pins.db)
  CAR_STORAGE_PATH      Temporary CAR file directory (default: ./cars)
  LOG_LEVEL             Log level (default: info)

Example:
  filecoin-pin daemon
  PORT=8080 PRIVATE_KEY=0x... filecoin-pin daemon
`)
}

switch (command) {
  case 'daemon':
  case undefined:
    // Default to daemon if no command specified
    daemon({ service: packageJson.name, version: packageJson.version }).catch((error) => {
      console.error('Unhandled error:', error)
      process.exit(1)
    })
    break
  case 'version':
    console.log(`${packageJson.name} v${packageJson.version}`)
    break
  case 'help':
  case '--help':
  case '-h':
    showHelp()
    break
  default:
    console.error(`Unknown command: ${String(command)}`)
    console.error('Run "filecoin-pin help" for usage information')
    process.exit(1)
}

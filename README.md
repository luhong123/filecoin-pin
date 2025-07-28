# Filecoin Pin

An IPFS Pinning Service API implementation that pins to Filecoin's PDP service, providing ongoing proof of possession of your pinned content using Filecoin's proving system.

## Overview

Filecoin Pin is a TypeScript daemon that implements the [IPFS Pinning Service API](https://ipfs.github.io/pinning-services-api-spec/) to enable users to pin IPFS content to Filecoin using familiar IPFS tooling like Kubo's `ipfs pin remote` commands.

**⚠️ Alpha Software**: This is currently alpha software, only deploying on Filecoin's Calibration Test network with storage providers participating in network testing, not dedicating long-term persistence.

You need a Filecoin calibration network wallet funded with USDFC. See the [USDFC documentation](https://docs.secured.finance/usdfc-stablecoin/getting-started) which has a "Testnet Resources" section for getting USDFC on calibnet.

## Quick Start

### Prerequisites

Node.js 24+ and npm

### Installation

```bash
git clone https://github.com/FilOzone/filecoin-pin
cd filecoin-pin
npm install
```

### Development

```bash
# Start development server with hot reload
npm run dev

# Build the project
npm run build

# Run tests
npm test

# Lint code
npm run lint
npm run lint:fix
```

### Configuration

Configuration is managed through environment variables. The service uses platform-specific default directories for data storage following OS conventions.

#### Environment Variables

```bash
# Required for Filecoin operations
export PRIVATE_KEY="your-filecoin-private-key"      # Ethereum private key (must be funded with USDFC)

# Optional configuration with defaults
export PORT=3456                                    # API server port (default: 3456)
export HOST="localhost"                             # API server host (default: localhost)
export RPC_URL="https://api.calibration.node.glif.io/rpc/v1"  # Filecoin RPC endpoint
export DATABASE_PATH="./pins.db"                    # SQLite database location (default: see below)
export CAR_STORAGE_PATH="./cars"                    # Temporary CAR file directory (default: see below)
export LOG_LEVEL="info"                             # Log level (default: info)
```

#### Default Data Directories

When `DATABASE_PATH` and `CAR_STORAGE_PATH` are not specified, the service uses platform-specific defaults:

- **Linux**: `~/.local/share/filecoin-pin/` (follows XDG Base Directory spec)
- **macOS**: `~/Library/Application Support/filecoin-pin/`
- **Windows**: `%APPDATA%/filecoin-pin/`
- **Other**: `~/.filecoin-pin/`

### Running the Daemon

```bash
# Start the daemon
npm start

# Or with custom configuration
PORT=8080 npm start
```

### CLI Usage

```bash
# Show help
npx filecoin-pin help

# Show version
npx filecoin-pin version

# Start server
npx filecoin-pin daemon
```

## Using with IPFS/Kubo

Once the daemon is running, configure it as a remote pinning service in Kubo:

```bash
# Add the pinning service (replace <bearer-token> with any non-empty string for now)
ipfs pin remote service add filecoin-pin http://localhost:3456 <bearer-token>

# Pin content to Filecoin
ipfs pin remote add --service=filecoin-pin QmYourContentCID

# List remote pins
ipfs pin remote ls --service=filecoin-pin

# Check pin status
ipfs pin remote ls --service=filecoin-pin --status=pinning,queued,pinned
```

## Development Scripts

- `npm run build` - Compile TypeScript to JavaScript
- `npm run dev` - Start development server with hot reload
- `npm start` - Run compiled output
- `npm test` - Run tests with type checking
- `npm run test:watch` - Run tests in watch mode
- `npm run lint` - Check code style
- `npm run lint:fix` - Auto-fix code style issues
- `npm run typecheck` - Type check without emitting files

## License

Dual-licensed under [MIT](https://opensource.org/licenses/MIT) + [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0)

## References

- [IPFS Pinning Service API Spec](https://ipfs.github.io/pinning-services-api-spec/)
- [Helia Documentation](https://helia.io/)
- [CAR Format Specification](https://ipld.io/specs/transport/car/)
- [SynapseSDK](https://github.com/FilOzone/synapse-sdk)
- [Filecoin Services Upload Demo App](https://fs-upload-dapp.netlify.app/)

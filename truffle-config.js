require('dotenv').config();
const HDWalletProvider = require("@truffle/hdwallet-provider");

const privateKeys = process.env.PRIVATE_KEYS

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    
    testnet: {
      provider: function() {
        return new HDWalletProvider(
          privateKeys.split(','), // Array of account private keys
          `https://speedy-nodes-nyc.moralis.io/${process.env.MORALIS_API}/bsc/testnet`// Url to an BSC testnet Node
        )
      },
      networkCheckTimeout: 100000, 
      network_id: 97
    },
    mainnet: {
      provider: function() {
        return new HDWalletProvider(
          privateKeys.split(','), // Array of account private keys
          `https://speedy-nodes-nyc.moralis.io/${process.env.MORALIS_API}/bsc/mainnet`// Url to an BSC main Node
        )
      },
      networkCheckTimeout: 100000, 
      network_id: 56
    }
  },
  contracts_directory: './contracts/',
  contracts_build_directory: './abis/',
  compilers: {
    solc: {
      version: "0.8.6",
      optimizer: {
        enabled: false,
        runs: 200
      }
    }
  },

  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    bscscan: process.env.BSCSCAN_API
  }
}
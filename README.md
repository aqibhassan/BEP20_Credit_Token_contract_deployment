# 4art-nft-truffle-BEP1155-contract-deployment

Repo contains Production Ready truffle and web3 setup to deploy BEP20 contract for 4art credits.

## Requirement


```bash
- Node version= v16.10.0
- NPM version= 7.24.0
```

## Installation

# local

```bashc
- Clone repo
- cd to project file
- `touch .env`
- Copy the data from '.env-sample' and paste it into '.env'
- Set base uri of NFT Contract in .env 
- Make changes in parameters according to your project
- run a commands in your terminal `npm install`
- Then run this for test net `truffle migrate --network testnet`
- Then run this for main net `truffle migrate --network mainnet`
- Then run this for verify contract on mainnet `truffle run verify FourArtNFT@{contract-address} --network testnet`
- Then run this for verify contract on mainnet `truffle run verify FourArtNFT@{contract-address} --network mainnet`

```
# Library install commands

```bash
- `sudo npm install`
- `npm install --save dotenv`

```


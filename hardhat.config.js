const fs = require('fs');
require('@nomiclabs/hardhat-waffle');
require('dotenv').config();

const privateKey = fs.readFileSync('.secret').toString().trim();
const alchemyAPI = process.env.NEXT_PUBLIC_ALCHEMY_API_URL;

module.exports = {
  defaultNetwork: 'polygon_mainnet',
  networks: {
    hardhat: {},
    polygon_mainnet: {
      url: alchemyAPI,
      accounts: [`0x${privateKey}`],
    },
  },
  solidity: '0.8.4',
};
const networkConfig = { 
         31337 { 
                 name: "localhost", 
                 ethUsdPriceFeed: "0x9326BFA02ADD2366b30bacB125260Af641031331", 
                 gasLane: "0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc", // 30 gwei 
                 mintFee: "10000000000000000", // 0.01 ETH 
                 callbackGasLimit: "500000", // 500,000 gas 
         }, 
         // Price Feed Address, values can be obtained at https://docs.chain.link/docs/reference-contracts 
         1: { 
                 name: "mainnet", 
                 ethUsdPriceFeed: "0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e", 
                 vrfCoordinatorV2: "0x2Ca8E0C643bDe4C2E08ab1fA0da3401AdAD7734D", 
                 gasLane: "0x79d3d8832d904592c0bf9818b621522c988bb8b0c05cdc3b15aea1b6e8db0c15", 
                 callbackGasLimit: "500000", // 500,000 gas 
                 mintFee: "10000000000000000", // 0.01 ETH 
                 subscriptionId: "1667", // "0xD0355200111C2B21AAbC1a31552eCCDc5d4E905d"! 
         }, 
 } 
  
 const DECIMALS = "18" 
 const INITIAL_PRICE = "200000000000000000000" 
 const developmentChains = ["hardhat", "localhost"] 
  
 const frontEndContractsFile = "../nft-unboxed-app/constants/networkMapping.json" 
 const frontEndAbiLocation = "../nft-unboxed-app/constants/" 
  
 module.exports = { 
         networkConfig, 
         developmentChains, 
         frontEndContractsFile, 
         frontEndAbiLocation, 
         DECIMALS, 
         INITIAL_PRICE, 
 }

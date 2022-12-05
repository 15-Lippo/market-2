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

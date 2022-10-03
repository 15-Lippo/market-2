const fs = require('fs');
require('@nomiclabs/hardhat-waffle');
require('dotenv').config();

const privateKey = fs.readFileSync('.secret').toString().trim();
const alchemyAPI = process.env.NEXT_PUBLIC_ALCHEMY_API_URL;

module.exports = {
  defaultNetwork: 'polygon_mumbai',
  networks: {
    hardhat: {},
    polygon_mumbai: {
      url: alchemyAPI,
      accounts: [`0x${privateKey}`],
    },
  },
  solidity: '0.8.4',
};

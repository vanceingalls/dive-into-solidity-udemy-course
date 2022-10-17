require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

const optimismGoerliUrl = process.env.ALCHEMY_API_KEY ? `https://opt-goerli.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}` : process.env.OPTIMISM_GOERLI_URL;

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.13",
  networks: {
    "optimism-goerli": {
      url: optimismGoerliUrl,
      accounts: { mnemonic: process.env.MNEMONIC },
    },
    "optimism-bedrock": {
      url: "https://alpha-1-replica-0.bedrock-goerli.optimism.io",
      accounts: { mnemonic: process.env.MNEMONIC },
    },
  },
};

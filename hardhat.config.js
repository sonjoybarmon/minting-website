require("@nomiclabs/hardhat-waffle");

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  defaultNetwork: "rinkeby",
  networks: {
    hardhat: {},
    rinkeby: {
      // this url come form alchemy.com (dev.sonjoybarmon@gmail.com)
      url: "https://eth-rinkeby.alchemyapi.io/v2/3f6i81TnOdfgCRHxG5IqFzOqREpKfs3R",
      accounts: [
        `0x8cdbb66083aea4af8807789e08ca872681a6319d54249973106eb2b5d97422db`,
      ],
    },
  },

  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  mocha: {
    timeout: 40000,
  },
  etherscan: {
    apiKey: "MUJEK5IZ124DQK7FDQQHXM6GMDQ39FS5BY",
  },
};

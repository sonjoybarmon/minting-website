// this url come form fortmaric main website
const FORTMATIC_KEY = "pk_test_29808CC949FAFA0A";
// this url come form alchemy.com (dev.sonjoybarmon@gmail.com)
const RPC_URL =
  "https://eth-rinkeby.alchemyapi.io/v2/3f6i81TnOdfgCRHxG5IqFzOqREpKfs3R";

const config = {
  title: "Sree-NFTs Dapp",
  description: "Sree-nft buy sell application",
};

const onBoardOptions = {
  // this url come form https://explorer.blocknative.com/account
  dappId: "0e9ca198-94c4-4054-b588-e3bb7389ccda",
  networkId: 4, // 4 = Rinkeby
  darkMode: true,
  walletSelect: {
    heading: "Sree-NFTs Connect your wallet",
    description: "Connect your wallet to start trading",
    // explanation: "Explanation",
    wallets: [
      { walletName: "metamask", preferred: true },
      { walletName: "coinbase", preferred: true },
      {
        walletName: "walletLink",
        preferred: true,
        rpcUrl: RPC_URL,
        appName: "sree-nft",
      },
      {
        walletName: "fortmatic",
        apiKey: FORTMATIC_KEY,
        preferred: true,
      },
      { walletName: "trust", preferred: true, rpcUrl: RPC_URL },
      { walletName: "authereum" },
      // {
      //   walletName: "trezor",
      //   appUrl: APP_URL,
      //   email: CONTACT_EMAIL,
      //   rpcUrl: RPC_URL,
      // },
      {
        walletName: "ledger",
        rpcUrl: RPC_URL,
      },
      // {
      //   walletName: "lattice",
      //   rpcUrl: RPC_URL,
      //   appName: APP_NAME,
      // },
      {
        walletName: "keepkey",
        rpcUrl: RPC_URL,
      },
      // {
      //   walletName: "mewwallet",
      //   rpcUrl: RPC_URL,
      // },
      // {
      //   walletName: "cobovault",
      //   rpcUrl: RPC_URL,
      //   appName: APP_NAME,
      // },
      // {
      //   walletName: "keystone",
      //   rpcUrl: RPC_URL,
      //   appName: APP_NAME,
      // },

      // {
      //   walletName: "portis",
      //   apiKey: PORTIS_KEY,
      //   preferred: true,
      //   label: "Login with Email",
      // },
      // {
      //   walletName: "walletConnect",
      //   infuraKey: INFURA_KEY,
      // },
      { walletName: "opera" },
      { walletName: "operaTouch" },
      { walletName: "torus" },
      { walletName: "status" },
      { walletName: "imToken", rpcUrl: RPC_URL },
      { walletName: "meetone" },
      { walletName: "mykey", rpcUrl: RPC_URL },
      { walletName: "huobiwallet", rpcUrl: RPC_URL },
      { walletName: "hyperpay" },
      { walletName: "wallet.io", rpcUrl: RPC_URL },
      { walletName: "atoken" },
      { walletName: "frame" },
      { walletName: "ownbit" },
      { walletName: "alphawallet" },
      { walletName: "gnosis" },
      { walletName: "xdefi" },
      { walletName: "bitpie" },
      { walletName: "binance" },
      { walletName: "liquality" },
      { walletName: "tally" },
      { walletName: "blankwallet" },
      { walletName: "mathwallet" },
      { walletName: "1inch" },
      { walletName: "ronin" },
    ],
  },

  walletCheck: [
    { checkName: "derivationPath" },
    { checkName: "accounts" },
    { checkName: "connect" },
    { checkName: "network" },
  ],
};

export { config, onBoardOptions };

const hre = require("hardhat");
const { MerkleTree } = require("merkletreejs");
const keccak256 = require("keccak256");
const whitelist = require("./whitelist");

const BASE_URL = "ipfs://QmWsS7a4DxWhFzUuSW6D2sSY5M7Yek7B2wgdAtsxYRxrbq/";
const proxyRegistryAddressRinkeby =
  "0xf57b2c51ded3a29e6891aba85459d600256cf317";
const proxyRegistryAddressMainnet =
  "0xa5409ec958c83c3f309868babaca7c86dcb077c1";

async function main() {
  // calculate merkle root from the whitelist array.
  const leafNodes = whitelist.map((addr) => keccak256(addr));
  const merleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });
  const root = merleTree.getRoot();

  // Deploy the contract
  const SreeNft = await hre.ethers.getContractFactory("SreeNft");
  const sreeNft = await SreeNft.deploy(
    BASE_URL,
    root,
    proxyRegistryAddressRinkeby
  );

  await sreeNft.deployed();

  console.log("sreeNft deployed to:", sreeNft.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

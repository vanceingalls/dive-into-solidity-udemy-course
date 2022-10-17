// Setup
import { Network, Alchemy } from "alchemy-sdk";

const settings = {
  apiKey: "i6vEBbOu7uCcFXvAi_H9PKly4kmgoKJk",
  network: Network.OPT_GOERLI,
};

const alchemy = new Alchemy(settings);

// Get the latest block
const latestBlock = alchemy.core.getBlockNumber();

// Get all outbound transfers for a provided address
alchemy.core.getTokenBalances("0x42a2e2f27C9D4E1fca3b0B3eDb2465514AB4c3c0").then(console.log);

// Get all the NFTs owned by an address
// const nfts = alchemy.nft.getNftsForOwner("0xshah.eth");

// Listen to all new pending transactions
// alchemy.ws.on({ method: "alchemy_pendingTransactions", fromAddress: "0xshah.eth" }, (res) => console.log(res));

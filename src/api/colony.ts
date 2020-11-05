import { getColonyNetworkClient, Network } from '@colony/colony-js';
import { Wallet } from 'ethers';
import { InfuraProvider } from 'ethers/providers';


const MAINNET_NETWORK_ADDRESS = `0x5346D0f80e2816FaD329F2c140c870ffc3c3E2Ef`;
const MAINNET_BETACOLONY_ADDRESS = `0x869814034d96544f3C62DE2aC22448ed79Ac8e70`;

//Infura
export const provider = new InfuraProvider("homestead", '3af07a35552947fd9a6019ef2ded7740');

const wallet = Wallet.createRandom();
const connectedWallet = wallet.connect(provider);


// Get a network client instance
const networkClient = getColonyNetworkClient(
    Network.Mainnet,
    connectedWallet,
    { networkAddress: MAINNET_NETWORK_ADDRESS }
);

export async function getColonyClient() {
    const colonyClient = await networkClient.getColonyClient(MAINNET_BETACOLONY_ADDRESS);
    return colonyClient;
}
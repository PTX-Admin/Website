import { ethers } from 'ethers';
import { Chain, defaultChains } from 'wagmi';
import { INetworkDetails } from './types';

export const bscChain: Chain = {
  id: 56,
  name: 'BSC',
  network: 'Binance Smart Chain',
  rpcUrls: {
    default: 'https://bsc-dataseed.binance.org	',
  },
  blockExplorers: { default: { name: 'BscScan', url: 'https://www.bscscan.com/' } },
  nativeCurrency: { name: 'BNB', symbol: 'BNB', decimals: 18 },
};

export const allChains: Chain[] = [...defaultChains, bscChain];

export const networkDetails: INetworkDetails = {
  // 250: {
  //   rpcUrl: 'https://rpc.ankr.com/fantom	',

  //   chainProviders: new ethers.providers.JsonRpcProvider('https://rpc.ankr.com/fantom	'),

  //   blockExplorerURL: 'https://ftmscan.com',
  //   blockExplorerName: 'FTMScan',
  //   prefix: 'fantom',
  //   logoURI:
  //     'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/fantom/info/logo.png',
  // },
  // 1: {
  //   rpcUrl: 'https://rpc.ankr.com/eth',

  //   chainProviders: new ethers.providers.JsonRpcProvider(
  //     'https://rpc.ankr.com/eth'
  //   ),

  //   blockExplorerURL: 'https://etherscan.io/',
  //   blockExplorerName: 'Etherscan',
  //   prefix: 'ethereum',
  //   logoURI:
  //     'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/info/logo.png',
  // },
  // 10: {
  //   rpcUrl: 'https://mainnet.optimism.io',
  //   chainProviders: new ethers.providers.JsonRpcProvider(
  //     'https://mainnet.optimism.io'
  //   ),
  //   blockExplorerURL: 'https://optimistic.etherscan.io/',
  //   blockExplorerName: 'Etherscan',
  //   prefix: 'optimism',
  //   logoURI:
  //     'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/optimism/info/logo.png',
  // },
  56: {
    rpcUrl: 'https://bsc-dataseed.binance.org',
    chainProviders: new ethers.providers.JsonRpcProvider('https://bsc-dataseed.binance.org'),
    blockExplorerURL: 'https://www.bscscan.com/',
    blockExplorerName: 'BscScan',
    prefix: 'bsc',
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/binance/info/logo.png',
  },
};

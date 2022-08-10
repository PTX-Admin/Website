import { PresaleABI } from './abi';
import { ISecondsByDuration, IConnectorIcon } from './types';

export const secondsByDuration: ISecondsByDuration = {
  day: 60 * 60 * 24,
  week: 7 * 24 * 60 * 60,
  month: 30 * 24 * 60 * 60,
  year: 365 * 24 * 60 * 60,
};

export const connectorIcons: IConnectorIcon = {
  MetaMask: {
    logoURI: 'https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg',
  },
  'Coinbase Wallet': {
    logoURI: 'https://avatars.githubusercontent.com/u/18060234?s=200&v=4',
  },
  WalletConnect: {
    logoURI:
      'https://raw.githubusercontent.com/WalletConnect/walletconnect-assets/master/png/circle/walletconnect-circle-blue.png',
  },
};

export const BUSDAddress = '0xe9e7cea3dedca5984780bafc599bd69add087d56';

export const presaleContractConfig = {
  addressOrName: '0xe0D4ed2613f6c8737234d28D24b9C5d7f106bd28',
  contractInterface: PresaleABI,
};

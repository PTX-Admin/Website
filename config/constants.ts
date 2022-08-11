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
      'https://raw.githubusercontent.com/WalletConnect/walletconnect-assets/master/Logo/Blue%20(Default)/Logo.png',
  },
};

export const BUSDAddress = '0xdE1dEBADfc466cc50BBaad33917a954d9D77b874';

export const presaleContractConfig = {
  addressOrName: '0x5Ec500C5C6f0a270b633d5D5f0c3b9eB9b041455',
  contractInterface: PresaleABI,
};

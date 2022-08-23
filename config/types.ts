import { ethers } from 'ethers';

// Config Interfaces
export interface INetworkDetails {
  [key: number]: {
    rpcUrl: string;
    chainProviders: ethers.providers.BaseProvider;
    blockExplorerURL: string;
    blockExplorerName: string;
    prefix: string;
    logoURI: string;
  };
}

export interface IConnectorIcon {
  [key: string]: {
    logoURI: string;
  };
}

export interface ISecondsByDuration {
  [key: string]: number;
}

// State Interfaces
export interface IEpoch {
  id: number;
  duration: number;
  price: number;
  epochUserCap: number;
  userCap: number;
  epochTotalCap: number;
  totalCap: number;
  whitelistIds: number[];
  endsAt: number;
  maxContribution: number;
}

export interface IPresale {
  loading: boolean; // Determines wether it's loaded or not
  currentEpoch?: IEpoch; // Current epoch parameters
  name?: string; // Presale Token Name
  symbol?: string; // Presale Token Symbol
  investmentToken?: string; // Investment token address
  startsAt?: number; // Epoch timestamp when presale starts
  endsAt?: number; // Epoch timestamp when presale ends
  userCap?: number; // Max amount of tokens to be purchased by a user
  totalCap?: number; // Max amount of tokens that can be issued
  minimalBalance?: number; // Minimum amount of tokens to purchase
  step?: number; // Step between purchase amounts
  totalInvested?: number; // amount of investmentTokens deposited
  totalIssued?: number; // amount of presale tokens issued
  whitelistId?: number; // whitelistId
  userInvested?: number; // amount of investmentToken user has invested
  allowance?: number;
  totalEpochs?: number;
  minInvest?: number; // minimum amount of investmentToken that a user can invest
}

export interface ITokenDetails {
  loading: boolean;
  circulatingSupply?: number;
  holders?: number;
  burned?: number;
  nextRebase?: number;
  rebaseRate?: number;
  balance?: number;
  apy?: number;
}

// fetch interfaces
export interface IPair {
  chainId: string;
  dexId: string;
  url: string;
  pairAddress: string;
  baseToken: {
    address: string;
    name: string;
    symbol: string;
  };
  quoteToken: {
    symbol: string;
  };
  priceNative: string;
  priceUsd?: string;
  txns: {
    m5: {
      buys: number;
      sells: number;
    };
    h1: {
      buys: number;
      sells: number;
    };
    h6: {
      buys: number;
      sells: number;
    };
    h24: {
      buys: number;
      sells: number;
    };
  };
  volume: {
    m5: number;
    h1: number;
    h6: number;
    h24: number;
  };
  priceChange: {
    m5: number;
    h1: number;
    h6: number;
    h24: number;
  };
  liquidity?: {
    usd?: number;
    base: number;
    quote: number;
  };
  fdv?: number;
  pairCreatedAt?: number;
}

export interface IPairsResponse {
  schemaVersion: string;
  pairs: IPair[] | null;
}

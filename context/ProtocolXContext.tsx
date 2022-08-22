import { ethers } from 'ethers';
import { createContext, ReactNode, useEffect, useState } from 'react';
import { erc20ABI, useAccount, useContractInfiniteReads } from 'wagmi';
import { presaleContractConfig, BUSDAddress, secondsByDuration } from '../config/constants';
import { IEpoch, IPresale } from '../config/types';

const emptyPresale: IPresale = {
  loading: true,
};

function buildEpoch(data: any) {
  if (!data) return;
  const epoch: IEpoch = {
    id: Number(data[0][0]),
    duration: Number(data[0][1]),
    price: Number(data[0][2]),
    epochUserCap: Number(data[0][3]),
    userCap: Number(data[0][4]),
    epochTotalCap: Number(data[0][5]),
    totalCap: Number(data[0][6]),
    whitelistIds: data[0][7].map((val: ethers.BigNumberish) => {
      return Number(val);
    }),
    endsAt: Number(data[1]),
    maxContribution: ((Number(data[0][4]) / 10 ** 18) * Number(data[0][2])) / 100,
  };
  return epoch;
}

export const ProtocolXContext = createContext<{
  Presale: IPresale;
}>({
  Presale: emptyPresale,
});

export function ProtocolXProvider({ children }: { children: ReactNode }) {
  const [presale, setPresale] = useState<IPresale>(emptyPresale);

  const { address } = useAccount();

  const format = (n: ethers.BigNumberish, dec: number) => {
    if (!n) return;
    return Number(ethers.utils.formatUnits(n, dec));
  };

  // getCurrentEpoch
  const { refetch } = useContractInfiniteReads({
    cacheKey: 'epochData',
    contracts: () => [
      { ...presaleContractConfig, functionName: 'getCurrentEpoch' },
      { ...presaleContractConfig, functionName: 'name' },
      { ...presaleContractConfig, functionName: 'symbol' },
      { ...presaleContractConfig, functionName: 'getInvestmentTokenAddress' },
      { ...presaleContractConfig, functionName: 'getStartsAt' },
      { ...presaleContractConfig, functionName: 'getEndsAt' },
      { ...presaleContractConfig, functionName: 'getUserCap' },
      { ...presaleContractConfig, functionName: 'getTotalInvestedCap' },
      { ...presaleContractConfig, functionName: 'getMinimalBalance' },
      { ...presaleContractConfig, functionName: 'getStep' },
      { ...presaleContractConfig, functionName: 'getTotalInvested' },
      { ...presaleContractConfig, functionName: 'getTotalIssued' },
      {
        ...presaleContractConfig,
        functionName: 'getAccountWhitelist',
        args: [address],
      },
      {
        ...presaleContractConfig,
        functionName: 'getInvestorTotalInvested',
        args: [address],
      },
      {
        addressOrName: BUSDAddress,
        contractInterface: erc20ABI,
        functionName: 'allowance',
        args: [address, presaleContractConfig.addressOrName],
      },
      {
        ...presaleContractConfig,
        functionName: 'getEpochsLength',
      },
      { ...presaleContractConfig, functionName: 'getMinimalInvested' },
    ],
    onSettled(data, error) {
      if (error) {
        console.log('⚙ BACKEND ERROR => getEpoch');
        return;
      }
      if (!data) return;
      const presaleObj: IPresale = {
        loading: false,
        currentEpoch: buildEpoch(data?.pages[0][0]),
        name: data.pages[0][1],
        symbol: data.pages[0][2],
        investmentToken: data.pages[0][3],
        startsAt: Number(data.pages[0][4]),
        endsAt: Number(data.pages[0][5]),
        userCap: format(data.pages[0][6], 18),
        totalCap: format(data.pages[0][7], 18),
        minimalBalance: format(data.pages[0][8], 18),
        step: format(data.pages[0][9], 18),
        totalInvested: format(data.pages[0][10], 18),
        totalIssued: format(data.pages[0][11], 18),
        whitelistId: data.pages[0][12] ? Number(data.pages[0][12]) : 0,
        userInvested: format(data.pages[0][13], 18),
        allowance: format(data.pages[0][14], 18),
        totalEpochs: Number(data.pages[0][15]),
        minInvest: format(data.pages[0][16], 18),
      };
      console.log(presaleObj);
      setPresale(presaleObj);
    },
    cacheTime: secondsByDuration['day'],
  });
  useEffect(() => {
    refetch();
    const interval = setInterval(() => {
      refetch();
    }, 5_000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ProtocolXContext.Provider value={{ Presale: presale }}>{children}</ProtocolXContext.Provider>
  );
}

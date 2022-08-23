import {
  HStack,
  Divider,
  Text,
  ButtonGroup,
  Input,
  Button,
  Flex,
  useNumberInput,
  Spinner,
  Link,
  VStack,
} from '@chakra-ui/react';
import { ethers } from 'ethers';
import moment from 'moment';
import { useContext, useMemo, useState } from 'react';
import { toast } from 'react-toastify';
import { useContractWrite, erc20ABI, usePrepareContractWrite, useBalance, useAccount } from 'wagmi';
import { BUSDAddress, presaleContractConfig } from '../../../config/constants';
import { ProtocolXContext } from '../../../context/ProtocolXContext';
import { palette } from '../../../styles/palette';
import ConnectWalletButton from '../../ConnectWalletButton';
import NetworkButton from '../../NetworkButton';

export default function PresalePurchase() {
  const { Presale } = useContext(ProtocolXContext);

  const ended = useMemo(() => {
    if (!Presale.endsAt) return false;
    return moment(Presale.endsAt).isBefore(Date.now() / 1000);
  }, [Presale.endsAt]);

  const [balance, setBalance] = useState<number>(0);
  const { address } = useAccount();
  const {} = useBalance({
    addressOrName: address,
    token: presaleContractConfig.addressOrName,
    watch: true,
    onSuccess(data) {
      setBalance(Number(data.formatted));
    },
  });

  const [toMint, setToMint] = useState<number | undefined>();
  const { getInputProps } = useNumberInput({
    step: 1,
    value: toMint,
    min: (Presale.currentEpoch?.price ?? 0) / 100,
    max:
      (Presale.userCap ?? 0) * ((Presale?.currentEpoch?.price ?? 0) / 100) -
      (Presale.userInvested ?? 0),
    precision: 2,
    onChange: (val) => setToMint(Number(val)),
  });
  const input = getInputProps();

  // invest
  const { config: investConfig } = usePrepareContractWrite({
    ...presaleContractConfig,
    functionName: 'invest',
    args: [ethers.utils.parseEther((toMint ?? 0).toString()).toString()],
  });
  const { isLoading: investIsLoading, writeAsync: investWrite } = useContractWrite({
    ...investConfig,
    onError(err) {
      toast.error(err.name);
    },
    onSuccess(data) {
      toast.promise(data.wait(1), {
        pending: `💰 Investing ${toMint ?? 0} $BUSD.`,
        success: `💸 Invested ${toMint ?? 0} $BUSD.`,
        error: `💥 Error investing ${toMint ?? 0} $BUSD.`,
      });
    },
  });

  // redeem
  const { config: redeemConfig } = usePrepareContractWrite({
    ...presaleContractConfig,
    functionName: 'redeem',
    args: [ethers.utils.parseEther(balance.toString())],
  });
  const { isLoading: redeemIsLoading, writeAsync: redeemWrite } = useContractWrite({
    ...redeemConfig,
    onError(err) {
      toast.error(err.message);
    },
    onSuccess(data) {
      toast.promise(data.wait(1), {
        pending: `💰 Redeeming your $PTX.`,
        success: `💸 $PTX RREDEEMED.`,
        error: `💥 Error redeeming your presale tokens.`,
      });
    },
  });

  return (
    <>
      <Flex
        gap={4}
        direction={{ base: 'column', lg: 'row' }}
        rounded="xl"
        h="fit-content"
        alignItems={'center'}
        w="full"
        justifyContent="center"
      >
        {/* <Divider orientation="vertical" minH="32px" borderLeftColor={'black'} opacity={1} /> */}
        {Presale.loading ? (
          <Spinner size="md" color="black" />
        ) : (
          <>
            {balance > 0 ? (
              <NetworkButton
                onClick={() => redeemWrite && redeemWrite()}
                isLoading={redeemIsLoading}
                loadingText="Redeeeming..."
              >
                REDEEM
              </NetworkButton>
            ) : (
              <NetworkButton>REDEEM</NetworkButton>
            )}
          </>
        )}
      </Flex>
    </>
  );
}

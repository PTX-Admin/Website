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
    token: BUSDAddress,
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

  // approve
  const { config: approveConfig } = usePrepareContractWrite({
    addressOrName: BUSDAddress,
    contractInterface: erc20ABI,
    functionName: 'approve',
    args: [presaleContractConfig.addressOrName, ethers.constants.MaxUint256],
  });
  const { isLoading: approveIsLoading, writeAsync: approveWrite } = useContractWrite({
    ...approveConfig,
    onError(err) {
      toast.error(err.message);
    },
    onSuccess(data) {
      toast.promise(data.wait(1), {
        pending: `💰 Approving contract to spend $BUSD.`,
        success: `💸 Contract approved.`,
        error: `💥 Error approving contract.`,
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
        <VStack>
          <Input
            w="full"
            variant={'flushed'}
            textAlign="end"
            placeholder="ENTER AMOUNT"
            borderColor="red"
            {...input}
            _placeholder={{
              color: 'inherit',
              opacity: 0.9,
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          />
          <HStack fontSize={'xs'} color="gray.300" w="full" justifyContent={'space-between'}>
            <Text
              cursor="pointer"
              _active={{ textDecoration: 'underline' }}
              _focus={{ textDecoration: 'underline' }}
              _hover={{ textDecoration: 'underline' }}
              onClick={() => setToMint(balance * 0.25)}
            >
              25%
            </Text>
            <Text
              cursor="pointer"
              _active={{ textDecoration: 'underline' }}
              _focus={{ textDecoration: 'underline' }}
              _hover={{ textDecoration: 'underline' }}
              onClick={() => setToMint(balance * 0.5)}
            >
              50%
            </Text>
            <Text
              cursor="pointer"
              _active={{ textDecoration: 'underline' }}
              _focus={{ textDecoration: 'underline' }}
              _hover={{ textDecoration: 'underline' }}
              onClick={() => setToMint(balance * 0.75)}
            >
              75%
            </Text>
            <Text
              cursor="pointer"
              _active={{ textDecoration: 'underline' }}
              _focus={{ textDecoration: 'underline' }}
              _hover={{ textDecoration: 'underline' }}
              onClick={() => setToMint(balance)}
            >
              100%
            </Text>
          </HStack>
        </VStack>
        {/* <Divider orientation="vertical" minH="32px" borderLeftColor={'black'} opacity={1} /> */}
        {Presale.loading ? (
          <Spinner size="md" color="black" />
        ) : (
          <>
            {!ended ? (
              <>
                {Presale.allowance && Presale.allowance > balance ? (
                  <>
                    {toMint === undefined ? (
                      <NetworkButton disabled>ENTER AN AMOUNNT</NetworkButton>
                    ) : (
                      <>
                        {toMint > balance ? (
                          <>
                            <NetworkButton px={8} disabled>
                              NOT ENOUGH $BUSD
                            </NetworkButton>
                          </>
                        ) : (
                          <>
                            {Presale.userInvested &&
                            Presale.currentEpoch &&
                            Presale.userInvested >=
                              (Presale.userCap ?? 0) *
                                ((Presale?.currentEpoch?.price ?? 0) / 100) &&
                            Presale.currentEpoch.id !== 5 ? (
                              <NetworkButton px={8} disabled>
                                CAP REACHED
                              </NetworkButton>
                            ) : (
                              <>
                                {investIsLoading ? (
                                  <NetworkButton isLoading loadingText="Buying..." px={8}>
                                    BUY TOKEN
                                  </NetworkButton>
                                ) : (
                                  <NetworkButton
                                    px={8}
                                    onClick={() => investWrite && investWrite()}
                                  >
                                    BUY TOKEN
                                  </NetworkButton>
                                )}
                              </>
                            )}
                          </>
                        )}
                      </>
                    )}
                  </>
                ) : (
                  <>
                    {approveIsLoading ? (
                      <NetworkButton isLoading loadingText="Approving..." px={8}>
                        APPROVE
                      </NetworkButton>
                    ) : (
                      <NetworkButton px={8} onClick={() => approveWrite && approveWrite()}>
                        APPROVE
                      </NetworkButton>
                    )}
                  </>
                )}
              </>
            ) : (
              <>
                <NetworkButton disabled>BUY TOKEN</NetworkButton>
              </>
            )}
          </>
        )}
      </Flex>
    </>
  );
}

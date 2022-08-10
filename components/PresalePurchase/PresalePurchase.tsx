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
} from '@chakra-ui/react';
import { ethers } from 'ethers';
import { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { useContractWrite, erc20ABI, usePrepareContractWrite, useBalance, useAccount } from 'wagmi';
import { BUSDAddress, presaleContractConfig } from '../../config/constants';
import { VoidContext } from '../../context/VoidContext';
import { palette } from '../../styles/palette';
import ConnectWalletButton from '../ConnectWalletButton';
import NetworkButton from '../NetworkButton';

export default function PresalePurchase() {
  const { Presale } = useContext(VoidContext);
  const [toMint, setToMint] = useState<number | undefined>();
  const { getInputProps } = useNumberInput({
    step: 1,
    value: toMint,
    min: Presale.minInvest,
    max:
      Presale.currentEpoch && Presale.currentEpoch.maxContribution === 0
        ? Number(10000)
        : (Presale?.currentEpoch?.maxContribution ?? 0) - (Presale.userInvested ?? 0),
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
  const { address } = useAccount();
  const [balance, setBalance] = useState<number>(0);
  const {} = useBalance({
    addressOrName: address,
    token: BUSDAddress,
    watch: true,
    onSuccess(data) {
      setBalance(Number(data.formatted));
    },
  });
  return (
    <>
      <Flex direction={{ base: 'column', lg: 'row' }} w="full" py={12} gap={4}>
        <HStack gap={8} fontSize="2xl" w={{ base: '100%', lg: '50%' }}>
          <Divider w="10%" borderColor={palette.blue} borderBottomWidth="4px" opacity={1} />
          <Text fontWeight={'bold'}>PURCHASE </Text>
        </HStack>
        <Flex
          justifyContent={{ base: 'space-between', lg: 'end' }}
          direction={{ base: 'column', lg: 'row' }}
          w="100%"
          gap={3}
        >
          <ConnectWalletButton />
          <Flex gap={2} bgColor={palette.yellow} rounded="xl" h="fit-content" alignItems={'center'}>
            <Input
              w="50%"
              m={2}
              variant={'flushed'}
              textAlign="end"
              color="black"
              placeholder="ENTER AMOUNT"
              borderColor="black"
              {...input}
              _placeholder={{
                color: 'inherit',
                opacity: 0.9,
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            />
            <Divider orientation="vertical" minH="32px" borderLeftColor={'black'} opacity={1} />
            {Presale.loading ? (
              <Spinner size="md" color="black" />
            ) : (
              <>
                {Presale.whitelistId === 0 ? (
                  <NetworkButton disabled>NOT WHITELISTED</NetworkButton>
                ) : (
                  <>
                    {Presale.allowance && Presale.allowance > 10000 ? (
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
                                Presale.userInvested >= Presale.currentEpoch?.maxContribution &&
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
                )}
              </>
            )}
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

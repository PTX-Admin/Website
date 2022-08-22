import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  VStack,
  Text,
  Spinner,
  HStack,
  useClipboard,
  IconButton,
  Image,
} from '@chakra-ui/react';
import { BiWallet } from 'react-icons/bi';
import { VscDebugDisconnect } from 'react-icons/vsc';
import { useEffect } from 'react';
import { useAccount, useConnect, useDisconnect, useNetwork, useSwitchNetwork } from 'wagmi';
import useMounted from '../../hooks/useMounted';
import useWeb3Formatter from '../../hooks/useWeb3Formatter';
import ConnectWalletButtonIcons from './ConnectWalletButtonIcons';
import {
  BUSDAddress,
  coinLogoBase64,
  connectorIcons,
  presaleContractConfig,
} from '../../config/constants';
import NetworkButton from '../NetworkButton';
import TokenTracker from '../tokenTracker';

export default function ConnectWalletButton() {
  const mounted = useMounted();
  const { address, isConnected, isConnecting, connector } = useAccount();
  const { connect, connectors, error, isError, isLoading } = useConnect({
    chainId: 56,
    onSuccess(data) {
      onClose();
      // summonToast(
      //   'connected',
      //   'info',
      //   <Text fontWeight="bold">Wallet connected {data.account}</Text>
      // );
    },
  });
  const { disconnect } = useDisconnect({
    // onSuccess() {
    //   summonToast('disconnected', 'warning', <Text fontWeight="bold">Wallet disconnected</Text>);
    // },
  });

  const { chain } = useNetwork();
  const { switchNetwork } = useSwitchNetwork();

  const { trimmedAddress } = useWeb3Formatter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { hasCopied, onCopy } = useClipboard(address ? address : '', {
    timeout: 1000,
  });

  // Show toast on error
  // useEffect(() => {
  //   if (!isError) return;
  //   if (error) summonToast('error', 'error', <Text color={'black'}>{error.message}</Text>);
  // }, [error, isError, onClose, summonToast]);

  // Show toast on copy
  // useEffect(() => {
  //   if (!hasCopied) return;
  //   summonToast('copy', 'info', <Text color={'black'}>Address copied</Text>);
  // }, [hasCopied, summonToast]);

  async function addToken(address: string, symbol: string) {
    if (typeof window === undefined) return;
    const ethereum = window.ethereum;
    if (!ethereum) return;
    await ethereum.request({
      method: 'wallet_watchAsset',
      params: {
        type: 'ERC20',
        options: {
          address: address,
          symbol: symbol,
          decimals: 18,
          image: coinLogoBase64,
        },
      },
    });
  }

  return (
    <>
      <Button
        // display={{ base: 'none', xl: 'flex' }}
        w="fit-content"
        onClick={() => onOpen()}
        rightIcon={<BiWallet />}
        variant="solid"
        p={6}
        fontWeight={'bold'}
      >
        {mounted && isConnected ? 'WALLET' : 'CONNECT'}
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        motionPreset="scale"
        scrollBehavior="inside"
      >
        <ModalOverlay backdropFilter="blur(4px)" />
        {/* background-color: rgba(255, 255, 255, .15); backdrop-filter: blur(5px); */}
        <ModalContent
          backgroundColor={'rgba(0,0,0, .85)'}
          backdropFilter="auto"
          backdropBlur="5px"
          border="2px solid rgba(255,0,0,0.3)"
        >
          <ModalHeader justifyContent="center" py={2} px={4}>
            {isConnected ? (
              <Text>Connected with {connector?.name}</Text>
            ) : (
              <Text>Connect Wallet</Text>
            )}
          </ModalHeader>
          <ModalCloseButton _focusVisible={{ boxShadow: '0 0 0 3px rgba(255,0,0, 0.6)' }} />
          <ModalBody px={4}>
            {isConnected ? (
              <VStack py={2} alignItems="start" gap={2}>
                <HStack w="100%" justifyContent="space-between">
                  <HStack cursor="pointer" onClick={() => onCopy()}>
                    <BiWallet />
                    <Text>{address && trimmedAddress(address)}</Text>
                  </HStack>
                  <IconButton
                    variant="ghost"
                    aria-label="disconnect"
                    icon={<VscDebugDisconnect />}
                    onClick={() => disconnect()}
                  />
                </HStack>
                <HStack w="100%" justifyContent="space-between">
                  {chain?.id === 56 && address ? (
                    <>
                      <TokenTracker
                        tokenLogo="https://assets.coingecko.com/coins/images/825/small/bnb-icon2_2x.png?1644979850"
                        address={address}
                        watch={true}
                        cacheTime={5000}
                        chainId={250}
                      />
                      <TokenTracker
                        tokenLogo={coinLogoBase64}
                        token={'0x5Ec500C5C6f0a270b633d5D5f0c3b9eB9b041455'}
                        address={address}
                        watch={true}
                        cacheTime={5000}
                        chainId={250}
                      />
                    </>
                  ) : (
                    <>
                      {isLoading ? (
                        <Button isLoading loadingText="Switching" borderColor="white">
                          Switch to BSC
                        </Button>
                      ) : (
                        <Button
                          onClick={() => switchNetwork && switchNetwork(56)}
                          borderColor="white"
                        >
                          Switch to BSC
                        </Button>
                      )}
                    </>
                  )}
                </HStack>
                {chain?.id === 56 && address && mounted && window.ethereum && (
                  <NetworkButton
                    variant={'solid'}
                    leftIcon={
                      <Image
                        src={connectorIcons['MetaMask'].logoURI}
                        alt="MetaMask logo"
                        minH="32px"
                      />
                    }
                    borderColor="red"
                    onClick={() => addToken('0x5Ec500C5C6f0a270b633d5D5f0c3b9eB9b041455', 'PTX')}
                  >
                    Add $PTX
                  </NetworkButton>
                )}
              </VStack>
            ) : (
              <VStack p={4}>
                {mounted && isConnecting ? (
                  <>
                    <Text fontWeight={'bold'}>Connecting</Text>
                    <Spinner size="xl" />
                  </>
                ) : (
                  <>
                    {connectors.map((connector) => (
                      <Button
                        w="100%"
                        disabled={!connector.ready}
                        key={connector.id}
                        onClick={() => connect({ chainId: 56, connector: connector })}
                        leftIcon={<ConnectWalletButtonIcons connector={connector.name} />}
                      >
                        <Text w="100%">{connector.name}</Text>

                        {!connector.ready && ' (unavailable)'}
                      </Button>
                    ))}
                  </>
                )}

                {/* {mounted && activeChain && (
                <div>Connected to {activeChain.name}</div>
              )}

              {mounted &&
                chains.map((x) => (
                  <Button
                    disabled={!switchNetwork || x.id === activeChain?.id}
                    key={x.id}
                    onClick={() => switchNetwork?.(x.id)}
                  >
                    {x.name}
                    {isLoading && pendingChainId === x.id && ' (switching)'}
                  </Button>
                ))} */}
              </VStack>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
      <VStack></VStack>
    </>
  );
}

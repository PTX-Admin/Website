import type { AppProps } from 'next/app';
import { ChakraProvider, VStack } from '@chakra-ui/react';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet';
import '@fontsource/montserrat';
import '@fontsource/nunito';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { customTheme } from '../styles/theme';
import { bscChain } from '../config/networks';
import { ProtocolXProvider } from '../context/ProtocolXContext';
import Navbar from '../components/Navbar';

const { provider } = configureChains(
  [bscChain],
  [
    jsonRpcProvider({
      rpc: (chain) => {
        if (chain.id !== bscChain.id) return null;
        return { http: chain.rpcUrls.default };
      },
    }),
  ]
);

const wagmiClient = createClient({
  autoConnect: true,
  provider,
  connectors: [
    new MetaMaskConnector({ chains: [bscChain] }),
    new CoinbaseWalletConnector({
      chains: [bscChain],
      options: {
        appName: 'Protocol X',
      },
    }),
    new WalletConnectConnector({
      chains: [bscChain],
      options: {
        qrcode: true,
      },
    }),
  ],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <ProtocolXProvider>
        <ChakraProvider theme={customTheme}>
          <VStack
            minH={'100vh'}
            w="100vw"
            position="fixed"
            top="0px"
            left="0px"
            zIndex={-1}
            backgroundImage={'url(./bg.jpg)'}
            backgroundSize="cover"
            // backgroundPosition={'center'}
            backgroundAttachment="scroll"
            backgroundRepeat={'no-repeat'}
          ></VStack>
          <VStack
            minH={'99vh'}
            w="full"
            // backgroundImage={'url(./bg.jpg)'}
            // backgroundSize="cover"
            // // backgroundPosition={'center'}
            // backgroundAttachment="fixed"
            // backgroundRepeat={'no-repeat'}
          >
            <Navbar />
            <Component {...pageProps} />
          </VStack>
        </ChakraProvider>
      </ProtocolXProvider>
    </WagmiConfig>
  );
}

export default MyApp;

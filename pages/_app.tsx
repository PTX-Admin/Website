import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { customTheme } from '../styles/theme';
import { bscChain } from '../config/networks';
import { VoidProvider } from '../context/VoidContext';

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
        appName: 'Void Token',
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
      <VoidProvider>
        <ChakraProvider theme={customTheme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </VoidProvider>
    </WagmiConfig>
  );
}

export default MyApp;

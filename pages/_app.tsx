import type { AppProps } from 'next/app';
import { ChakraProvider, VStack } from '@chakra-ui/react';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import '@rainbow-me/rainbowkit/styles.css';
import '@fontsource/montserrat';
import '@fontsource/nunito';
import '@fontsource/poppins';
import { customTheme } from '../styles/theme';
import { bscChain } from '../config/networks';
import { ProtocolXProvider } from '../context/ProtocolXContext';
import { darkTheme, getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';

const { provider, chains } = configureChains(
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

const { connectors } = getDefaultWallets({
  appName: 'Protocol X',
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  provider,
  connectors,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={darkTheme()} showRecentTransactions={true}>
        <ProtocolXProvider>
          <ChakraProvider theme={customTheme}>
            <Component {...pageProps} />
          </ChakraProvider>
        </ProtocolXProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;

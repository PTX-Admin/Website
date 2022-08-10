import { ColorModeScript } from '@chakra-ui/react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta property="og:title" content="Void Token Presale" />
          <meta property="og:image" content="/logo512.png" />
          <meta
            property="og:description"
            content=" Void is the next revolution of DeFi. With the hybrid system of VOID we combine the best
            parts of REFLECTION, NFTs and OHM models into one unique project never seen before and a
            simple buy-hold-earn system that grows your portfolio in your wallet, fast and easy.
            Void rewards holders with automatic $DAI Reflection from our Treasury and every
            transaction made with $VOID, increasing their $DAI holdings over time.."
          />
          <link rel="shortcut icon" href="/logo512.png" />
        </Head>
        <body>
          {/* 👇 Here's the script */}
          <ColorModeScript initialColorMode={'dark'} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

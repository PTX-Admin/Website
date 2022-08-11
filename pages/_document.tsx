import { ColorModeScript } from '@chakra-ui/react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta property="og:title" content="ProtocolX" />
          <meta property="og:image" content="/logo512.png" />
          <meta
            property="og:description"
            content="Protocol X is the first SEM Auto-Compounding BSC project here to change the future of DeFi…"
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

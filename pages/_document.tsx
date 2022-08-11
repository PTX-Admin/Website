import { ColorModeScript } from '@chakra-ui/react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta property="og:title" content="ProtocolX dApp" />
          <meta property="og:image" content="/logo512.png" />
          <meta
            property="og:description"
            content="ProtocolX an is Auto-Compouding Protocol
ProtocolX $PTX begins as a 1.77% daily auto-rebasing token. What does that mean? Once you buy the token, it will begin to automatically rebase in your wallet. No work to do to make the magic happen!

Just by simply holding the $PTX token in your wallet, you will receive rebases every 30 minutes that are directly and immediately added to your wallet (no claiming required)."
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

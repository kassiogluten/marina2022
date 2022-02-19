/* eslint-disable @next/next/no-css-tags */
import { ColorModeScript } from "@chakra-ui/react";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <meta name="theme-color" content="#F2E0C7"></meta>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
          <link href="/fonts/fonts.css" rel="stylesheet" />
          <link rel="shortcut icon" href="/favicon.png" type="image/png" />
          <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;700;800;900&display=swap" rel="stylesheet"/>
        </Head>
        <body>
          <ColorModeScript initialColorMode={"light"} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

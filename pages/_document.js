// found on official website :   https://nextjs.org/docs/advanced-features/custom-document
import { Html, Head, Main, NextScript } from "next/document";
import Script from 'next/script'

// chakra ui - specific
import { ColorModeScript } from "@chakra-ui/react";

export default function Document() {
  return (
    <Html lang="en">

      <Head>
      {/* <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Q1Z378W5RW"
          strategy="afterInteractive"
        ></Script> */}
        <script type="text/javascript" id="clustrmaps" src="//clustrmaps.com/map_v2.js?d=F48NK2Ar5Qwnn67LSGGhl39jfGhqtBkqjkzW2moEx4U&cl=ffffff&w=a"></script>
      </Head>
      <body>
        <ColorModeScript />
        <Main />
        <NextScript />
    
      </body>
    </Html>
  );
}

// found on official website :   https://nextjs.org/docs/advanced-features/custom-document
import { Html, Head, Main, NextScript } from "next/document";
import Script from 'next/script'

// chakra ui - specific
import { ColorModeScript } from "@chakra-ui/react";

export default function Document() {
  return (
    <Html lang="en">

      <Head>
      <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Q1Z378W5RW"
          strategy="afterInteractive"
        ></Script>

      <Script
        onLoad={() => {
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-Q1Z378W5RW');
        }}
      >
      </Script>
      </Head>
      <body>
        <ColorModeScript />
        <Main />
        <NextScript />
    
      </body>
    </Html>
  );
}

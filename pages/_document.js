// found on official website :   https://nextjs.org/docs/advanced-features/custom-document
import { Html, Head, Main, NextScript } from "next/document";

// chakra ui - specific
import { ColorModeScript } from "@chakra-ui/react";

export default function Document() {
  return (
    <Html lang="en">

      <Head>
        <meta
          name="google-site-verification"
          content="-NttIeCsNFX7bi_Rj6onoCpyFICL51IJWnNl0mwkE2U"
        />
      </Head>
      <body>
        <ColorModeScript />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

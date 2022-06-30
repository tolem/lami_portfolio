// chakra ui imports
import {
  ChakraProvider,
  color,
  ColorModeProvider, // so light/dark mode can persist
  useColorMode,
} from "@chakra-ui/react";

// our custom theme
import customTheme from "../styles/theme";

// so when theme is switched, the entire page changes its color
import { Global, css } from "@emotion/react";

// importing prism light and dark theme for code snippets
import { prismLightTheme, prismDarkTheme } from "../styles/prism";

import "@fontsource/inter";

// our custom bg style
import { bgColor } from "../styles/theme_color_schemes";

// SEO
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import Script from "next/script";

import { useRouter } from "next/router";
import {useEffect} from 'react';

const GlobalStyle = ({ children }) => {
  // grabbing reference
  const { colorMode } = useColorMode();

  return (
    <>
      <Global
        styles={css`
          ${colorMode === "light" ? prismLightTheme : prismDarkTheme};
          ::selection {
            background-color: #90cdf4;
            color: #fefefe;
          }
          ::-moz-selection {
            background: #ffb7b7;
            color: #fefefe;
          }
          html {
            min-width: 356px;
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: ${colorMode === "light" ? bgColor.light : bgColor.dark};
          }
        `}
      />
      {children}
    </>
  );
};

// root app
function MyApp({ Component, pageProps }) {
  // const router = useRouter()

  // useEffect(() => {
  //   const handleRouteChange = (url) => {
  //     ga.pageview(url)
  //   }

  //   router.events.on('routeChangeComplete', handleRouteChange)
  //   return () => {
  //     router.events.off('routeChangeComplete', handleRouteChange)
  //   }
  // }, [router.events])

  return (
    <>
    <Script 
    src={`https://www.googletagmanager.com/gtag/js?id=G-Q1Z378W5RW`}
    strategy="afterInteractive"
    /> 
    <Script id="google-analytics" strategy="afterInteractive">
      {`

      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-Q1Z378W5RW');
      `}
       </Script>
      <DefaultSeo {...SEO} />
      <ChakraProvider resetCSS theme={customTheme}>
        <ColorModeProvider
          options={{
            initialColorMode: "dark",
            useSystemColorMode: true,
          }}
        >
          <GlobalStyle>
            <Component {...pageProps} />
          </GlobalStyle>
        </ColorModeProvider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;


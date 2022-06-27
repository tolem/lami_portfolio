// wrapper for any page we want to add to the website
// -> wrap the container around everything in index.js
// avoids rewriting same page styles
// -> we will have the same for blog posts layouts
import React from "react";

// for Chakra
import { useColorMode, Flex, Button, Box } from "@chakra-ui/react";

// our components -> those we want rendered on every page
import Navbar from "./Navbar";
// import Newsletter from "./Newsletter";
import Footer from "./Footer";
import ScrollTopButton from "./ScrollTopButton";

import { FadeInWrapper } from "./FadeInWrapper";

const Container = ({ children }) => {
  // for customizing based on light mode vs dark mode -> dynamically
  const { colorMode } = useColorMode();

  const color = {
    light: "RGBA(0, 0, 0, 0.90)", // "gray.700",
    dark: "white",
  };

  return (
    <>
      <Navbar />
      {/* This will hold the code for the rest of the page -> in the "Flex" component */}
      <Flex
        as="main"
        justifyContent="center"
        flexDirection="column"
        color={color[colorMode]} // text color
        px={[0, 4, 4]}
        mt={[4, 8, 4]}
      >
        <Flex px={4} flexDir="column" minH="90vh">
          {children}
        </Flex>
        <FadeInWrapper>
          
        </FadeInWrapper>

        {/* button scroll back to top */}
        <ScrollTopButton />
      </Flex>

      {/* Footer should take whole space */}
      <FadeInWrapper>
        <Footer />
      </FadeInWrapper>
    </>
  );
};

export default Container;

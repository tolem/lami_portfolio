import React from "react";

// for Chakra
import {
  useColorMode,
  Button, // to separate in a different file
  Flex,
  Box,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";

//icons for mobile version
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

// for links in Navbar
import NextLink from "next/link";

// darkmode switch component in the navbar -> since it will be shown in every page
import DarkModeSwitch from "./DarkModeSwitch";

// animations <3
import { motion } from "framer-motion";
import { FadeInWrapper } from "./FadeInWrapper";

const Navbar = () => {
  // for customizing based on light mode vs dark mode -> dynamically
  const { colorMode } = useColorMode();

  // to switch navbar between mobile and desktop version
  const { isOpen, onOpen, onClose } = useDisclosure();

  const color = {
    light: "RGBA(0, 0, 0, 0.90)",
    dark: "white",
  };

  const navHoverBg = {
    light: "gray.100",
    dark: "gray.700",
  };

  const DesktopVersion = () => {
    return (
      <Flex
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        maxWidth="800px"
        minWidth="356px"
        width="100%"
        as="nav"
        px={[2, 6, 6]}
        py={2}
        mt={8}
        mb={[0, 0, 8]}
        mx="auto"
        color={color[colorMode]}
        display={{ base: "none", md: "flex" }}
      >
          <DarkModeSwitch />
        <Box>
          <NextLink href="/" passHref>
            <Button
              as="a"
              variant="ghost"
              p={[1, 2, 4]}
              _hover={{ backgroundColor: navHoverBg[colorMode] }}
            >
              Home
            </Button>
          </NextLink>
          <NextLink href="/about" passHref>
            <Button
              as="a"
              variant="ghost"
              p={[1, 2, 4]}
              _hover={{ backgroundColor: navHoverBg[colorMode] }}
            >
              About
            </Button>
          </NextLink>
          <NextLink href="/portfolio" passHref>
            <Button
              as="a"
              variant="ghost"
              p={[1, 2, 4]}
              _hover={{ backgroundColor: navHoverBg[colorMode] }}
            >
              Portfolio
            </Button>
          </NextLink>
          <NextLink href="/blog" passHref>
            <Button
              as="a"
              variant="ghost"
              p={[1, 2, 4]}
              _hover={{ backgroundColor: navHoverBg[colorMode] }}
            >
              Blog
            </Button>
          </NextLink>
        </Box>
      
      </Flex>
    );
  };

  const MobileVersion = () => {
    return (
      <>
        <Box px={8} py={2} mt={8} size={"md"} display={{ md: "none" }}>
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
              color={useColorModeValue("black", "white")}
              borderColor={useColorModeValue("gray.200", "")}
              borderWidth={useColorModeValue("1px", "")}
            />
                        <DarkModeSwitch />
          </Flex>

          {isOpen ? (
            <FadeInWrapper>
              <Box pb={4} display={{ md: "none" }} color={color[colorMode]}>
                <Stack as={"nav"} spacing={4}>
                  <NextLink href="/" passHref>
                    <Button
                      as="a"
                      variant="ghost"
                      p={[1, 2, 4]}
                      _hover={{ backgroundColor: navHoverBg[colorMode] }}
                    >
                      Home
                    </Button>
                  </NextLink>
                  <NextLink href="/about" passHref>
                    <Button
                      as="a"
                      variant="ghost"
                      p={[1, 2, 4]}
                      _hover={{ backgroundColor: navHoverBg[colorMode] }}
                    >
                      About
                    </Button>
                  </NextLink>
                  <NextLink href="/portfolio" passHref>
                    <Button
                      as="a"
                      variant="ghost"
                      p={[1, 2, 4]}
                      _hover={{ backgroundColor: navHoverBg[colorMode] }}
                    >
                      Portfolio
                    </Button>
                  </NextLink>
                  <NextLink href="/blog" passHref>
                    <Button
                      as="a"
                      variant="ghost"
                      p={[1, 2, 4]}
                      _hover={{ backgroundColor: navHoverBg[colorMode] }}
                    >
                      Blog
                    </Button>
                  </NextLink>
                </Stack>
              </Box>
            </FadeInWrapper>
          ) : null}
        </Box>
      </>
    );
  };

  return (
    <>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <DesktopVersion />
        <MobileVersion />
      </motion.div>
    </>
  );
};

export default Navbar;

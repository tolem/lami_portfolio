/* About me - page */
import Head from "next/head";

// more chakra ui elements
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Button, // base
  Box, // extensions
  Link,
} from "@chakra-ui/react";

import { ChakraNextImage } from "../components/ChakraNextImage";

// animation
import { FadeInWrapper } from "../components/FadeInWrapper";

// components
import Container from "../components/Container"; // wrapper of pages

// animations
import { motion } from "framer-motion";

// icons
import { FiMail } from "react-icons/fi";

// SEO
import { NextSeo } from "next-seo";

const url = "https://thosam.vercel.app/about";
const title = "About - Lami Olowoniyi";
const description = "My about page where you can learn more about me !";

// overriding SEO
const SEO = {
  title,
  description,
  canonical: url,

  openGraph: {
    title,
    description,
    url,
  },
};

const About = () => {
  // for customizing based on light mode vs dark mode -> dynamically
  const { colorMode } = useColorMode();

  // so subtext is a bit lighter
  const colorSecondary = {
    light: "gray.700",
    dark: "gray.400",
  };

  return (
    <>
      <NextSeo {...SEO} />
      <FadeInWrapper>
        <Container>
          <Head>
            <title>About me - Lami Olowoniyi</title>
          </Head>
          <Flex
            w="100%"
            flexDir={["column", "column", "row"]}
            align="center"
            px={4}
            mt={[8, 8, 16]}
            mb={8}
            maxW="1200px"
            mx="auto"
          >
            <Flex flexDir="column" w={["100%", "100%", "50%"]} mr={[0, 0, 4]}>
              <Heading mb={3}>Hi everyone, I'm Lami </Heading>

              <Text color={colorSecondary[colorMode]} mb={3}>
                I am a <strong>UX/Frontend developer</strong>,  currently I am a Master's Student living in
                Albany NY.
              </Text>

              <Text color={colorSecondary[colorMode]} mb={3}>
                I go to{" "}
                <Link
                  color="blue.500"
                  href="https://www.albany.edu/"
                  isExternal
                >
                  SUNY Albany
                </Link>{" "}
                where I study information science. My personal website is where I
                showcase my projects, writing, statistics, experience, and more.
                Feel free to reach out via email or any social media.
              </Text>

              <Text color={colorSecondary[colorMode]} mb={3}>
                I come from Nigeria and grew up in Lagos.
              </Text>
              <Text color={colorSecondary[colorMode]} mb={3}>
                I have a passion for everything related to human computer interaction and user experience research.
              </Text>
              <Text color={colorSecondary[colorMode]} mb={3}>
                Here are some of the things I like to do in my spare time, I enjoy wacthing sci-fi  and historical films, and reading works of fiction and non-fiction.  
                <br />
                One of my personal favoriate is the The Three Body Problem by Liu Cixin.
                {" "}
                <br />

              </Text>

              <Stack direction={"row"} align={"center"}>
                <Link
                  href="mailto:olamide2olowoniyi@gmail.com"
                  title="Email"
                  isExternal
                >
                  <Button
                    data-splitbee-event="Button Click"
                    data-splitbee-event-type="Resume"
                    mt={5}
                    leftIcon={<FiMail />}
                  >
                    Contact me
                  </Button>
                </Link>
              </Stack>
            </Flex>
            {/* youtube featured video */}
            <Box mt={[10, 10, 0]} w={["100%", "100%", "50%"]}>
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.7 }}
              >
                <ChakraNextImage
                  ml={4}
                  src={"/images/dog_profile2.webp"}
                  h="600px"
                  maxW="450px"
                  objectFit="cover"
                  alt="a dog profile pic :)"
                />
              </motion.div>
            </Box>
          </Flex>
        </Container>
      </FadeInWrapper>
    </>
  );
};

export default About;

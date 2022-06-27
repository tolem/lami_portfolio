/* Main/Root - Home screen */
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
  AspectRatio,
} from "@chakra-ui/react";

// components
import Container from "../components/Container"; // wrapper of pages
import ProjectCards from "../components/ProjectCards";

// animations
import { motion } from "framer-motion";

// SEO
import { NextSeo } from "next-seo";
import FadeInWrapper from "../components/FadeInWrapper";
import Todo from "../components/ToDo";

const url = "https://lamiolowoniyi.info/";
const title = "Lami Olowoniyi";
const description =
  "Frontend Developer, and AI enthusiast. This is my personal website where you can read my articles and have a look at my portfolio - Have fun !";

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

export default function Index() {
  const { colorMode } = useColorMode();

  // so subtext is a bit lighter
  const colorSecondary = {
    light: "gray.700",
    dark: "gray.500",
  };

  return (
    <>
      <NextSeo {...SEO} />
      <Container>
        <Head>
          <title>Home - Lami Olowoniyi</title>
        </Head>

<FadeInWrapper>
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
            <Heading mb={3}>Hi there, I'm Lami 😁</Heading>
            <Text color={colorSecondary[colorMode]} mb={3}>
              I am a  <b>Usablity Specialist and Frontend developer</b>. Also an international student living in
              the United States.
            </Text>

            <Text color={colorSecondary[colorMode]}>
              On this website, you can find useful resources on topics about me... You can check out my {" "}
              <Link href="/blog" color="blue.500">
                Blog
              </Link>{" "}
              if you like reading, otherwise you can check my{" "}
              <Link href="/works" color="blue.500">
                Projects
              </Link>{" "}
              I have been working on. Or learn more{" "}
              <Link href="/about" color="blue.500">
                about me
              </Link>
              .
            </Text>

            <Stack direction={"row"} align={"center"}>
              <Link href="/portfolio" title="portfolio">
                <Button mt={5}>My works 💻</Button>
              </Link>
            </Stack>
          </Flex>
          {/* youtube featured video */}
          <Box mt={[10, 10, 0]} w={["100%", "100%", "50%"]}>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.6 }}
            >
              <AspectRatio ratio={16 / 9}>
                <iframe
                  src="https://www.youtube.com/embed/EGghJz989Cw" // ?autoplay=1 // i put this to 0 to avoid using network resources and optimize website speed
                  alt="Featured YouTube video"
                  allowFullScreen={true}
                  style={{ borderRadius: 10 }}
                  title="Link Analysis Why it matter"
                />
              </AspectRatio>
            </motion.div>
          </Box>
        </Flex>
</FadeInWrapper>

        <Stack
          as="main"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          maxWidth="800px"
          px={2}
        >
          {/* Lower sections */}
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="800px"
          >
            {/* About me */}
            <FadeInWrapper>
            <Box as="section" mt={10} mb={10}>
              <Heading
                letterSpacing="tight"
                mt={8}
                size="lg"
                fontWeight={700}
                as="h2"
                mb={4}
              >
                About Me
              </Heading>
              <Text color={colorSecondary[colorMode]}>
                Hi everyone 👋, my name is Lami Olowoniyi, and I am currently a student at{" "}
                <Link
                  color="blue.500"
                  href="https://www.albany.edu"
                  isExternal
                >
                  SUNY Albany
                </Link>{" "}
                . This is my personal website is where I
                showcase my projects, writing, experience, and more.
                Feel free to reach out via any of the social media icons in the footer section.
              </Text>

              <Link href="/about">
                <Button mt={5} mb={10}>
                  More about me 😁
                </Button>
              </Link>
            </Box>
            </FadeInWrapper>

            {/* Featured Projects */}
            <FadeInWrapper>
            <Box as="section" mt={10} mb={20}>
              <Heading
                letterSpacing="tight"
                mt={8}
                size="lg"
                fontWeight={700}
                as="h2"
                mb={4}
              >
                Featured Project
              </Heading>

              <ProjectCards featured={true} />

              <Link href="/portfolio">
                <Button mt={5} mb={10}>
                  See more projects ? 😄
                </Button>
              </Link>
            </Box>
            </FadeInWrapper>
            
          </Flex>
        </Stack>

        <Box>
        <FadeInWrapper>
        <Todo></Todo>
        </FadeInWrapper>
        </Box>
      </Container>
    </>
  );
}

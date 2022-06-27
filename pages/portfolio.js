/* Portfolio - page */
import Head from "next/head";

import { useEffect } from "react";

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
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";

import { ChakraNextImage } from "../components/ChakraNextImage";

// components
import Container from "../components/Container"; // wrapper of pages
import SkillCards from "../components/SkillCards";
import ProjectCards from "../components/ProjectCards";
import CourseCards from "../components/CourseCards";

// animations
import { motion } from "framer-motion";
import { FadeInWrapper } from "../components/FadeInWrapper";

// icon
import { GrBlockQuote } from "react-icons/gr";
import { FiMail } from "react-icons/fi";

// SEO
import { NextSeo } from "next-seo";

const url = "https://lamiolowoniyi.info/portfolio";
const title = "Portfolio - Lami Olowoniyi";
const description =
  "Have a look at my projects - see my education and experience !";

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

const Portfolio = () => {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      }, {passive: true});
    });
  });

  const { colorMode } = useColorMode();

  // so subtext is a bit lighter
  const colorSecondary = {
    light: "gray.700",
    dark: "gray.400",
  };

  return (
    <>
      <NextSeo {...SEO} />
      <Container>
        <Head>
          <title>Portfolio - Lami Olowoniyi</title>
        </Head>

        <FadeInWrapper>
          <Flex
            w="100%"
            flexDir={["column", "column", "row"]}
            align="center"
            px={4}
            mt={[8, 8, 16]}
            mb={40}
            maxW="1200px"
            mx="auto"
          >
            <Flex flexDir="column" w={["100%", "100%", "50%"]} mr={[0, 0, 4]}>
              <Heading mb={3}>Hi 👋, I'm Lami</Heading>
              <Text color={colorSecondary[colorMode]} mb={3}>
                I am a <b>Usablity Specialist and Frontend developer</b>, currently a Master's Student in
                Albany NY.
              </Text>

              <Text color={colorSecondary[colorMode]}>
                This is the portfolio page of my personal website !
              </Text>

              <Stack direction={"row"} align={"center"} spacing={4}>
                <Link href="#works">
                  <Button mt={5}>My works</Button>
                </Link>

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
            <Box mt={[10, 10, 0]} w={["100%", "100%", "50%"]}>
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.7 }}
              >
                <ChakraNextImage
                  src={"/images/dog_profile2.webp"}
                  h="600px"
                  maxW="450px"
                  objectFit="cover"
                  alt="dog pic :)"
                />
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
            {/* Quote time */}
            <FadeInWrapper>
              <Flex
                mb={4}
                bgColor={useColorModeValue("gray.100", "gray.900")}
                p={[5, 20, 50]}
                borderRadius={3}
                as="blockquote"
                borderLeft="10px solid"
                borderLeftColor={useColorModeValue("blue.400", "blue.700")}
              >
                <Icon
                  as={GrBlockQuote}
                  fontSize={40}
                  color={colorSecondary[colorMode]}
                  mr={4}
                />
                <Flex flexDir="column">
                  <Text
                    fontSize="xl"
                    fontStyle="italic"
                    color={colorSecondary[colorMode]}
                  >
                   It is not enough that we build products that function,
                    that are understandable and usable, we also need to build products
                     that bring joy and excitement, pleasure and fun, and, yes, beauty to people’s lives.


                  </Text>
                  <Text fontSize="xl" fontWeight="bold" mt={2}>
                    Don Norman
                  </Text>
                </Flex>
              </Flex>
            </FadeInWrapper>

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
                  Effective time-manager, detailed oriented, able to organize
                  and prioritize tasks, meet deadlines and work to reach
                  targets. <br />
                  Good communication, analytical and organization skills, very
                  motivated. I am accurate and proactive, reliable, motivated to
                  learn and ready to develop to my full potential.
                </Text>
              </Box>
            </FadeInWrapper>

            {/* Tech Stack */}
            <Box as="section" mt={10} mb={10} alignSelf={"center"}>
              <FadeInWrapper>
                <Heading
                  letterSpacing="tight"
                  mt={8}
                  size="lg"
                  fontWeight={700}
                  as="h2"
                  mb={7}
                >
                  Tech Stack
                </Heading>
              </FadeInWrapper>

              <SkillCards />
            </Box>

            {/* Featured Projects */}
            <Box id="works" as="section" mt={10} mb={10}>
              <FadeInWrapper>
                <Heading
                  letterSpacing="tight"
                  mt={8}
                  size="lg"
                  fontWeight={700}
                  as="h2"
                  mb={7}
                >
                  Projects
                </Heading>
              </FadeInWrapper>

              <ProjectCards />
            </Box>

            {/* Education */}
            <Box as="section" mt={10} mb={10} align="center">
              <FadeInWrapper>
                <Heading
                  letterSpacing="tight"
                  size="2xl"
                  fontWeight={700}
                  as="h2"
                  alignSelf={"center"}
                >
                  Education
                </Heading>
              </FadeInWrapper>

              {/* <MdOutlineSchool size="40px" /> */}

              {/* <MdOutlineSchool size="40px" /> */}
              <FadeInWrapper>

              </FadeInWrapper>

              <FadeInWrapper>
                <Heading
                  letterSpacing="tight"
                  mt={8}
                  size="lg"
                  fontWeight={700}
                  as="h2"
                  mb={7}
                >
                  SUNY Albany - Masters in Information Science
                </Heading>
              </FadeInWrapper>
              <Heading> Research Interest</Heading>
              <FadeInWrapper>
                <Box><Text> Information Organization </Text>
                <TexT> Knowledge Management </TexT>
                
                </Box>
                <Heading
                  letterSpacing="tight"
                  mt={8}
                  size="md"
                  fontWeight={700}
                  as="h2"
                  mb={7}
                >
                  Courses
                </Heading>
              </FadeInWrapper>
              <CourseCards semester={"2"} />

              <FadeInWrapper>
                <Heading
                  letterSpacing="tight"
                  mt={8}
                  size="md"
                  fontWeight={700}
                  as="h2"
                  mb={7}
                >
                  Certificates
                </Heading>
              </FadeInWrapper>
              <CourseCards semester={"1"} />

            </Box>

            {/* Contact Me */}
            <FadeInWrapper>
              <Box as="section" mt={10} mb={10}>
                <Heading
                  letterSpacing="tight"
                  mt={8}
                  size="lg"
                  fontWeight={700}
                  as="h2"
                  mb={7}
                >
                  Contact Me
                </Heading>
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
              </Box>
            </FadeInWrapper>
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default Portfolio;

// layout for each individual blog posts
import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

// for parsing date
import { parseISO, format } from "date-fns";

// chakra components
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Avatar,
} from "@chakra-ui/react";

// our custom components
import Container from "../components/Container";

export default function BlogLayout({ children, frontMatter }) {
  // for color theming
  const { colorMode } = useColorMode();
  const textColor = {
    light: "gray.700",
    dark: "gray.400",
  };

  // getting reference to the slug
  const router = useRouter();
  const slug = router.asPath.replace("/blog", "");

  // rendering
  return (
    <Container>
      <Head>
        <title>Blog - {frontMatter.title}</title>
      </Head>

      <Stack
        as="article"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="800px"
        w="100%"
        px={4}
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="800px"
          w="100%"
        >
          <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
            {frontMatter.title}
          </Heading>
          <Flex
            justify="space-between"
            align={["initial", "center"]}
            direction={["column", "row"]}
            mt={2}
            w="100%"
            mb={4}
          >
            <Flex align="center">
              <Avatar
                size="xs"
                name="Thösam Norlha-Tsang"
                src="../images/thosam_auth_image.webp"
                mr={2}
              />
              <Text fontSize="sm" color={textColor[colorMode]}>
                {frontMatter.by}
                {"Thösam Norlha-Tsang / "}
                {format(parseISO(frontMatter.publishedAt), "MMMM dd, yyyy")}
              </Text>
            </Flex>
            <Text fontSize="sm" color="gray.500" minWidth="100px" mt={[2, 0]}>
              {frontMatter.readingTime.text}
            </Text>
          </Flex>
        </Flex>
        {children}
      </Stack>
    </Container>
  );
}

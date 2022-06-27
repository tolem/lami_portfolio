// our blog page
import React, { useState } from "react";
import Head from "next/head";

// chakra components
import {
  useColorMode,
  Heading,
  Flex,
  Stack,
  Input,
  InputGroup,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";

// custom components
import Container from "../components/Container";
import BlogPost from "../components/BlogPost";

// custom function to fetch data
import { getAllFilesFrontMatter } from "../lib/mdx";

// SEO
import { NextSeo } from "next-seo";
import { FadeInWrapper } from "../components/FadeInWrapper";

const url = "https://thosam.vercel.app/blog";
const title = "Blog - Thösam Norlha-Tsang";
const description =
  "My blog page where you can learn from my experience and read interesting articles !";

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

export default function Blog({ posts }) {
  const { colorMode } = useColorMode();
  const input_Bg = {
    light: "gray.200",
    dark: "#202020", // "blackAlpha.500", -> with contrast cannot see
  };

  // state is needed for search functionality
  const [searchValue, setSearchValue] = useState("");

  const filteredBlogPosts = posts
    .sort(
      // sorting most recent first
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((frontMatter) =>
      frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
    );

  return (
    <>
      <NextSeo {...SEO} />
      <Head>
        <title>Blog - Thösam Norlha-Tsang</title>
      </Head>

      <FadeInWrapper>
      <Container>
        <Stack
          as="main"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          maxWidth="800px"
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="800px"
            px={4}
          >
            <Heading letterSpacing="tight" mb={8} as="h1" size="2xl">
              My blog 📝
            </Heading>

            <Heading size="sm" as="h3" mb={3} fontWeight="medium">
              Here you can read any of my {posts.length} articles, you can search keywords below. Enjoy ! 🙂 
            </Heading>

            <InputGroup mb={4} mr={4} w="100%" alignContent={"center"}>
              <Input
                aria-label="Search by title"
                placeholder="Search by title"
                onChange={(e) => setSearchValue(e.target.value)}
                variant="unstyled"
                p="15px"
                bg={input_Bg[colorMode]} 
                borderRadius="10px"
                color={useColorModeValue("black", "white")}
                _placeholder={{ color: useColorModeValue("gray.700", "gray.300") }}
              />
            </InputGroup>

            {!filteredBlogPosts.length && "No posts found :("}

            <VStack spacing={6}>
              {filteredBlogPosts.map((frontMatter) => (
                <FadeInWrapper key={frontMatter.title}>
                <BlogPost key={frontMatter.title} {...frontMatter} />
                </FadeInWrapper>
              ))}
            </VStack>
          </Flex>
        </Stack>
      </Container>
      </FadeInWrapper>
    </>
  );
}

// fetching data
export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("blog");

  return { props: { posts } };
}

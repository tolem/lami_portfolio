// rectangles (blog previews) that will be used inside blog.js (the blog page)
// after fetching the data, we will map and render blog posts as rectangles (in columns below search bar)
import React from "react";
import NextLink from "next/link";
import { useColorMode, Heading, Text, Flex, Box, Link, border, color } from "@chakra-ui/react";
import { parseISO, format } from "date-fns"; // to parse through the dates

const BlogPost = ({ title, publishedAt, summary, slug }) => {
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: "gray.700",
    dark: "gray.400",
  };
  const borderColor = {
    light: "gray.300",
    dark: "#ffffff09"
  }

  return (
    <NextLink href={`/blog/${slug}`} _hover={{ textDecoration: "none" }} passHref>
      <Link w="100%" _hover={{ textDecoration: "none" }}>
        <Box 
        p={5}
        display="block" 
        width="100%"
        border={"2px"}
        borderColor={borderColor[colorMode]}
        borderRadius={10}
        _hover={{
          borderColor: "#A0AEC0",
          // border: "3px"
        }}
        >
          <Flex
            width="100%"
            align="flex-start"
            justifyContent="space-between"
            flexDirection={["column", "row"]}
            // p="px"
          >
            <Flex
              flexDirection="column"
              align="flex-start"
              justifyContent="start"
              width="100%"
            >
              <Heading size="md" as="h3" mb={1} fontWeight="medium">
                {title}
              </Heading>
            </Flex>

            <Text
              color="gray.500"
              minWidth="140px"
              textAlign={["left", "right"]}
              mb={[4, 0]}
            >
              {format(parseISO(publishedAt), "MMMM dd, yyyy")} 
            </Text>
          </Flex>
          <Text color={secondaryTextColor[colorMode]}>{summary}</Text>
        </Box>
      </Link>
    </NextLink>
  );
};

export default BlogPost;

// where we define mdx components
// the goal of this file, is to convert markdown styles : h1, h2, h3, code snippets, alerts, ... to actual html and css components
// we declare custom components, then import all in MDXComponents at the end and we export

/** @jsxRuntime classic */
/** @jsx jsx */
import {
  Box,
  Alert,
  Code,
  Heading,
  Link,
  Text,
  Divider,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { jsx } from "@emotion/react";
import NextLink from "next/link";
import FadeInWrapper from "./FadeInWrapper";

// Link component
const CustomLink = (props) => {
  const { colorMode } = useColorMode();
  const color = {
    light: "blue.500",
    dark: "blue.500",
  };

  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <NextLink href={href} passHref>
        <Link color={color[colorMode]} {...props} />
      </NextLink>
    );
  }

  return <Link color={color[colorMode]} isExternal {...props} />;
};

// Quote component
const Quote = (props) => {
  const { colorMode } = useColorMode();
  const bgColor = {
    light: "blue.50",
    dark: "blue.900",
  };

  return (
    <Alert
      mt={4}
      w="98%"
      bg={bgColor[colorMode]}
      variant="left-accent"
      status="info"
      css={{
        "> *:first-of-type": {
          marginTop: 0,
          marginLeft: 8,
        },
      }}
      {...props}
    />
  );
};

// # and sending to the top
const DocsHeading = (props) => (
  <Heading
    css={{
      scrollMarginTop: "100px",
      scrollSnapMargin: "100px", // Safari
      "&[id]": {
        pointerEvents: "none",
      },
      "&[id]:before": {
        display: "block",
        height: " 6rem",
        marginTop: "-6rem",
        visibility: "hidden",
        content: `""`,
      },
      "&[id]:hover a": { opacity: 1 },
    }}
    {...props}
    mb="1em"
    mt="2em"
  >
    <Box pointerEvents="auto">
      {props.children}
      {props.id && (
        <Box
          aria-label="anchor"
          as="a"
          color="blue.500"
          fontWeight="normal"
          outline="none"
          _focus={{
            opacity: 1,
            boxShadow: "outline",
          }}
          opacity="0"
          ml="0.375rem"
          href={`#${props.id}`}
        >
          #
        </Box>
      )}
    </Box>
  </Heading>
);

// line component
const Hr = () => {
  const { colorMode } = useColorMode();
  const borderColor = {
    light: "gray.200",
    dark: "gray.600",
  };

  return <Divider borderColor={borderColor[colorMode]} my={4} w="100%" />;
};

// Declaring components here :
const MDXComponents = {
  h1: (props) => <FadeInWrapper><Heading as="h1" size="xl" my={4} {...props} /></FadeInWrapper>,
  h2: (props) => <FadeInWrapper><DocsHeading as="h2" size="lg" fontWeight="bold" {...props} /></FadeInWrapper>,
  h3: (props) => <FadeInWrapper><DocsHeading as="h3" size="md" fontWeight="bold" {...props} /></FadeInWrapper>,
  h4: (props) => <FadeInWrapper><DocsHeading as="h4" size="sm" fontWeight="bold" {...props} /></FadeInWrapper>,
  h5: (props) => <FadeInWrapper><DocsHeading as="h5" size="sm" fontWeight="bold" {...props} /></FadeInWrapper>,
  h6: (props) => <FadeInWrapper><DocsHeading as="h6" size="xs" fontWeight="bold" {...props} /></FadeInWrapper>,
  inlineCode: (props) => (
    <FadeInWrapper><Code colorScheme="yellow" fontSize="0.84em" {...props} /></FadeInWrapper>
  ),
  br: (props) => <FadeInWrapper><Box height="24px" {...props} /></FadeInWrapper>,
  hr: <FadeInWrapper>Hr</FadeInWrapper>,
  a: CustomLink,
  p: (props) => (
    <FadeInWrapper>
    <Text
      as="p"
      mt={0}
      lineHeight="tall"
      color={useColorModeValue("gray.900", "gray.300")}
      {...props}
    />
    </FadeInWrapper>
  ),
  ul: (props) => <FadeInWrapper><Box as="ul" pt={2} pl={4} ml={2} {...props} /></FadeInWrapper>,
  ol: (props) => <FadeInWrapper><Box as="ol" pt={2} pl={4} ml={2} {...props} /></FadeInWrapper>,
  li: (props) => <FadeInWrapper><Box as="li" pb={1} {...props} /></FadeInWrapper>,
  blockquote: <FadeInWrapper>Quote</FadeInWrapper>,
};

export default MDXComponents;


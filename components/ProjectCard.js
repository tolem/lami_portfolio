import Image from "next/image";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";

import { FiGithub, FiLink } from "react-icons/fi";

import { MotionBox } from "./MotionBox";

export default function ProjectCard({
  title,
  description,
  githubLink,
  demoLink,
  domainName,
  tags,
  images,
}) {
  return (
    <MotionBox whileHover={{ y: -5}}>
      <Center py={6}>
        <Box
          maxW={"700px"} // so can take up to whole width
          w={"full"}
          bg={useColorModeValue("gray.200", "#1B1B1B")}
          rounded={"25px"}
          p={6}
          overflow={"hidden"}
          boxShadow={useColorModeValue("2xl", "sm")} 
        >
          {/* rendering all images in a carousel */}
          <Box h={"320px"} mt={-6} mx={-6} mb={6} pos={"relative"}>
            <Image src={images[0]} objectFit="cover" layout={"fill"} alt={images[0]}/>
          </Box>

          <Stack>
            {/* rendering all tags */}
            <Stack direction={"row"} spacing={3}>
              {tags.map((tag) => (
                <Text
                  key={tag}
                  color={"green.500"}
                  textTransform={"uppercase"}
                  fontWeight={800}
                  fontSize={"sm"}
                  letterSpacing={1.1}
                >
                  {tag}
                </Text>
              ))}
            </Stack>

            <Heading
              color={useColorModeValue("gray.700", "white")}
              fontSize={"2xl"}
              fontFamily={"body"}
            >
              {title}
            </Heading>
            <Text color={"gray.400"}>{description}</Text>
          </Stack>
          <Stack mt={6} direction={"row"} spacing={6} align={"center"} >
            {demoLink && (
              <Link href={demoLink} isExternal>
                <Stack direction={"row"} align={"center"}>
                  <Text fontWeight={600}>View Demo</Text> <FiLink />
                </Stack>
              </Link>
            )}

            {githubLink && (
              <Link href={githubLink} isExternal>
                <Stack direction={"row"} align={"center"}>
                  <Text fontWeight={600}>View Source</Text> <FiGithub />
                </Stack>
              </Link>
            )}
          </Stack>
        </Box>
      </Center>
    </MotionBox>
  );
}

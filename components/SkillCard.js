import Image from "next/image";
import { VStack, HStack, Text, useColorModeValue, Box } from "@chakra-ui/react";

import { ChakraNextImage } from "./ChakraNextImage";

import { MotionBox } from "./MotionBox";

const SkillCard = ({ name, image, link, description }) => {
  return (
    <MotionBox whileHover={{ y: -5 }}>
      <HStack
        p={4}
        bg={useColorModeValue("gray.100", "#1B1B1B")}
        rounded="xl"
        w="full"
        textAlign="left"
        align="start"
        spacing={4}
        overflow={"hidden"}
        _hover={{ shadow: "md" }}
      >
        <Box
          rounded="lg"
          p={2}
          position="relative"
          // overflow="hidden"
          lineHeight={0}
          boxShadow="inset 0 0 1px 1px rgba(0, 0, 0, 0.015)"
        >
          <Box
            bg={useColorModeValue("gray.400", "#39465B")}
            position="absolute"
            top={0}
            bottom={0}
            left={0}
            right={0}
            opacity={0.25}
          ></Box>
          {/* <ChakraNextImage 
                    src={image}
                    alt={image}
                    h={26} w={26}
                    objectFit="cover"
          /> */}
          <Box position="relative" height={26} width={26}>
            <Image
              alt={image}
              src={image}
              fill
              // objectFit="cover"
              layout={"fill"}
              style={{ borderRadius: 5 }}
            />
          </Box>
        </Box>
        <VStack
          align="start"
          justify="flex-start"
          spacing={1}
          maxW="lg"
          h="100%"
          ml={4}
        >
          <VStack spacing={0} align="start" flexGrow={1}>
            <Text
              fontWeight="bold"
              fontSize="md"
              noOfLines={2}
              color="blue.400"
            >
              {name}
            </Text>
            <Text
              fontSize="sm"
              color={useColorModeValue("gray.500", "gray.200")}
            >
              {description}
            </Text>
          </VStack>
        </VStack>
      </HStack>
    </MotionBox>
  );
};

export default SkillCard;

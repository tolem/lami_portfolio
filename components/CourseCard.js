import {
  VStack,
  HStack,
  Text,
  useColorModeValue,
  Link,
  Box,
} from "@chakra-ui/react";
import { MotionBox } from "./MotionBox";

// color based on type
const chooseColor = (type) => {
  switch (type) {
    case "CS":
      return "green.300";
    case "PSY":
      return "blue.300";
    case "InfSC":
      return "purple.300";
    case "POLI":
      return "yellow.300";
    case "HUM":
      return "red.300";
    default:
      return "white";
  }
};

const CourseCard = ({ name, code, credits, type, link }) => {
  return (
    <MotionBox whileHover={{ y: -5 }}>
      <VStack
        p={4}
        bg={useColorModeValue("gray.200", "#1B1B1B")}
        rounded="xl"
        w="100%"
        textAlign="left"
        align="start"
        justify="flex-start"
        spacing={0}
        maxW="lg"
        h="100%"
        _hover={{ shadow: "md" }}
        borderLeft="10px solid"
        borderLeftColor={chooseColor(type)}
      >
        <Text fontWeight="bold" fontSize="md" noOfLines={2} color={useColorModeValue("gray.600", "gray.400")}>
          {name}
        </Text>
        <HStack w="full" justifyContent="space-between">
          <Box>
            <Text
              fontSize="sm"
              fontWeight="medium"
              color={useColorModeValue("gray.500", "gray.300")}
            >
              {code} · {credits} credits
            </Text>
          </Box>
          <Box>
            <Link href={link} title={code} color="blue.300" isExternal>
              <Text fontSize="sm" fontWeight="medium" color={useColorModeValue("blue.400", "blue.300")}>
                Course Link
              </Text>
            </Link>
          </Box>
        </HStack>
      </VStack>
    </MotionBox>
  );
};

export default CourseCard;

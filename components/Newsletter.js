import { useState } from "react";
import {
  Stack,
  FormControl,
  Input,
  Button,
  useColorModeValue,
  Heading,
  Text,
  Container,
  Flex,
  useToast,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

// method to further check if xxx@domain.something -> client side to avoid adding unnecessary contact on sendinblue
const ValidateEmail = (inputText) => {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.match(mailformat)) {
    console.log(inputText);
    console.log("validated");
    return true;
  } else {
    console.log(inputText);
    console.log("not validated");
    return false;
  }
};

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("initial");
  const [error, setError] = useState(false);

  const toast = useToast();

  const subscribe = async (e) => {
    e.preventDefault();
    setError(false);
    setState("submitting");
    setTimeout(() => {}, 1000);

    if (!ValidateEmail(email)) {
      setError(true);
      setState("initial");
      toast({
        title: "Oh no an error occured! 😢 Please try again later.",
        status: "error",
        isClosable: true,
      });
      return;
    }

    // sending email to our own server/backend
    // once we have sent the post request to the backend, we will wait the response
    const response = await fetch("/api/subscribe", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // 200 is http code to say OK, so if the response status isn't 200, then an error occured
    // (maybe the email was already in the database or something went wrong)
    if (response.status == 400) {
      // case already in the mailing list
      setError(true);
      setState("initial");
      toast({
        title: "Hey you already joined the mailing list! 😎",
        status: "error",
        isClosable: true,
      });
      return;
    } else if (response.status != 200) {
      // some internal error
      setError(true);
      setState("initial");
      toast({
        title: "Oh no an error occured! 😢 Please try again later.",
        status: "error",
        isClosable: true,
      });
      return;
    }

    // if no error, then we can just show a success message
    toast({
      title:
        "Thanks for signing up. If you don't receive an email shortly, double check your spam box 🙂!",
      status: "success",
      isClosable: true,
    });
    setState("success");
    // return;
  };

  return (
    <Flex minH={"30vh"} align={"center"} justify={"center"} px={6}>
      <Container
        maxW={"lg"}
        bg={useColorModeValue("white", "whiteAlpha.100")}
        boxShadow={"xl"}
        rounded={"lg"}
        p={6}
        direction={"column"}
      >
        <Heading
          as={"h2"}
          fontSize={{ base: "xl", sm: "2xl" }}
          textAlign={"center"}
          mb={5}
        >
          💌 Subscribe to my Newsletter
        </Heading>
        <Stack
          direction={{ base: "column", md: "row" }}
          as={"form"}
          spacing={"12px"}
          onSubmit={(e) => subscribe(e)}
        >
          <FormControl>
            <Input
              variant={"solid"}
              borderWidth={1}
              color={"gray.800"}
              _placeholder={{
                color: "gray.400",
              }}
              borderColor={useColorModeValue("gray.300", "gray.700")}
              id={"email"}
              type={"email"}
              required
              placeholder={"Your Email"}
              aria-label={"Your Email"}
              value={email}
              disabled={state !== "initial"}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl w={{ base: "100%", md: "40%" }}>
            <Button
              colorScheme={state === "success" ? "green" : "blue"}
              isLoading={state === "submitting"}
              w="100%"
              type={state === "success" ? "button" : "submit"}
            >
              {state === "success" ? <CheckIcon /> : "Submit"}
            </Button>
          </FormControl>
        </Stack>

        <Text
          mt={2}
          textAlign={"center"}
          color={error ? "red.500" : "gray.400"}
        >
          {error
            ? "Oh no an error occured! 😢 Please try again later."
            : "Sign up for my monthly newsletter, I will send you interesting ideas and what I have been working on 🙂"}
        </Text>
      </Container>
    </Flex>
  );
};

export default Newsletter;

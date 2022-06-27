import { useColorMode, IconButton, useColorModeValue } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const iconColor = {
    light: "gray.800",
    dark: "white",
  };
  return (
    <IconButton
      aria-label="Toggle dark mode"
      icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
      onClick={toggleColorMode}
      color={iconColor[colorMode]}
      borderColor={useColorModeValue("gray.200", "")}
      borderWidth={useColorModeValue("1px", "")}
    />
  );
};

export default DarkModeSwitch;

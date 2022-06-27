// // Import the extendTheme function
// import { extendTheme } from "@chakra-ui/react";

// import { theme as chakraTheme } from "@chakra-ui/react";
// import { createBreakpoints } from "@chakra-ui/theme-tools";

// // our custom fonts
// const fonts = {
//   ...chakraTheme.fonts,
//   body: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`, // if first doesn't work, go to the next one on the right, etc... // 'M PLUS Rounded 1c', with import "@fontsource/m-plus-rounded-1c"; 
//   heading: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
// };

// // our custom breakpoints
// const breakpoints = createBreakpoints({
//   sm: "40em",
//   md: "52em",
//   lg: "64em",
//   lg: "62em",
// });

// // we add our extensions there
// const overrides = {
//   ...chakraTheme,
//   initialColorMode: "dark", // i don't think this works...
//   fonts,
//   breakpoints,
//   fontWeights: {
//     normal: 300,
//     medium: 600,
//     bold: 700,
//   },
//   fontSizes: {
//     xs: "0.75rem",
//     sm: "0.875rem",
//     md: "1rem",
//     lg: "1.125rem",
//     xl: "1.25rem",
//     "2xl": "1.5rem",
//     "3xl": "1.875rem",
//     "4xl": "2.25rem",
//     "5xl": "3rem",
//     "6xl": "3.75rem",
//     "7xl": "4.5rem",
//     "8xl": "6rem",
//     "9xl": "8rem",
//   },
//   components: {
//     Link: {
//       baseStyle: {
//         _focus: {
//           boxShadow: "none",
//         },
//       },
//     },
//     Button: {
//       baseStyle: {
//         _focus: {
//           boxShadow: "none",
//         },
//       },
//     },
//   },
// };

// // we will export what we have overriden as customTheme
// const customTheme = extendTheme(overrides);

// // exporting our customTheme
// export default customTheme;


import { theme as chakraTheme } from '@chakra-ui/react'
import { extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"

const fonts = {
  ...chakraTheme.fonts,
  body: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  heading: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`
}

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  lg: "62em",
})

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
}

const overrides = {
  fonts,
  breakpoints,
  fontWeights: {
    normal: 300,
    medium: 600,
    bold: 700
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "28px",
    "4xl": "36px",
    "5xl": "48px",
    "6xl": "64px",
  },
  config
}

const customTheme = extendTheme(overrides)

export default customTheme
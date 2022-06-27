import { useState, useEffect } from "react";

// for Chakra
import { useColorMode, Button, Box } from "@chakra-ui/react";

// icon
import { FaRocket } from "react-icons/fa";

// animation
import { motion, AnimatePresence } from "framer-motion"; // would be nice to make the logo vertical and animate to the top if clicked

const ScrollTopButton = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  // otherwise we get window is not defined error
  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener("scroll", updatePosition, {passive: true});

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);


  const scrollToTop = () => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
           in place of 'smooth' */
    });
  };

  return (
    <AnimatePresence>
      {scrollPosition > 100 && (
        <Box
          position="fixed"
          bottom="50px"
          right={["16px", "100px"]}
          zIndex={2}
        >
          <motion.button
            onClick={scrollToTop}
              className="scrollToTop-btn"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { duration: 1.2 } }}
              exit={{ y: -400, rotate: -45, opacity: 0, transition: { duration: 0.8 } }}
            whileHover={{
              scale: 1.2,
              rotate: -45,
              transition: { duration: 0.2 },
            }}
              whileTap={{ scale: 1.5, rotate: -45 }}
          >
            <Button colorScheme='blue' >
              <FaRocket />
            </Button>
          </motion.button>
        </Box>
      )}
    </AnimatePresence>
  );
};

export default ScrollTopButton;

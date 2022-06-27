import { motion } from "framer-motion";

// wrapper for fade in animation
export const FadeInWrapper = ({ children }) => {
  return (

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 1 },
        }}
      >
        {children}
      </motion.div>

  );
};

export default FadeInWrapper;

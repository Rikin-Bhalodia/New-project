import React, { useState } from "react";
import { motion } from "framer-motion";

const AnimatedTextWord = ({ text }) => {
  const letters = Array.from(text);
  const [isInView, setIsInView] = useState(false);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 1 * i },
    }),
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex"}}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          whileInView={() => {
            setIsInView(true);
          }}
          initial={{
            opacity: 0,
            rotateY: -100,
            transition: {
              type: "spring",
              damping: 12,
              stiffness: 100,
            },
          }}
          animate={
            isInView && {
              opacity: 1,
              rotateY: 0,
              transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
                duration: 0.08 * index,
                delay: 0.08 * index
              },
            }
          }
          style={text.style}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedTextWord;

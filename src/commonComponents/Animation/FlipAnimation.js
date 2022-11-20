import React, { useState } from "react";
import { motion } from "framer-motion";

const AnimatedTextWord = ({ text }) => {
  const letters = Array.from(text);
  const [isInView, setIsInView] = useState(false);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
    }),
  };

  return (
    <motion.div
      style={{
        overflow: "hidden",
        display: "flex",
        // fontSize: "2rem",
        // margin: "0px 30px",
      }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span
          whileInView={() => {
            setIsInView(true);
          }}
          initial={{ opacity: 0, x: 20 }}
          animate={
            isInView && {
              opacity: 1,
              x: 0,
              transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
                delay: 1,
                duration: 1,
              },
            }
          }
          style={text.style}
          key={index}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedTextWord;
// <motion.div
//   style={{ overflow: "hidden", display: "flex", fontSize: "2rem" }}
//   whileInView={() => {
//     setIsInView(true);
//   }}
//   variants={container}
//   initial="hidden"
//   animate="visible"
// >
//   {words.map((word, index) => (
//     <motion.span

//       key={index}
//     >
//       {word}
//     </motion.span>
//   ))}
// </motion.div>

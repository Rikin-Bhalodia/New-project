import React, { useState } from "react";
import { motion } from "framer-motion";

const AnimatedTextWord = ({ text }) => {
  const letters = Array.from(text);
  console.log(letters, "letters");
  const [isInView, setIsInView] = useState(false);

  // const container = {
  //   hidden: { opacity: 0 },
  //   visible: (i = 1) => ({
  //     // opacity: 1,
  //     transition: { staggerChildren: 0.6, delayChildren: 1 * i },
  //   }),
  // };

  console.log(isInView, "isInView");
  const child = {
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
      transitionDelay: 1,
    },
    hidden: {
      opacity: 0,
      x: 2,
      rotateY: 90,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{
        overflow: "hidden",
        display: "flex",
        // fontSize: "2rem",
        // margin: "0px 30px",
      }}
      // // variants={container}
      // initial={!isInView && "hidden"}
      // animate={isInView && "visible"}
    >
      {letters.map((_letter, _index) => (
        <motion.span
          whileInView={() => {
            setIsInView(true);
          }}
          // initial={{ opacity: 0, x: "2vw", rotateY: "180deg" }}
          // animate={
          //   // isInView && {
          //   //   opacity: 1,
          //   //   x: 0,
          //   //   rotateY: 0,
          //   //   transition: {
          //   //     type: "spring",
          //   //     damping: 12,
          //   //     stiffness: 100,
          //   //     // delay: 1,
          //   //     // duration: 3,
          //   //   },
          //   // }
          //   isInView && child
          // }
          initial={!isInView && "hidden"}
          animate={isInView && "visible"}
          // animate={{ transition: Flip }}
          variants={child}
          style={text.style}
          key={_index}
        >
          {_letter === " " ? "\u00A0" : _letter}
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

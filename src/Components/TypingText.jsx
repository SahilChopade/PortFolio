import { motion } from "framer-motion";
import React from "react";
import { container, typing } from "../Data/AnimationVariants";

export default function TypingText({ textString }) {
  const textArray = textString.split("");
  console.log(textArray);

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="flex tracking-widest"
    >
      {textArray.map((letter) => {
        return <motion.div className="uppercase text-[3.5rem] skilltext" variants={typing}>{letter}</motion.div>;
      })}
    </motion.div>
  );
}

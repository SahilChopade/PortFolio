import { motion } from "framer-motion";
import React from "react";
import { containerMovingText, movingText } from "../Data/AnimationVariants";

export default function TitleText({ text }) {
  const arr = text.split("");
  return (
    <motion.div
      variants={containerMovingText}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex hover:tracking-[0.3rem] transition-all duration-500 uppercase [&>*:first-child]:mr-[3px] [&>*:first-child]:text-[#0acbe0] [&>*:first-child]:text-[4rem] [&>*:first-child]:font-bold text-[1.5rem] md:text-[2.5rem] font-semibold tracking-wider drop-shadow-[4px_4px_6px_#000] w-fit"
    >
      {arr.map((char) => {
        return char === " " ? (
          <motion.p variants={movingText} className="m-auto">
            &nbsp;
          </motion.p>
        ) : (
          <motion.p variants={movingText} className="m-auto">
            {char}
          </motion.p>
        );
      })}
    </motion.div>
  );
}

import { motion } from "framer-motion";
import React, { useState } from "react";
import { movingText, skillMovingText } from "../Data/AnimationVariants";

export default function SkillAnimation() {
  const text = useState("SOFTWARE DEVELOPER");
  const textArray = text.split("");
  return (
    <motion.div
      variants={skillMovingText}
      initial="hidden"
      whileInView="visible"
      className="flex text-[2.5rem] font-semibold tracking-wider drop-shadow-[4px_4px_6px_#000] w-fit mt-[2rem]"
    >
      {textArray.map((char) => {
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

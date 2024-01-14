import React from "react";
import { motion } from "framer-motion";
import { container, item } from "../Data/AnimationVariants";

export default function Skill({ skill }) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="flex gap-2 items-center justify-between p-[10px]"
    >
      <motion.div variants={item}>
        <img
          className="w-[30px] drop-shadow-[2px_2px_5px_#006d80]"
          src={`/skills/${skill.name}.png`}
          alt={skill.name}
        />
      </motion.div>
      <motion.div
        variants={item}
        className="text-[#f5f5f5] text-[1.2rem] font-semibold tracking-wider uppercase"
      >
        {skill.name}
      </motion.div>
    </motion.div>
  );
}

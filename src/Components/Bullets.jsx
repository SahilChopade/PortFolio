import { motion } from "framer-motion";
import React from "react";
import { item } from "../Data/AnimationVariants";

export default function Bullets({ text }) {
  return (
    <motion.div variants={item} className="flex items-start gap-2 text-[0.5rem] sm:text-[1rem]">
      <img
        className="mt-[5px] w-[20px] h-[20px]"
        src="/BulletPoint.png"
        alt="Bullet"
      />
      <div className="font-extralight font-['Poppins']">{text}</div>
    </motion.div>
  );
}

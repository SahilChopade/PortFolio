import { motion } from "framer-motion";
import React from "react";
import { item } from "../Data/AnimationVariants";
export default function NavHead({ text }) {
  return (
    <motion.div
      variants={item}
      className="cursor-pointer hover:underline underline-offset-8 decoration-2 transition-all duration-100 ease-linear hover:drop-shadow-[3px_3px_5px_#000]"
    >
      {text}
    </motion.div>
  );
}

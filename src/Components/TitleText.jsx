import { motion } from "framer-motion";
import React from "react";

export default function TitleText({ text }) {
  return (
    <motion.div
      initial={{
        scale: 3,
        opacity: 0,
      }}
      animate={{
        scale: 1,
        opacity: 1,
        transition: {
          duration: 1,
        },
      }}
      className="uppercase first-letter:mr-[3px] first-letter:text-[#006d80] first-letter:text-[3rem] first-letter:font-bold text-[1.5rem] font-semibold tracking-wider drop-shadow-[4px_4px_6px_#000]"
    >
      {text}
    </motion.div>
  );
}

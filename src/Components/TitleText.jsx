import { motion } from "framer-motion";
import React from "react";

export default function TitleText({ text }) {
  return (
    <motion.div
      initial={{
        scale: 3,
        opacity: 0,
      }}
      whileInView={{
        scale: 1,
        opacity: 1,
        transition: {
          duration: 1,
        },
      }}
      className="hover:tracking-[0.3rem] transition-all duration-500 uppercase first-letter:mr-[3px] first-letter:text-[#0acbe0] first-letter:text-[4rem] first-letter:font-bold text-[2.5rem] font-semibold tracking-wider drop-shadow-[4px_4px_6px_#000]"
    >
      {text}
    </motion.div>
  );
}

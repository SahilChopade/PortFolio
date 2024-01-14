import { motion } from "framer-motion";
import React from "react";

export default function FooterIcons({ name, link }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.12,
        opacity: 1,
      }}
      className="p-[3px] flex items-center justify-center cursor-pointer opacity-[0.5]"
    >
      <a href={link} target="_blank" rel="noreferrer">
        <img className="w-[1.5rem]" src={`/social/${name}.svg`} alt={name} />
      </a>
    </motion.div>
  );
}

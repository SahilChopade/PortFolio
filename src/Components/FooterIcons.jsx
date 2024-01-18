import { motion } from "framer-motion";
import React from "react";
import { Tooltip } from "react-tooltip";
import { bounce } from "../Data/AnimationVariants";

export default function FooterIcons({ name, link }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.12,
        opacity: 1,
      }}
      variants={bounce}
      className="p-[3px] flex items-center justify-center cursor-pointer opacity-[0.5]"
    >
      <a href={link} target="_blank" rel="noreferrer">
        <img
          data-tooltip-id={name}
          className="w-[2rem] sm:w-[2.5rem]"
          src={`/social/${name}.svg`}
          alt={name}
        />
      </a>
      <Tooltip id={name} place="bottom" variant="info" content={name} />
    </motion.div>
  );
}

import { motion } from "framer-motion";
import React from "react";
import { bounce, container, paratext } from "../Data/AnimationVariants";

export default function Name() {
  return (
    <div>
      <motion.div
        variants={paratext}
        initial="initial"
        animate="animate"
        className="text-[4.5rem] font-semibold drop-shadow-[8px_8px_1px_#000] fill-none stroke-slate-500 stroke-1"
      >
        SAHIL
      </motion.div>
      <motion.div
        whileHover={{
          transition: {
            delayChildren: 0.4,
            staggerChildren: 0.3,
          },
        }}
        variants={container}
        animate="visible"
        initial="hidden"
        className="flex text-[5.5rem] text-[#006d80] font-extrabold drop-shadow-[8px_8px_1px_#000] gap-1"
      >
        <motion.div whileHover={{ scale: 1.12 }} variants={bounce}>
          C
        </motion.div>
        <motion.div whileHover={{ scale: 1.12 }} variants={bounce}>
          H
        </motion.div>
        <motion.div whileHover={{ scale: 1.12 }} variants={bounce}>
          O
        </motion.div>
        <motion.div whileHover={{ scale: 1.12 }} variants={bounce}>
          P
        </motion.div>
        <motion.div whileHover={{ scale: 1.12 }} variants={bounce}>
          A
        </motion.div>
        <motion.div whileHover={{ scale: 1.12 }} variants={bounce}>
          D
        </motion.div>
        <motion.div whileHover={{ scale: 1.12 }} variants={bounce}>
          E
        </motion.div>
      </motion.div>
    </div>
  );
}

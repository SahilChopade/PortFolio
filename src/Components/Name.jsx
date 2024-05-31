import { motion } from "framer-motion";
import React from "react";
import {
  bounce,
  container,
  paratext,
  profilepic,
} from "../Data/AnimationVariants";
import MyPic from "../Assets/Photo.jpg";
export default function Name() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-[4rem]">
      <div>
        <motion.img
          variants={profilepic}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-[15rem] sm:w-[20rem] aspect-square object-cover object-center border-[3px] border-[#fff] rounded-[100%] shadow-[10px_10px_50px_#063b55,-10px_-10px_50px_#063b55,10px_-10px_50px_#063b55,-10px_10px_50px_#063b55]"
          src={MyPic}
          alt="MyPic"
        />
      </div>
      <div>
        <motion.div
          variants={paratext}
          initial="initial"
          animate="animate"
          className="text-[2.5rem] md:text-[4.5rem] font-semibold drop-shadow-[8px_8px_1px_#000] fill-none stroke-slate-500 stroke-1"
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
          whileInView="visible"
          viewport={{ once: true }}
          
          initial="hidden"
          className="flex text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] text-[#0acbe0] font-extrabold drop-shadow-[8px_8px_1px_#000] gap-1"
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
    </div>
  );
}

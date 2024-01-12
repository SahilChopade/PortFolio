import React from "react";
import MainImage from "../Assets/MainImage.gif";
import About from "../Sections/About";
import { motion } from "framer-motion";
import { general, item } from "../Data/AnimationVariants";

export default function TitlePage() {
  return (
    <div className="flex">
      <div className="flex flex-col gap-2 p-[20px]">
        <div className="flex items-center justify-center">
          <motion.img
            variants={general}
            initial="initial"
            animate="animate"
            className="w-[30rem] drop-shadow-[2px_2px_10px_#000]"
            src={MainImage}
            alt="MainImage"
          />
        </div>
        <div className="text-wrap text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
      </div>
      <About />
    </div>
  );
}

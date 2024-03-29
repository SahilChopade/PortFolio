import React from "react";
import MainImage from "../Assets/MainImage.gif";
import { motion } from "framer-motion";
import { general, paratext } from "../Data/AnimationVariants";
import Name from "../Components/Name";
import Navbar from "./Navbar";
// import SkillAnimation from "../Components/SkillAnimation";
export default function TitlePage() {
  return (
    <div id="TitlePage" className="">
      <Navbar />
      <div className="flex flex-col gap-[1rem] p-[20px] min-h-screen max-h-fit">
        <div className="flex flex-col md:flex-row items-center justify-center gap-[3rem] md:gap-[10rem] mt-0 md:mt-[3rem]">
          <Name />
          <div className="w-full md:w-[25rem] flex flex-col justify-center items-center">
            <motion.img
              variants={general}
              initial="initial"
              animate="animate"
              className="hidden lg:flex w-[20rem] md:w-[20rem] drop-shadow-[2px_2px_10px_#000]"
              src={MainImage}
              alt="MainImage"
            />
            <motion.div
              variants={paratext}
              whileInView="animate"
              initial="initial"
              className="text-[0.9rem] md:text-[1.1rem] text-center"
            >
              Welcome to my digital space, where every pixel tells a story.
              Explore my portfolio and discover the art of innovation.
            </motion.div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-[1rem]">
          <motion.button
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1s-0NxmBiYkXCAGb5VF7wTvP1W9XzztgG/view?usp=sharing"
              )
            }
            whileTap={{ scale: 0.85 }}
            className="hover:tracking-[0.25rem] px-[3rem] py-[0.5rem] uppercase text-[1rem] md:text-[1.5rem] rounded-[10px] border-[2px] border-white shadow-[2px_2px_5px_#f5f5f5] opacity-[0.6] hover:scale-[1.05] hover:opacity-[1] transition-all duration-500"
          >
            Resume
          </motion.button>
        </div>
      </div>
    </div>
  );
}

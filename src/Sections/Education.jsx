import { motion } from "framer-motion";
import React from "react";
import { coding, container } from "../Data/AnimationVariants";
import TitleText from "../Components/TitleText";

export default function Education() {
  return (
    <div className=" flex flex-col items-center">
      <TitleText text="Education" />
      <motion.div variants={container} initial="hidden" whileInView="visible">
        <motion.div
          variants={coding}
          whileHover={{
            scale: 1.12,
            transition: {
              duration: 0.5,
              type: "spring",
              damping: 20,
              stiffness: 300,
            },
          }}
          className="flex flex-col justify-center items-center gap-[0.8rem] md:gap-[1.5rem] mt-[1rem] md:mt-[3rem]"
        >
          <div className="p-[20px] gap-1 flex flex-col border-[2px] border-white shadow-[inset_2px_2px_5px_#fff] rounded-[20px] w-full">
            <div className="text-[0.8rem] sm:text-[1.2rem]">
              <strong>Indian Institute of Technology(ISM), Dhanbad.</strong>
            </div>
            <div className="flex justify-between text-[0.6rem] sm:text-[1rem]">
              <div>B.Tech in Chemical Engineering</div>
              <div>CGPA: 7.55</div>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={coding}
          whileHover={{
            scale: 1.12,
            transition: {
              duration: 0.5,
              type: "spring",
              damping: 20,
              stiffness: 300,
            },
          }}
          className="flex flex-col justify-center items-center gap-[0.8rem] md:gap-[1.5rem] mt-[1rem] md:mt-[3rem]"
        >
          <div className="p-[20px] gap-1 flex flex-col border-[2px] border-white shadow-[inset_2px_2px_5px_#fff] rounded-[20px] w-full">
            <div className="text-[0.8rem] sm:text-[1.2rem]">
              <strong>School of Scholars, Malkapur</strong>
            </div>
            <div className="flex justify-between text-[0.6rem] sm:text-[1rem]">
              <div>Class XII (CBSE)</div>
              <div>Aggregate: 91.2%</div>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={coding}
          whileHover={{
            scale: 1.12,
            transition: {
              duration: 0.5,
              type: "spring",
              damping: 20,
              stiffness: 300,
            },
          }}
          className="flex flex-col justify-center items-center gap-[0.8rem] md:gap-[1.5rem] mt-[1rem] md:mt-[3rem]"
        >
          <div className="p-[20px] gap-1 flex flex-col border-[2px] border-white shadow-[inset_2px_2px_5px_#fff] rounded-[20px] w-full">
            <div className="text-[0.8rem] sm:text-[1.2rem]">
              <strong>Yashodham Public School, Malkapur</strong>
            </div>
            <div className="flex justify-between text-[0.6rem] sm:text-[1rem]">
              <div>Class X (CBSE)</div>
              <div>Aggregate: 96%</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

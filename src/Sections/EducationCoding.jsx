import React from "react";
import TitleText from "../Components/TitleText";
import CodingCard from "../Components/CodingCard";
import Leetcode from "../Assets/coding/Leetcode.png";
import Atcoder from "../Assets/coding/Atcoder.png";
import Codeforces from "../Assets/coding/Codeforces.webp";
import { motion } from "framer-motion";
import { coding, container } from "../Data/AnimationVariants";

export default function EducationCoding() {
  return (
    <div className="h-screen p-[20px] border-[1px] border-white rounded-[20px] my-[1rem] flex justify-around">
      <div className="w-1/2 flex flex-col items-center">
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
            className="flex flex-col justify-center items-center gap-[1.5rem] mt-[3rem]"
          >
            <div className="p-[20px] gap-1 flex flex-col border-[2px] border-white shadow-[inset_2px_2px_5px_#fff] rounded-[20px] w-full">
              <div className="text-[1.2rem]">
                <strong>Indian Institute of Technology(ISM), Dhanbad.</strong>
              </div>
              <div className="flex justify-between">
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
            className="flex flex-col justify-center items-center gap-[1.5rem] mt-[3rem]"
          >
            <div className="p-[20px] gap-1 flex flex-col border-[2px] border-white shadow-[inset_2px_2px_5px_#fff] rounded-[20px] w-full">
              <div className="text-[1.2rem]">
                <strong>School of Scholars, Malkapur</strong>
              </div>
              <div className="flex justify-between">
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
            className="flex flex-col justify-center items-center gap-[1.5rem] mt-[3rem]"
          >
            <div className="p-[20px] gap-1 flex flex-col border-[2px] border-white shadow-[inset_2px_2px_5px_#fff] rounded-[20px] w-full">
              <div className="text-[1.2rem]">
                <strong>Yashodham Public School, Malkapur</strong>
              </div>
              <div className="flex justify-between">
                <div>Class X (CBSE)</div>
                <div>Aggregate: 96%</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className="w-1/2 flex flex-col items-center">
        <TitleText text="Programming" />
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="flex flex-col justify-center items-center gap-[1.5rem] mt-[3rem]"
        >
          <CodingCard
            link="https://leetcode.com/FreakingEvil_02/"
            name="Leetcode"
            rating="1862"
            problems="635"
            image={Leetcode}
          />
          <CodingCard
            link="https://atcoder.jp/users/FreakingEvil_02"
            name="Atcoder"
            rating="521"
            problems="140"
            image={Atcoder}
          />
          <CodingCard
            link="https://codeforces.com/profile/chopade.sahil02"
            name="Codeforces"
            rating="1253"
            problems="393"
            image={Codeforces}
          />
        </motion.div>
      </div>
    </div>
  );
}

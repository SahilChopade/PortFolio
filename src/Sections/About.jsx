import React from "react";
import TitleText from "../Components/TitleText";
import Skill from "../Components/Skill";
import { Skills } from "../Data/data";
import SkillGif from "../Assets/SkillGif.gif";
import { motion } from "framer-motion";
import { paratext } from "../Data/AnimationVariants";

export default function About() {
  return (
    <div className="flex flex-col items-start justify-around h-screen p-[20px] border-[1px] border-white rounded-[20px] my-[1rem]">
      <div className="flex flex-col gap-3 items-start">
        <TitleText text="About Me" />
        <motion.div
          variants={paratext}
          initial="initial"
          whileInView="animate"
          className="text-[1.2rem]"
        >
          "I am a final-year B.Tech student at <strong>IIT Dhanbad</strong>,
          proficient in both
          <strong>FullStack Web Development</strong> &
          <strong>Competitive Programming</strong>. With a robust command of
          programming languages such as
          <strong>C, C++, Java, Golang,</strong> and a solid understanding of
          <strong>Data Structures & Algorithms</strong>, I excel in crafting
          innovative solutions. Actively contributing to two startup ventures, I
          have leveraged cutting-edge technologies to bring projects to life. My
          passion lies in tackling challenging problems, consistently delivering
          effective and time-efficient solutions. Join me on a journey where
          innovation meets expertise, and every coding challenge is an
          opportunity for growth."
        </motion.div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-start">
          <TitleText text="Skills" />
          <div className="grid grid-cols-4 justify-items-start gap-[1rem]">
            {Skills?.map((skill) => {
              return <Skill skill={skill} />;
            })}
          </div>
        </div>
        <div>
          <img className="w-[25rem]" src={SkillGif} alt="SkillGif" />
        </div>
      </div>
    </div>
  );
}

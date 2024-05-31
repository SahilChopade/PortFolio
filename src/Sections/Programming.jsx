import React from "react";
import CodingCard from "../Components/CodingCard";
import TitleText from "../Components/TitleText";
import { motion } from "framer-motion";
import { container } from "../Data/AnimationVariants";
import Leetcode from "../Assets/coding/Leetcode.png";
import Atcoder from "../Assets/coding/Atcoder.png";
import Codeforces from "../Assets/coding/Codeforces.webp";
export default function Programming() {
  return (
    <div className="flex flex-col items-center">
      <TitleText text="Programming" />
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col justify-center items-center gap-[0.8rem] md:gap-[1.5rem] mt-[1rem] md:mt-[3rem]"
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
  );
}

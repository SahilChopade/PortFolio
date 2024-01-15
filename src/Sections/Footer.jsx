import React from "react";
import FooterIcons from "../Components/FooterIcons";
import { motion } from "framer-motion";
import { container } from "../Data/AnimationVariants";

export default function Footer() {
  return (
    <div className="flex items-center mt-[2rem]">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        className="flex gap-[1rem]"
      >
        <FooterIcons name="github" link="http://www.github.com/SahilChopade" />
        <FooterIcons
          name="instagram"
          link="https://www.instagram.com/sa_ch02/"
        />
        <FooterIcons
          name="linkedin"
          link="https://www.linkedin.com/in/sahil-chopade-7504bb227/"
        />
        <FooterIcons name="mail" link="mailto:chopadesahil2002@gmail.com" />
      </motion.div>
    </div>
  );
}

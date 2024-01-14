import React from "react";
import NavHead from "../Components/NavHead";
import { motion } from "framer-motion";
import { container } from "../Data/AnimationVariants";
import { general } from "../Data/AnimationVariants";
import Logo from "../Assets/PortfolioLogo.png";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center">
      <div>
        <motion.img
          variants={general}
          initial="initial"
          animate="animate"
          className="w-[5rem] ml-[2rem] drop-shadow-[3px_3px_3px_#006d80] cursor-pointer"
          src={Logo}
          alt="Logo"
        />
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex gap-[3rem] text-[#f5f5f5] text-[1.5rem] font-bold uppercase"
      >
        <NavHead text="About" />
        <NavHead text="Experience" />
        <NavHead text="Works" />
        <NavHead text="Contact" />
      </motion.div>
    </div>
  );
}

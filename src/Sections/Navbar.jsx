import React from "react";
import NavHead from "../Components/NavHead";
import Logo from "../Assets/PortfolioLogo.png";
import { motion } from "framer-motion";
import { container, general } from "../Data/AnimationVariants";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center">
      <div>
        <motion.img
          variants={general}
          initial="initial"
          animate="animate"
          className="w-[5rem] ml-[2rem] mix-blend-screen drop-shadow-[3px_3px_3px_#006d80]"
          src={Logo}
          alt="Logo"
        />
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex gap-4 text-[#f5f5f5] text-[1.5rem] font-bold uppercase"
      >
        <NavHead text="About" />
        <NavHead text="Experience" />
        <NavHead text="Works" />
        <NavHead text="Contact" />
      </motion.div>
    </div>
  );
}

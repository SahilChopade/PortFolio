import React, { useState } from "react";
import NavHead from "../Components/NavHead";
import { AnimatePresence, motion } from "framer-motion";
import { container } from "../Data/AnimationVariants";
import { general } from "../Data/AnimationVariants";
import Logo from "../Assets/PortfolioLogo.png";
import HamOpen from "../Assets/HamOpenButton.png";
import HamClosed from "../Assets/HamClosedButton.png";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex justify-between items-center flex-wrap relative">
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
        className="hidden md:flex gap-[3rem] text-[#f5f5f5] text-[1.5rem] font-bold uppercase"
      >
        <NavHead text="About" />
        <NavHead text="Experience" />
        <NavHead text="Works" />
        <NavHead text="Contact" />
      </motion.div>
      <AnimatePresence>
        <motion.button
          className="w-[2rem] md:hidden"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? (
            <motion.img src={HamOpen} alt="HamOpen" />
          ) : (
            <motion.img src={HamClosed} alt="HamClosed" />
          )}
        </motion.button>
      </AnimatePresence>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            exit={{
              scale: 0,
              opacity: 0,
              transition: {
                duration: 0.5,
              },
            }}
            className="bg-[rgba(0,0,0,0.5)] rounded-[1rem] p-[20px] md:hidden flex flex-col basis-full items-center gap-[1rem] mt-[1rem] text-[#f5f5f5] text-[1.5rem] font-bold uppercase"
          >
            <NavHead text="About" />
            <NavHead text="Experience" />
            <NavHead text="Works" />
            <NavHead text="Contact" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

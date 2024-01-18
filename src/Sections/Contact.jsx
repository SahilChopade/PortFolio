import React from "react";
import TitleText from "../Components/TitleText";
import Footer from "./Footer";
import Hello from "../Assets/Hello.gif";
import { motion } from "framer-motion";
import { paratext } from "../Data/AnimationVariants";

export default function Contact() {
  return (
    <div id="Contact" className="min-h-screen max-h-fit p-[20px] border-[1px] border-white rounded-[20px] my-[1rem]">
      <div className="flex flex-col items-start justify-between">
        <TitleText text="Contact Me" />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-2/3 p-[1.5rem] sm:p-[3rem]">
          <motion.div
            variants={paratext}
            initial="initial"
            whileInView="animate"
            className="text-[1rem] sm:text-[1.5rem]"
          >
            <strong>Greetings! </strong>
            <br />
            <br /> Thanks for exploring my portfolio.
            <strong> Eager to connect</strong> with fellow tech enthusiasts!
            Whether you're pondering a project, seeking collaboration, or just
            curious, <strong>I'm all ears</strong>.
          </motion.div>
          <div>
            <Footer />
          </div>
        </div>
        <div className="w-2/3 md:w-1/3">
          <motion.img
            initial={{
              scale: 0,
              opacity: 0,
            }}
            whileInView={{
              scale: 1,
              opacity: 1,
              transition: {
                duration: 0.8,
                type: "spring",
                damping: 20,
                stiffness: 200,
              },
            }}
            className="w-full drop-shadow-[2px_2px_10px_#0093E9]"
            src={Hello}
            alt="Hello"
          />
        </div>
      </div>
    </div>
  );
}

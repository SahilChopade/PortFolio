import { motion } from "framer-motion";
import React from "react";
import { bounce } from "../Data/AnimationVariants";

export default function Card({ name, image, description, link }) {
  return (
    <motion.div
      variants={bounce}
      className="border-[2px] border-cyan-400 rounded-[15px] w-[20rem] h-[30rem] bg-gradient-to-b from-[#80D0C7] from-0% to-[#0093E9] to-100% shadow-[0_0_2px_#0093E9,inset_0_0_2px_#80D0C7,0_0_5px_#0093E9,0_0_15px_#0093E9,0_0_30px_#0093E9] transition-all duration-200 hover:scale-[1.05]"
    >
      <img
        className="hover:scale-[1.12] rounded-t-[15px] transition-all ease-in-out duration-500 h-[15rem] w-full"
        src={image}
        alt="Shareify"
      />
      <div className="p-[1rem] flex flex-col justify-between gap-[10px] h-[15rem]">
        <div className="text-[1.5rem] uppercase font-bold drop-shadow-[2px_2px_4px_#000] transition-all duration-500">
          {name}
        </div>
        <div className="text-black font-bold">{description}</div>
        <button
          onClick={() => {
            window.open(link);
          }}
          className="opacity-[0.8] hover:opacity-[1] drop-shadow-[2px_2px_5px_#000] border-[1px] border-black w-full py-[5px] rounded-[10px] shadow-[inset_2px_2px_6px_#000] text-[1.2rem] uppercase font-semibold hover:tracking-wider hover:scale-[1.02] transition-all duration-500"
        >
          View Site
        </button>
      </div>
    </motion.div>
  );
}

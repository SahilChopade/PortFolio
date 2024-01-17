import { motion } from "framer-motion";
import React from "react";
import { bounce } from "../Data/AnimationVariants";

export default function CodingCard({ name, rating, problems, image, link }) {
  return (
    <motion.div
      variants={bounce}
      onClick={() => {
        window.open(link);
      }}
      whileHover={{
        scale: 1.12,
        transition: {
          duration: 0.5,
          type: "spring",
          damping: 20,
          stiffness: 300,
        },
      }}
      whileTap={{ scale: 0.8 }}
      className="codingCard flex p-[1rem] gap-[1.5rem] cursor-pointer"
    >
      <div className="flex items-center justify-center">
        <img className="w-[4rem]" src={image} alt={name} />
      </div>
      <div className="">
        <div className="text-black text-[2rem] font-bold">{name}</div>
        <div className="text-black text-[0.8rem] font-semibold">{`Max Rating: ${rating}`}</div>
        <div className="text-black text-[0.8rem] font-semibold">{`Problems Solved: ${problems}`}</div>
      </div>
    </motion.div>
  );
}

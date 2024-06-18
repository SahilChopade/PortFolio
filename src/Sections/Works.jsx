import React from "react";
import TitleText from "../Components/TitleText";
import Card from "../Components/Card";
import Shareify from "../Assets/works/Shareify.png";
import Craving from "../Assets/works/Craving.png";
import QuotesMaker from "../Assets/works/Quotesmaker.png";
import { motion } from "framer-motion";
import { container } from "../Data/AnimationVariants";

export default function Works() {
  return (
    <div id="Works" className="">
      <div className="flex flex-col items-start justify-between">
        <TitleText text="Works" />
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center justify-center gap-[4rem] mt-[2rem]"
      >
        <Card
          image={Shareify}
          name="Shareify"
          description="A user-friendly site that allow users to share files via mail with password security.."
          link="https://share-files-xt1z.onrender.com/"
        />
        <Card
          image={Craving}
          name="Cravings"
          description="Developed a food ordering system that enables users to browse menus, place orders, and make secure payments online."
          link="https://cravings-t3zg.onrender.com/"
        />
        <Card
          image={QuotesMaker}
          name="QuotesMaker"
          description="Enable users to generate personalized quotes to their liking with 50+ different inbuilt designs."
          link="https://quotes-maker.onrender.com/"
        />
      </motion.div>
    </div>
  );
}

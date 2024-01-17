import React from "react";
import TitleText from "../Components/TitleText";
import CreatorCube from "../Assets/CreatorCube.png";
import SuperNova from "../Assets/SuperNova.png";
import Bullets from "../Components/Bullets";
import { motion } from "framer-motion";
import { containerMovingText, item, paratext } from "../Data/AnimationVariants";

export default function Experience() {
  return (
    <div className="h-screen p-[20px] border-[1px] border-white rounded-[20px] my-[1rem]">
      <div className="flex flex-col items-start justify-between">
        <TitleText text="Experience" />
      </div>
      <div className="flex gap-[4rem] mt-[3rem] p-[1rem]">
        <motion.div
          variants={containerMovingText}
          initial="hidden"
          whileInView="visible"
          className="flex flex-col gap-[2rem] p-[1rem] border-[2px] shadow-[inset_3px_3px_5px_#fff] border-[#fff] rounded-[20px]"
        >
          <motion.div variants={item} className="flex items-center gap-[1rem]">
            <img className="w-[3rem]" src={CreatorCube} alt="Creator Cube" />
            <div>
              <div className="text-[1.3rem] uppercase">Creator Cube</div>
              <div className="text-[0.9rem] opacity-[0.8] text-[#f5f5f5]">
                FrontEnd Developer Engineer Intern
              </div>
            </div>
          </motion.div>
          <div className="flex flex-col gap-2 ml-[2rem]">
            <Bullets
              text="Obtained a increase in 95% user satisfaction by implementing the
        website’s UI/UX design to meet the project’s criteria."
            />
            <Bullets
              text="Employed advanced frameworks such as ReactJS, Redux and Tailwind
              CSS to create responsive web pages that adhere to the design
              specifications while elevating user experience and increasing
              engagement by 50%."
            />
            <Bullets
              text="Improved the usability of current applications upto 75% by
              implementing the most up-to-date accessibility standards and
              integrating best practices."
            />
          </div>
        </motion.div>
        <motion.div
          variants={containerMovingText}
          initial="hidden"
          whileInView="visible"
          className="flex flex-col gap-[1rem] p-[1rem] border-[2px] shadow-[inset_3px_3px_5px_#fff] border-[#fff] rounded-[20px]"
        >
          <motion.div variants={item} className="flex items-start gap-[1rem]">
            <img className="w-[3rem]" src={SuperNova} alt="Super Nova" />
            <div>
              <div className="text-[1.3rem] uppercase">
                Super Nova Developers
              </div>
              <div className="text-[0.9rem] opacity-[0.8] text-[#f5f5f5]">
                FullStack Development Engineer Intern
              </div>
              <div className="text-[0.9rem] opacity-[0.8] text-[#f5f5f5]">
                Worked Under a working Professional for his game server Selling
                website.
              </div>
            </div>
          </motion.div>
          <div className="flex flex-col gap-2 ml-[2rem]">
            <Bullets
              text="Engineered, tested, and successfully deployed a user-centric website enabling seamless purchases of game servers, enabling
immediate utilization ans boosting efficiency upto 87%."
            />
            <Bullets text="Designed and Shaped the site’s database using the MYSQL database system." />
            <Bullets
              text="Formulated the website’s backend using the GO language leading to a 40% reduction in page load time, while the frontend has
been solidly developed using state-of-the-art frameworks like ReactJS, Redux and Tailwind CSS."
            />
            <Bullets text="The website is live with 5000+ users and enjoys a substantial user base." />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

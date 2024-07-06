import React from "react";
import MyPic from "../Assets/ProfilePic.jpg";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function ProfilePic() {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white rounded-[50%] p-[5px] z-10 profilegrad">
        <img
          className="w-[15rem] md:w-[22rem] object-cover aspect-square rounded-[50%]"
          src={MyPic}
          alt="DP"
        />
      </div>
      <div className="relative bottom-[12vh] md:bottom-[15vh] pt-[13vh] md:pt-[18vh] w-full lg:w-[40vw] pb-[2rem] bg-blue-900 rounded-[30px] text-center p-[1rem]">
        <h2 className="text-[1rem] sm:text-[1.2rem] md:text-[1.5rem] lg:text-[2rem] spicy">
          Welcome to my digital space, where every pixel tells a story. Explore
          my portfolio and discover the art of innovation.
        </h2>
        <div className="flex justify-center gap-[3rem] mt-[1rem] md:mt-[2.5rem]">
          <button
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/1AzsQOfXRlloMgXClt08sGOMN345vpgME/view?usp=sharing"
              );
            }}
            className="px-[20px] rounded-[15px] bg-slate-800 text-[0.8rem] md:text-[1.2rem] font-semibold"
          >
            DOWNLOAD MY CV
          </button>
          <div className="flex gap-[0.5rem] md:gap-[1rem]">
            <div className="hover:scale-[1.25] transition-all duration-500 ease-in-out">
              <a
                href="https://www.linkedin.com/in/sahil-chopade-7504bb227/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="text-[2rem] md:text-[3rem]" />
              </a>
            </div>
            <div className="hover:scale-[1.25] transition-all duration-500 ease-in-out">
              <a
                href="https://github.com/SahilChopade"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="text-[2rem] md:text-[3rem]" />
              </a>
            </div>
            <div className="hover:scale-[1.25] transition-all duration-500 ease-in-out">
              <a
                href="mailto:chopadesahil2002@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaEnvelope className="text-[2rem] md:text-[3rem]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import MyPic from "../Assets/ProfilePic.jpg";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function ProfilePic() {
  return (
    <div className="flex flex-col items-center w-[45vw]">
      <div className="bg-white rounded-[50%] p-[5px] z-10 profilegrad">
        <img
          className="w-[20vw] object-cover aspect-square rounded-[50%]"
          src={MyPic}
          alt="DP"
        />
      </div>
      <div className="relative bottom-[15vh] pt-[18vh] w-[40vw] h-[50vh] bg-blue-900 rounded-[30px] text-center">
        <h2 className="text-[2rem] spicy">
          Welcome to my digital space, where every pixel tells a story. Explore
          my portfolio and discover the art of innovation.
        </h2>
        <div className="flex justify-center gap-[3rem] mt-[2.5rem]">
          <button onClick={()=>{window.open("https://drive.google.com/file/d/1AzsQOfXRlloMgXClt08sGOMN345vpgME/view?usp=sharing")}} className="px-[20px] rounded-[15px] bg-slate-800 text-[1.2rem] font-semibold">
            DOWNLOAD MY CV
          </button>
          <div className="flex gap-[1rem]">
            <div className="hover:scale-[1.25] transition-all duration-500 ease-in-out">
              <a
                href="https://www.linkedin.com/in/sahil-chopade-7504bb227/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin size={45} />
              </a>
            </div>
            <div className="hover:scale-[1.25] transition-all duration-500 ease-in-out">
              <a
                href="https://github.com/SahilChopade"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size={45} />
              </a>
            </div>
            <div className="hover:scale-[1.25] transition-all duration-500 ease-in-out">
              <a
                href="mailto:chopadesahil2002@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaEnvelope size={45} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

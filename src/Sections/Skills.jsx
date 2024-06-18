import React from "react";
import { Languages as LanguagesArray, Development as DevelopmentArray } from "../Data/data";
const Skills = () => {
  return (
    <div className="flex flex-col gap-[0.5rem] shadow-[5px_5px_10px_#191919,-5px_-5px_10px_#3C3C3C] rounded-[1rem] p-[2rem]">
      <div className="text-[2.5rem]">About My Skills</div>
      <hr />
      <div className="p-[0.5rem] text-[1.2rem]">
        <div>Languages</div>
        <div className=" flex grow-1 flex-wrap mt-[1rem] gap-[2rem]">
          {LanguagesArray?.map((skill, index) => {
            return (
              <div className="shadow-[3px_3px_5px_#191919,-3px_-3px_5px_#3C3C3C] p-[1rem] flex items-center justify-center rounded-[10px]" key={index}>
                <img className="w-[4vw]" src={`/skills/${skill.name}.png`} alt={`${skill.name}`} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="p-[0.5rem] text-[1.2rem]">
        <div>Development</div>
        <div className=" flex grow-1 flex-wrap mt-[1rem] gap-[2rem]">
          {DevelopmentArray?.map((skill, index) => {
            return (
              <div className="shadow-[2px_2px_5px_#191919,-2px_-2px_5px_#3C3C3C] p-[1rem] flex items-center justify-center rounded-[10px]" key={index}>
                <img className="w-[4vw]" src={`/skills/${skill.name}.png`} alt={`${skill.name}`} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;

import React from "react";
import TitleText from "../Components/TitleText";
import Skill from "../Components/Skill";
import { Skills } from "../Data/data";

export default function About() {
  return (
    <div className="flex flex-col items-start justify-center p-[20px]">
      <TitleText text="About Me" />
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </div>
      {/* <div className="mt-[1rem] flex flex-col gap-2">
        <TitleText text="Skills"/>
        <div className="grid grid-cols-4 justify-items-start gap-[1rem]">
          {Skills?.map((skill) => {
            return <Skill skill={skill} />;
          })}
        </div>
      </div> */}
      <div className="flex flex-col items-start">
        <TitleText text="Skills" />
        <div className="grid grid-cols-4 justify-items-start gap-[1rem]">
          {Skills?.map((skill) => {
            return <Skill skill={skill} />;
          })}
        </div>
      </div>
    </div>
  );
}

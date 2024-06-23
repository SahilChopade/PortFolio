import React from "react";
import Experiencecard from "../Components/Experiencecard";
import { Experience as Exp } from "../Data/data";
export default function Experience() {
  return (
    <div className="flex flex-col gap-[0.5rem] shadow-[5px_5px_10px_#191919,-5px_-5px_10px_#3C3C3C] rounded-[1rem] p-[2rem]">
      <div className="text-[2.5rem]">Experience</div>
      <hr />
      <div className="flex gap-[1rem] my-[2rem]">
        {Exp.map((experi) => {
          return <Experiencecard props={experi} />;
        })}
      </div>
    </div>
  );
}

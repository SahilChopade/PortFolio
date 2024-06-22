import React from "react";
import Workcard from "../Components/Workcard";
import { Projects } from "../Data/data";

export default function Works() {
  return (
    <div className="flex flex-col relative gap-[0.5rem] shadow-[5px_5px_10px_#191919,-5px_-5px_10px_#3C3C3C] rounded-[1rem] p-[2rem]">
      <div className="text-[2.5rem]">Works</div>
      <hr />
      <p className="mt-[1rem] grid place-content-end mr-[1rem] mb-[0.5rem]">Click to visit Site</p>
      <div className="flex grow-1 gap-[2rem]">
        {Projects?.map((proj) => {
          return <Workcard props={proj} />;
        })}
      </div>
    </div>
  );
}

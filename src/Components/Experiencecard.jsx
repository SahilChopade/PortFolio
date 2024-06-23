import React from "react";

const Experiencecard = ({props}) => {
  return (
    <div className="relative group bg-[#081530] w-[20rem] h-[20rem] rounded-[1rem] overflow-hidden">
      <div className="flex justify-between p-[1rem] relative">
        <img
          src={`/Experience/${props.img}`}
          alt="Creator Cube"
          className="w-[10rem] aspect-square object-contain group-hover:w-[6rem] transition-all duration-300"
        />
        <h2 className="text-[#fff] absolute rotate-[-25deg] -bottom-[4rem] left-[3rem]  group-hover:rotate-[0deg] group-hover:bottom-[1rem] group-hover:left-[8rem] group-hover:right-0 group-hover:text-[1.7rem] text-[2rem] font-bold  transition-all duration-300">
          {props.name}
        </h2>
      </div>
      <div className="absolute flex px-[1rem] h-[100%] w-[200%] bg-red-500 transition-all duration-300 group-hover:rotate-[0deg] rotate-[-25deg]">
        <div className="w-[18rem] opacity-0 group-hover:opacity-100 transition-all duration-200 flex flex-col gap-[1rem] mt-[2rem]">
          <div className="uppercase font-extrabold righteous text-[1.5rem] text-[#081530]">
            {props.position}
          </div>
          <div className="text-[1.3rem]">
            {props.stack}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiencecard;

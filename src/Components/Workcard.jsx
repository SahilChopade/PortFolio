import React from "react";

const Workcard = ({props}) => {
  return (
    <div onClick={()=>window.open(`${props.link}`)} class="relative rounded-[1rem] group cursor-pointer overflow-hidden duration-500 w-[20rem] h-[20rem] bg-[#081530] p-5">
      <div class="rounded-[1rem] object-cover">
        <img src={`/works/${props.name}.png`} alt={`${props.name}`} class="w-full h-[14rem] object-cover group-hover:rounded-[1rem] group-hover:scale-110 duration-500" />
        <div class="absolute w-full h-[8rem] left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12 group-hover:text-[#081530]">
          <div class="absolute -z-10 left-0 w-full h-full opacity-0 duration-500 group-hover:opacity-100 group-hover:bg-white"></div>
          <span class="text-xl font-bold">{props.title}</span>
          <p class="group-hover:opacity-100 opacity-0">
            {props.stack}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Workcard;

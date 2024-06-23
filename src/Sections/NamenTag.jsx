import React from "react";
import ProfileName from "../Components/ProfileName";
import SkillsTag from "../Components/SkillsTag";

const NamenTag = () => {
  return (
    <div className="flex flex-col gap-[1rem] p-[2rem]">
      <ProfileName />
      <SkillsTag />
    </div>
  );
};

export default NamenTag;

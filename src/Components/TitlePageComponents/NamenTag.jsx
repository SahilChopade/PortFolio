import React from "react";
import ProfileName from "./ProfileName";
import SkillsTag from "./SkillsTag";

const NamenTag = () => {
  return (
    <div className="flex flex-col gap-[1rem]">
      <ProfileName />
      <SkillsTag />
    </div>
  );
};

export default NamenTag;

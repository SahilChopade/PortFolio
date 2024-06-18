import React from "react";
import ProfileName from "../Components/NamenTagComp/ProfileName";
import SkillsTag from "../Components/NamenTagComp/SkillsTag";

const NamenTag = () => {
  return (
    <div className="flex flex-col gap-[1rem] p-[2rem]">
      <ProfileName />
      <SkillsTag />
    </div>
  );
};

export default NamenTag;

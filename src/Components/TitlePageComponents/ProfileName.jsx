import React from "react";

const ProfileName = () => {
  return (
    <div className="flex flex-col righteous h-2/3">
      <h3 className="text-white text-[3rem]">Hi, I'm</h3>
      <div>
        <h2 className="text-red-800 text-[8rem] font-extrabold">Sahil</h2>
        <h2 className="text-red-800 text-[9rem] relative bottom-[3rem] right-[5rem] font-extrabold text-right">
          Chopade
        </h2>
      </div>
    </div>
  );
};

export default ProfileName;

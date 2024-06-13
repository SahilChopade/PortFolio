import React from "react";
import Navbar from "./Navbar";
import ProfilePic from "../Components/TitlePageComponents/ProfilePic";
import NamenTag from "../Components/TitlePageComponents/NamenTag";

export default function TitlePage() {
  return (
    <div id="TitlePage" className="">
      <Navbar />
      <div className="flex gap-[1rem] justify-center p-[2rem]">
        <div className="w-1/2">
          <ProfilePic />
        </div>
        <div className="w-1/2">
          <NamenTag />
        </div>
      </div>
    </div>
  );
}

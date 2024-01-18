import React from "react";
import Education from "./Education";
import Programming from "./Programming";

export default function EducationCoding() {
  return (
    <div className="min-h-screen max-h-fit p-[20px] border-[1px] border-white rounded-[20px] my-[1rem] flex flex-col md:flex-row justify-center items-center md:items-start md:justify-around md:gap-0 gap-[2rem]">
      <Education />
      <Programming />
    </div>
  );
}

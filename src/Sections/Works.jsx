import React from "react";
import TitleText from "../Components/TitleText";
import Card from "../Components/Card";

export default function Works() {
  return (
    <div className="h-screen p-[20px] border-[1px] border-white rounded-[20px] my-[1rem]">
      <div className="flex flex-col items-start justify-between">
        <TitleText text="Works" />
      </div>
      <div>
        <Card />
      </div>
    </div>
  );
}

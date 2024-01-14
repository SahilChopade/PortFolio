import React from "react";

export default function Bullets({ text }) {
  return (
    <div className="flex items-start gap-2">
      <img
        className="mt-[5px] w-[20px] h-[20px]"
        src="/BulletPoint.png"
        alt="Bullet"
      />
      <div className="font-extralight font-['Poppins']">{text}</div>
    </div>
  );
}

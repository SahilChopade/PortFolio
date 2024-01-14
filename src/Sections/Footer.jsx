import React from "react";
import FooterIcons from "../Components/FooterIcons";

export default function Footer() {
  return (
    <div className="px-[20px] flex gap-2 items-center relative">
      <div className="flex gap-2">
        <FooterIcons name="github" link="http://www.github.com/SahilChopade" />
        <FooterIcons
          name="instagram"
          link="https://www.instagram.com/sa_ch02/"
        />
        <FooterIcons
          name="linkedin"
          link="https://www.linkedin.com/in/sahil-chopade-7504bb227/"
        />
        <FooterIcons name="mail" link="mailto:chopadesahil2002@gmail.com" />
      </div>
    </div>
  );
}

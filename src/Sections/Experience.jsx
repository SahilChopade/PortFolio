import React from "react";
import Experiencecard from "../Components/Experiencecard";
import { Experience as Exp } from "../Data/data";
import { settings } from "../Data/slick.data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Experience() {
  return (
    <div className="flex flex-col gap-[0.5rem] shadow-[5px_5px_10px_#191919,-5px_-5px_10px_#3C3C3C] rounded-[1rem] p-[2rem]">
      <div className="text-[2.5rem]">Experience</div>
      <hr />
      <p className="md:hidden mt-[1rem] grid place-content-end mr-[1rem] mb-[0.5rem]">
        Click for More Info
      </p>
      <div className="p-[1rem] md:p-0 md:py-[2rem]">
        <Slider {...settings}>
          {Exp.map((experi) => {
            return <Experiencecard props={experi} />;
          })}
        </Slider>
      </div>
    </div>
  );
}

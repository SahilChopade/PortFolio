import React from "react";
import Workcard from "../Components/Workcard";
import { Projects } from "../Data/data";
import { settings } from "../Data/slick.data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Works() {
  return (
    <div className="flex flex-col relative gap-[0.5rem] shadow-[5px_5px_10px_#191919,-5px_-5px_10px_#3C3C3C] rounded-[1rem] p-[2rem] pb-[3rem]">
      <div className="text-[2.5rem]">Works</div>
      <hr />
      <p className="mt-[1rem] grid place-content-end mr-[1rem] mb-[0.5rem]">
        Click to visit Site
      </p>
      <div className="p-[1rem] md:p-0 md:py-[2rem]">
        <Slider {...settings}>
          {Projects?.map((proj, key) => {
            return <Workcard key={key} props={proj} />;
          })}
        </Slider>
      </div>
    </div>
  );
}

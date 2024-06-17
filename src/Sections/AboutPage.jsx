import React from "react";
import About from "../Components/AboutPageComponents/About";
import Skills from "../Components/AboutPageComponents/Skills";
export default function AboutPage() {
  return (
    <div id="About" className="flex gap-[4rem] justify-center p-[2rem]">
      <About />
      <Skills />
    </div>
  );
}

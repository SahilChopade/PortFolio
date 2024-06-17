import React from "react";

const About = () => {
  return (
    <div className="w-2/5 flex flex-col gap-[0.5rem] shadow-[5px_5px_10px_#191919,-5px_-5px_10px_#3C3C3C] rounded-[1rem] p-[2rem]">
      <div className="text-[4rem]">About Me</div>
      <hr />
      <div className="text-[1.35rem] text-justify mt-[1rem]">
        "I am a B.Tech Graduate from <strong>IIT Dhanbad</strong>,
        proficient in both
        <strong>FullStack Web Development</strong> &
        <strong>Competitive Programming</strong>. With a robust command of
        programming languages such as
        <strong>C, C++, Java, Golang,</strong> and a solid understanding of
        <strong>Data Structures & Algorithms</strong>, I excel in crafting
        innovative solutions.
        <br />
        <br />
        Actively contributed to three startup ventures, I have leveraged
        cutting-edge technologies to bring projects to life. My passion lies in
        tackling challenging problems, consistently delivering effective and
        time-efficient solutions. Join me on a journey where innovation meets
        expertise, and every coding challenge is an opportunity for growth."
      </div>
    </div>
  );
};

export default About;

import React from "react";
export default function Contact() {
  return (
    <div className="flex flex-col gap-[0.5rem] shadow-[5px_5px_10px_#191919,-5px_-5px_10px_#3C3C3C] rounded-[1rem] p-[2rem] mb-[5rem]">
      <div className="text-[2.5rem]">Contact</div>
      <hr />
      <div className="flex items-center justify-center gap-[3rem]">
        <form className="flex flex-col justify-center gap-[0.5rem] w-[30vw] text-[1.2rem] mt-[1rem]">
          <label>Name</label>
          <input
            className="p-[0.5rem] rounded-md text-white bg-[#081530] placeholder:text-blue-500"
            type="text"
            placeholder="Name"
          />
          <label>Email</label>
          <input
            className="p-[0.5rem] rounded-md text-white bg-[#081530] placeholder:text-blue-500"
            type="email"
            placeholder="Enter you Email"
          />
          <label>Subject</label>
          <input
            className="p-[0.5rem] rounded-md text-white bg-[#081530] placeholder:text-blue-500"
            type="subject"
            placeholder="Subject"
          />
          <label>Enter Your Message</label>
          <textarea
            className="p-[0.5rem] rounded-md text-white bg-[#081530] resize-none min-h-[20vh] placeholder:text-blue-500"
            placeholder="Enter Your Message"
          ></textarea>
          <input
            className="w-[10vw] p-[0.5rem] hover:bg-blue-500 transition-all hover:text-black rounded-lg text-[1.5rem] mt-[0.5rem] text-blue-500 cursor-pointer"
            type="submit"
            value="Send Message"
          />
        </form>
        <div class="bg-black shadow-[2px_2px_5px_#9C9C9C,-5px_-5px_10px_#081530] w-[15vw] h-[25rem] text-[1.4rem] rounded-lg">
          <div class="flex p-2 gap-1">
            <div class="">
              <span class="bg-red-500 inline-block center w-3 h-3 rounded-full"></span>
            </div>
            <div class="circle">
              <span class="bg-yellow-500 inline-block center w-3 h-3 rounded-full"></span>
            </div>
            <div class="circle">
              <span class="bg-green-500 box inline-block center w-3 h-3 rounded-full"></span>
            </div>
          </div>
          <div class="px-[1.5rem]">
            Thanks for exploring my portfolio.
            <strong className="text-blue-600">Eager to connect</strong> with
            fellow tech enthusiasts! Whether you're pondering a project, seeking
            collaboration, or just curious,
            <strong className="text-blue-600">give me a message</strong>.
          </div>
        </div>
      </div>
    </div>
  );
}

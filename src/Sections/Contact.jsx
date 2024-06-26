import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BoxHeadline from "../Components/BoxHeadline";

export default function Contact() {
  const [data, setData] = useState({
    Name: "",
    Email: "",
    Subject: "",
    Message: "",
  });
  const handleSubmit = async () => {
    const res = await axios.post("https://mailer-4th7.onrender.com/sendmail", data);
    const options = {
      position: "bottom-left",
      autoClose: 2998,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Zoom,
    };
    if (res.data.status) {
      toast.success(res.data.message, options);
    } else {
      toast(res.data.message, options);
    }
  };
  const handleClick = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <div className="flex flex-col gap-[0.5rem] shadow-[5px_5px_10px_#191919,-5px_-5px_10px_#3C3C3C] rounded-[1rem] p-[2rem] mb-[5rem]">
      <BoxHeadline name="Contact" />
      <ToastContainer
        position="bottom-left"
        autoClose={2998}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="colored"
        transition={Zoom}
      />
      <hr />
      <div className="flex flex-col md:flex-row items-center justify-center gap-[3rem]">
        <div className="flex flex-col justify-center gap-[0.5rem] w-[80vw] md:w-[30vw] text-[1.2rem] mt-[1rem]">
          <label>Name</label>
          <input
            onChange={handleClick}
            className="p-[0.5rem] rounded-md text-white bg-[#081530] placeholder:text-blue-500"
            type="text"
            name="Name"
            required
            placeholder="Name"
          />
          <label>Email</label>
          <input
            className="p-[0.5rem] rounded-md text-white bg-[#081530] placeholder:text-blue-500"
            onChange={handleClick}
            type="email"
            required
            name="Email"
            placeholder="Enter you Email"
          />
          <label>Subject</label>
          <input
            className="p-[0.5rem] rounded-md text-white bg-[#081530] placeholder:text-blue-500"
            onChange={handleClick}
            type="subject"
            required
            name="Subject"
            placeholder="Subject"
          />
          <label>Enter Your Message</label>
          <textarea
            className="p-[0.5rem] rounded-md text-white bg-[#081530] resize-none min-h-[20vh] placeholder:text-blue-500"
            onChange={handleClick}
            placeholder="Enter Your Message"
            required
            name="Message"
          ></textarea>
          <input
            className="w-full md:w-[10vw] p-[0.5rem] hover:bg-blue-500 transition-all hover:text-black rounded-lg text-[1.5rem] mt-[0.5rem] text-blue-500 cursor-pointer"
            onClick={handleSubmit}
            type="submit"
            value="Send Message"
          />
        </div>
        <div class="bg-black shadow-[2px_2px_5px_#9C9C9C,-5px_-5px_10px_#081530] w-[70vw] md:w-[15vw] pl-[0.5rem] pt-[0.5rem] pr-[2rem] pb-[2rem]  text-[1rem] md:text-[1.2rem] lg:text-[1.4rem] rounded-lg">
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
          <div class="px-[1.5rem] text-wrap">
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

import "./App.css";
import Experience from "./Sections/Experience";
import Works from "./Sections/Works";
import Contact from "./Sections/Contact";
import ProfilePic from "./Sections/ProfilePic";
import NamenTag from "./Sections/NamenTag";
import About from "./Sections/About";
import Skills from "./Sections/Skills";
function App() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-center lg:pt-[8rem] relative text-white font-['Merriweather'] p-[2rem] lg:p-[3rem]">
      <div className="w-full lg:w-[45vw] lg:fixed lg:left-0 mt-[5rem] lg:mt-0">
        <ProfilePic />
      </div>
      <div className="w-full lg:w-[55vw] lg:absolute lg:right-0 lg:mr-[1rem] flex flex-col gap-[3rem]">
        <NamenTag />
        <About />
        <Skills />
        <Experience />
        <Works />
        <Contact />
      </div>
    </div>
  );
}

export default App;

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
    <div className="flex flex-col md:flex-row md:justify-center md:pt-[8rem] relative text-white font-['Merriweather'] pl-[1rem] pr-[28rem] md:p-[3rem]">
      <div className="w-[100vw] md:w-[45vw] md:fixed md:left-0 mt-[5rem] md:mt-0">
        <ProfilePic />
      </div>
      <div className="w-[100vw] md:w-[55vw] md:absolute md:right-0 md:mr-[1rem] flex flex-col gap-[3rem]">
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

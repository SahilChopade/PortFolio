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
    <div className="flex justify-center relative text-white font-['Merriweather'] p-[3rem]">
      <div className="fixed left-0 top-[15%] w-[45vw]">
        <ProfilePic />
      </div>
      <div className="right-0 top-[10rem] absolute w-[55vw] mr-[1rem] flex flex-col gap-[3rem]">
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

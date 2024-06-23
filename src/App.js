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
    <div className="flex justify-center pt-[8rem] relative text-white font-['Merriweather'] p-[3rem]">
      <div className="w-[45vw] fixed left-0">
        <ProfilePic />
      </div>
      <div className="w-[55vw] absolute right-0 mr-[1rem] flex flex-col gap-[3rem]">
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

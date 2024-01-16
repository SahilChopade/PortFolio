import "./App.css";
import TitlePage from "./Pages/TitlePage";
import About from "./Sections/About";
import Experience from "./Sections/Experience";
import Works from "./Sections/Works";
import Footer from "./Sections/Footer";
import Contact from "./Sections/Contact";
import EducationCoding from "./Sections/EducationCoding";
function App() {
  return (
    <div className="text-white p-[20px] font-['Merriweather']">
      <TitlePage />
      <About />
      <Experience />
      <Works />
      <EducationCoding />
      <Contact />
    </div>
  );
}

export default App;

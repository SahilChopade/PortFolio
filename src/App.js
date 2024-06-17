import "./App.css";
import TitlePage from "./Sections/TitlePage";
import AboutPage from "./Sections/AboutPage";
import Experience from "./Sections/Experience";
import Works from "./Sections/Works";
import Contact from "./Sections/Contact";
function App() {
  return (
    <div className="text-white p-[10px] md:p-[20px] font-['Merriweather']">
      <TitlePage />
      <AboutPage />
      <Experience />
      <Works />
      <Contact />
    </div>
  );
}

export default App;

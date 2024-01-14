import "./App.css";
import TitlePage from "./Pages/TitlePage";
import About from "./Sections/About";
import Experience from "./Sections/Experience";
import Works from "./Sections/Works";
import Footer from "./Sections/Footer";
function App() {
  return (
    <div className="text-white p-[20px] font-['Merriweather']">
      <TitlePage />
      <About />
      <Experience />
      <Works />
      {/* <Footer /> */}
    </div>
  );
}

export default App;

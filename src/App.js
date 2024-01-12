import "./App.css";
import Navbar from "./Sections/Navbar";
import TitlePage from "./Pages/TitlePage";

function App() {
  return (
    <div className="min-h-screen text-white p-[30px] font-['Merriweather']">
      <Navbar />
      <TitlePage />
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Homepage } from "./Page/Homepage/Homepage";
import { Projects } from "./Page/Projects/Projects";
import { Footer } from "./Components/Footer/Footer";
import { About } from "./Page/About/About";

function App() {
  return (
    <div className="w-screen bg-richblue-400">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

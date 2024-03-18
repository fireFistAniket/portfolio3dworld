import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Project from "./pages/Project";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/projects" Component={Project} />
        <Route path="/contact" Component={Contact} />
      </Routes>
    </>
  );
}

export default App;

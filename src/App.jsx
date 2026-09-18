import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./pages/Navbar";
import HeroSection from "./pages/Herosection";
import About from "./pages/About";
import Skill from "./pages/Skill";
import Projects from "./pages/Project";
import Offer from "./pages/Offer";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <HeroSection />
    <About />
    <Skill />
    <Projects />
    <Offer />
    
    <Contact />
    <Footer />
    </BrowserRouter>
  );
}

export default App;
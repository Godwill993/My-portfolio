import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import NAvbar from "./navbar.jsx";
import HeroSec from "./HERO.jsx";
import Skills from "./skills.jsx";
import Qualification from "./FEW.jsx"
import About from "./about.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NAvbar />
    <HeroSec />
    <Skills />
    <div className="sec-sec">
       <Qualification />
    <About/>
    </div>
   
  </StrictMode>
);

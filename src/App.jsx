import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header/Header";
import Nav from "./components/layout/Nav/Nav";
import Stats from "./components/sections/Stat/Stats";
import Services from "./components/sections/Services/Services";
import Projects from "./components/sections/Project/Project";
import About from "./components/sections/About/About";
import Contact from "./components/sections/Contact/Contact";
import Footer from "./components/layout/Footer/Footer";
import AnimatedServices from "./components/sections/AnimatedServices/AnimatedServices";
import ProjectGrid from "./components/sections/ProjectGrid/ProjectGrid";

// Home page component with all sections
const Home = () => {
  return (
    <>
      <>
      <div id="stats">
        <Stats />
      </div>
      
      <main>
        <div id="services">
          <AnimatedServices />
          <Services />
        </div>
        
        <div id="projects">
          <ProjectGrid />
        </div>
        
        <div id="about">
          <About />
        </div>
        
        <div id="contact">
          <Contact />
        </div>
      </main>
    </>
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Header />
        <Nav />
        <Routes>
          <Route path="/*" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
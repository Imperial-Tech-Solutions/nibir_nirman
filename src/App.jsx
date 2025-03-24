import React from "react";
import { motion } from "framer-motion"; // Corrected import for motion
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header/Header";
import Hero from "./components/layout/Hero/Hero";
import Stats from "./components/sections/Stat/Stats";
import Services from "./components/sections/Services/Services";
import Projects from "./components/sections/Project/Project";
import About from "./components/sections/About/About";
import Contact from "./components/sections/Contact/Contact";
import Footer from "./components/layout/Footer/Footer";
import AnimatedServices from "./components/sections/AnimatedServices/AnimatedServices";
import ProjectGrid from "./components/sections/ProjectGrid/ProjectGrid";
import Discription from "./components/sections/Discription/Discription";
import ProjectCard from "./components/sections/ProjectCard/ProjectCard";
import AboutNibirNirman from "./components/sections/About/AboutNibirNirman";


// Home page component with all sections
const Home = () => {
  return (
    <>
    <Hero />
      <div id="stats">
        <motion.div
          initial={{ opacity: 0, transform: "translateY(20px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0)" }}
          viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of the section is visible
          transition={{ duration: 1.2 }}
        >
          <Stats />
        </motion.div>
      </div>

      <main>
        <div id="discription">
          <motion.div
            initial={{ opacity: 0, transform: "translateY(20px)" }}
            whileInView={{ opacity: 1, transform: "translateY(0)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2 }}
          >
            <Discription />
          </motion.div>
        </div>

        <div id="projects">
          <motion.div
            initial={{ opacity: 0, transform: "translateY(20px)" }}
            whileInView={{ opacity: 1, transform: "translateY(0)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2 }}
          >
            <ProjectGrid />
          </motion.div>
        </div>

        <div id="services">
          <motion.div
            initial={{ opacity: 0, transform: "translateY(20px)" }}
            whileInView={{ opacity: 1, transform: "translateY(0)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2 }}
          >
            <Services />
          </motion.div>
        </div>

        <div id="contact">
          <motion.div
            initial={{ opacity: 0, transform: "translateY(20px)" }}
            whileInView={{ opacity: 1, transform: "translateY(0)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2 }}
          >
            <Contact />
          </motion.div>
        </div>
      </main>
    </>
  );
};

// About page component
const AboutPage = () => {
  return (
    <>
      <div id="about">
        <motion.div
          initial={{ opacity: 0, transform: "translateY(20px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2 }}
        >
          <About />
        </motion.div>
      </div>
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/projectCard/:id" element={<ProjectCard />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
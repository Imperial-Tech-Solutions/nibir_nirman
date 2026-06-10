import React, { Suspense, lazy, useEffect } from "react";
import { motion } from "motion/react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/layout/Header/Header";
import Hero from "./components/layout/Hero/Hero";
import Stats from "./components/sections/Stat/Stats";
import Services from "./components/sections/Services/Services";
import Contact from "./components/sections/Contact/Contact";
import Footer from "./components/layout/Footer/Footer";
import ProjectGrid from "./components/sections/ProjectGrid/ProjectGrid";
import Discription from "./components/sections/Discription/Discription";
import { scrollToSection } from "./utils/sectionNavigation";

const About = lazy(() => import("./components/sections/About/About"));
const Projects = lazy(() => import("./components/sections/Project/Project"));
const IndividualProject = lazy(() =>
  import("./components/sections/Project/IndividualProject")
);

const PageLoader = () => (
  <div className="min-h-[50vh] bg-gray-100 pt-28 text-center text-gray-600">
    Loading...
  </div>
);

const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/" || !location.hash) {
      return;
    }

    const sectionId = location.hash.slice(1);
    const animationFrameId = window.requestAnimationFrame(() => {
      scrollToSection(sectionId);
    });

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [location.hash, location.pathname]);

  return null;
};


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
      <ScrollToHash />
      <div className="min-h-screen">
        <Header />
        
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/projects/:id" element={<IndividualProject />} />
            <Route path="/projectCard/:id" element={<IndividualProject />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

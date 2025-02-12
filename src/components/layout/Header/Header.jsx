import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import logo from "../../../assets/header_logo.png";
import { useNavigate } from "react-router-dom"; // Import useNavigate


const Header = () => {
  const navigate = useNavigate(); // Initialize the navigate function
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm transition-all duration-300 ${
        isScrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'h-14' : 'h-20'
        }`}>
          <div className="md:flex md:items-center md:gap-12">
            <Link className="block text-teal-600" to="/">
              <img
                src={logo}
                alt="Meaningful text"
                className={`w-auto transition-all duration-300 ${
                  isScrolled ? 'max-h-10' : 'max-h-14'
                }`}
              />
            </Link>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-8 text-base">
                <li>
                <button
      onClick={() => navigate("/about")} // Navigate to the /about route
      className="text-gray-500 transition hover:text-gray-500/75"
    >
      About
    </button>
                </li>

                <li>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="text-gray-500 transition hover:text-gray-500/75"
                  >
                    Services
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => navigate("/projects")}
                    className="text-gray-500 transition hover:text-gray-500/75"
                  >
                    Projects
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-6">
            <div className="sm:flex sm:gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className={`rounded bg-[#15803D] text-sm font-medium text-white shadow hover:bg-[#166534] focus:outline-none focus:ring active:bg-[#14532D] transition-all duration-300 ${
                  isScrolled 
                    ? 'px-8 py-2' 
                    : 'px-12 py-3'
                }`}
              >
                Contact Us
              </button>
            </div>

            <div className="block md:hidden">
              <button
                className="rounded bg-[#15803D] p-2 text-white transition hover:bg-[#166534]"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } md:hidden absolute right-0 w-48 bg-white shadow-lg rounded-bl-lg transition-all duration-300`}
          style={{
            top: isScrolled ? '3.5rem' : '5rem'
          }}
        >
          <nav className="border-t border-gray-200">
            <ul className="flex flex-col py-2">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="block w-full px-4 py-2 text-left text-gray-500 hover:bg-[#15803D] hover:text-white transition"
                >
                  About
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="block w-full px-4 py-2 text-left text-gray-500 hover:bg-[#15803D] hover:text-white transition"
                >
                  Services
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="block w-full px-4 py-2 text-left text-gray-500 hover:bg-[#15803D] hover:text-white transition"
                >
                  Projects
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
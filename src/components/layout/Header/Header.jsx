import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/header_logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link className="block text-teal-600" to="/">
              <img
                src={logo}
                alt="Meaningful text"
                className="max-h-14 w-auto"
              />
            </Link>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-8 text-base">
                <li>
                  <button
                    onClick={() => scrollToSection('about')}
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
                    onClick={() => scrollToSection('projects')}
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
                className="block w-full rounded bg-[#60AD02] px-12 py-3 text-sm font-medium text-white shadow hover:bg-[#068510] focus:outline-none focus:ring active:bg-[#068510] sm:w-auto"
              >
                Contact Us
              </button>
            </div>

            <div className="block md:hidden">
              <button
                className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
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
          } md:hidden absolute right-0 top-16 w-48 bg-white shadow-lg rounded-bl-lg`}
        >
          <nav className="border-t border-gray-200">
            <ul className="flex flex-col py-2">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="block w-full px-4 py-2 text-left text-gray-500 hover:bg-gray-50 transition"
                >
                  About
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="block w-full px-4 py-2 text-left text-gray-500 hover:bg-gray-50 transition"
                >
                  Services
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="block w-full px-4 py-2 text-left text-gray-500 hover:bg-gray-50 transition"
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
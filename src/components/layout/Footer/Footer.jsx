import React from "react";
import logo from "../../../assets/horizontal_logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Back to top button */}
          <button
            className="absolute right-0 top-0 rounded-full bg-[#60AD02] p-2 text-white shadow-md transition-colors hover:bg-[#068510] focus:outline-none focus:ring-2 focus:ring-[#60AD02] focus:ring-offset-2"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            {/* Logo and tagline */}
            <div className="flex flex-col items-center lg:items-start">
              <div className="w-48 lg:w-56">
                <img 
                  src={logo}
                  alt="Nibir Nirman Logo" 
                  className="h-auto w-full object-contain"
                />
              </div>
              <p className="mt-4 text-center text-sm text-gray-600 lg:text-left">
                Building Excellence, Shaping Futures: Nibir Nirman – Your Trusted Partner in Quality Construction Since 1997.
              </p>
            </div>

            {/* Navigation and copyright */}
            <div className="flex flex-col items-center justify-between lg:items-end">
              <nav className="mb-4">
                <ul className="flex flex-wrap justify-center gap-6">
                  <li>
                    <a
                      href="#"
                      className="text-sm font-medium text-gray-700 transition-colors hover:text-[#60AD02] focus:outline-none focus:ring-2 focus:ring-[#60AD02] focus:ring-offset-2"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm font-medium text-gray-700 transition-colors hover:text-[#60AD02] focus:outline-none focus:ring-2 focus:ring-[#60AD02] focus:ring-offset-2"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm font-medium text-gray-700 transition-colors hover:text-[#60AD02] focus:outline-none focus:ring-2 focus:ring-[#60AD02] focus:ring-offset-2"
                    >
                      Projects
                    </a>
                  </li>
                </ul>
              </nav>
              <p className="text-xs text-gray-500">
                Copyright &copy; {new Date().getFullYear()} Nibir Nirman. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
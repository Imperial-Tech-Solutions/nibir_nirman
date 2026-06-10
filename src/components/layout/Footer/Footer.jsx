import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../../assets/horizontal_logo.png";
import {
  getSectionNavigationTarget,
  scrollToSection,
} from "../../../utils/sectionNavigation";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    navigate("/");
  };

  const handleSectionNavigation = (sectionId) => {
    const navigationTarget = getSectionNavigationTarget(location.pathname, sectionId);

    if (navigationTarget.type === "scroll") {
      scrollToSection(sectionId);
      return;
    }

    navigate(navigationTarget.to);
  };

  return (
    <footer className="bg-gray-100 font-roboto">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
      `}</style>
      <div className="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 lg:px-8 relative">
        <div className="grid gap-4 lg:grid-cols-2 lg:gap-16">
          {/* Logo and tagline */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="w-64 lg:w-72">
              <a 
                href="/" 
                onClick={(e) => {
                  e.preventDefault();
                  handleLogoClick();
                }}
                className="cursor-pointer"
              >
                <img
                  src={logo}
                  alt="Nibir Nirman Logo"
                  className="h-auto w-full object-contain"
                />
              </a>
            </div>
            <p className="mt-2 text-center text-lg text-gray-600 lg:text-left">
              Building Excellence, Shaping Futures: Nibir Nirman – Your Trusted Partner in Quality Construction Since 1997.
            </p>
          </div>
          {/* Navigation and copyright */}
          <div className="flex flex-col items-center justify-between lg:items-end">
            <nav className="mb-2">
              <ul className="flex flex-wrap justify-center gap-8 py-2">
                <li>
                  <button
                    type="button"
                    onClick={() => navigate("/about")}
                    className="text-lg font-medium text-gray-700 transition-colors hover:text-[#60AD02] focus:outline-none focus:ring-2 focus:ring-[#60AD02] focus:ring-offset-2 px-4 py-2"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleSectionNavigation("services")}
                    className="text-lg font-medium text-gray-700 transition-colors hover:text-[#60AD02] focus:outline-none focus:ring-2 focus:ring-[#60AD02] focus:ring-offset-2 px-4 py-2"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => navigate("/projects")}
                    className="text-lg font-medium text-gray-700 transition-colors hover:text-[#60AD02] focus:outline-none focus:ring-2 focus:ring-[#60AD02] focus:ring-offset-2 px-4 py-2"
                  >
                    Projects
                  </button>
                </li>
              </ul>
            </nav>
            <p className="text-base text-gray-500">
              Copyright &copy; {new Date().getFullYear()} Nibir Nirman. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

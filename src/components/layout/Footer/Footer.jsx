import React from "react";
import logo from "../../../assets/horizontal_logo.png";

const Footer = () => {
  return (
    <div>
      {/* Full view */}
      <footer className="bg-gray-100">
        <div className="relative mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 lg:pt-12">
          <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
            <a
              className="inline-block rounded-full bg-[#60AD02] p-2 text-white shadow transition hover:bg-[#068510] sm:p-2 lg:p-3"
              href="#"
            >
              <span className="sr-only">Back to top</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>

          <div className="lg:flex lg:items-end lg:justify-between">
            <div>
              <div className="flex justify-center text-teal-600 lg:justify-start">
                <img src={logo} alt="Meaningful text" />
              </div>

              <p className="mx-auto mt-4 max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
                Building Excellence, Shaping Futures: Nibir Nirman – Your Trusted Partner in Quality Construction Since 1997.
              </p>
            </div>

            <ul className="mt-8 flex flex-wrap justify-center gap-4 md:gap-6 lg:mt-0 lg:justify-end lg:gap-8">
              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="#"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="#"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="#"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <p className="mt-8 text-center text-sm text-gray-500 lg:text-right">
            Copyright &copy; 2024. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
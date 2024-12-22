import React from "react";
import logo from "../../../assets/nav_picture.png";

const Nav = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <section className="relative">
        {/* Background div */}
        <div
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1687440758228-e449337d6e16?q=80&w=3651&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-smabsolute inset-0 bg-black/40 backdrop-blur-sm"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
              If You Can Dream It
              <strong
                className="block font-extrabold"
                style={{ color: "#60AD02" }}
              >
                We Can Build it.
              </strong>
            </h1>

            <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
              Building Excellence, Shaping Futures: Nibir Nirman – Your Trusted
              Partner in Quality Construction Since 1997.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full rounded bg-[#60AD02] px-12 py-3 text-sm font-medium text-white shadow hover:bg-[#068510] focus:outline-none focus:ring active:bg-[#068510] sm:w-auto"
              >
                About Us
              </button>

              <a
                href="/ContactUs.html"
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-[#60AD02] shadow hover:text-[#068510] focus:outline-none focus:ring active:text-[#068510] sm:w-auto"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nav;

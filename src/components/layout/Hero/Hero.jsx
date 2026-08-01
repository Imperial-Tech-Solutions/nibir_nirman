import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const slides = [
  {
    url: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Construction Site 1"
  },
  {
    url: "https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Construction Site 2"
  },
  {
    url: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Construction Site 3"
  }
];

const Hero = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Scroll to section functionality
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[100svh]">
      <div id="carousel" className="absolute inset-0">
        {/* Carousel slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.url}
              alt={slide.alt}
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : "low"}
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Carousel Navigation */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full hover:opacity-75 transition-opacity ${
                currentSlide === index ? "bg-white opacity-100" : "bg-white opacity-50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative container mx-auto flex min-h-[100svh] items-center px-5 pb-14 pt-24 sm:px-6 sm:pt-20">
        <div className="text-white max-w-2xl">
          <h1 className="mb-5 text-4xl font-bold leading-tight sm:mb-6 sm:text-5xl">
            If You Can Dream It{" "}
            <strong className="block" style={{ color: "#60AD02" }}>
              We Can Build it.
            </strong>
          </h1>
          <p className="mb-6 text-lg leading-relaxed sm:mb-8 sm:text-xl">
            Building Excellence, Shaping Futures: Nibir Nirman – Your Trusted
            Partner in Quality Construction Since 1997.
          </p>
          <div className="flex flex-wrap gap-4 sm:gap-6">
            <button
              onClick={() => navigate("/about")}
              className="flex-1 whitespace-nowrap rounded-lg bg-[#15803D] px-5 py-3 text-white transition-colors hover:bg-[#166534] sm:flex-none sm:px-8"
            >
              About Us
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="flex-1 whitespace-nowrap rounded-lg bg-white px-5 py-3 text-[#15803D] transition-colors hover:bg-slate-100 sm:flex-none sm:px-8"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

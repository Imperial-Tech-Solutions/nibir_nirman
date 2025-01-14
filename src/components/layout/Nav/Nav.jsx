import React, { useState, useEffect } from "react";

const Nav = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
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
    <section className="relative h-screen">
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

      <div className="relative container mx-auto px-6 h-full flex items-center">
        <div className="text-white max-w-2xl">
          <h1 className="text-5xl font-bold mb-6">
            If You Can Dream It{" "}
            <strong className="block" style={{ color: "#60AD02" }}>
              We Can Build it.
            </strong>
          </h1>
          <p className="text-xl mb-8">
            Building Excellence, Shaping Futures: Nibir Nirman – Your Trusted
            Partner in Quality Construction Since 1997.
          </p>
          <div className="flex flex-row gap-10">
            <button
              onClick={() => scrollToSection("about")}
              className="bg-[#15803D] text-white px-8 py-3 rounded-lg hover:bg-[#166534] transition-colors"
            >
              About Us
            </button>
            <a
              href="/ContactUs.html"
              className="bg-white text-[#15803D] px-8 py-3 rounded-lg hover:bg-slate-100 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nav;
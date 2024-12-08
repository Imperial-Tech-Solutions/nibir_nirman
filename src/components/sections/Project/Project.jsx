import React, { useState, useEffect, useCallback } from "react";

const Project = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    {
      id: 1,
      text: "Slide 1",
      title: "Lorem ipsum dolor sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloremque saepe architecto maiores repudiandae amet perferendis repellendus, reprehenderit voluptas sequi.",
      image:
        "https://images.unsplash.com/photo-1731690415686-e68f78e2b5bd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      text: "Slide 2",
      title: "Sed do eiusmod tempor incididunt.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloremque saepe architecto maiores repudiandae amet perferendis repellendus, reprehenderit voluptas sequi.",
      image:
        "https://images.unsplash.com/photo-1556745753-b2904692b3cd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      text: "Slide 3",
      title: "Ut enim ad minim veniam.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloremque saepe architecto maiores repudiandae amet perferendis repellendus, reprehenderit voluptas sequi.",
      image:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const handleWheel = useCallback(
    (e) => {
      if (isTransitioning) return;

      setIsTransitioning(true);
      if (e.deltaY > 0) {
        // Scrolling down
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      } else {
        // Scrolling up
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      }

      // Reset transition lock after animation
      setTimeout(() => setIsTransitioning(false), 500);
    },
    [isTransitioning, slides.length]
  );

  useEffect(() => {
    const carouselElement = document.getElementById("vertical-carousel");
    carouselElement.addEventListener("wheel", handleWheel);

    return () => {
      carouselElement.removeEventListener("wheel", handleWheel);
    };
  }, [handleWheel]);

  const goToSlide = (index) => {
    if (!isTransitioning) {
      setCurrentSlide(index);
    }
  };

  return (
    <div className="w-full relative">
      <div id="vertical-carousel" className="relative h-96 overflow-hidden">
        <div
          className="transition-transform duration-500 ease-linear h-full"
          style={{ transform: `translateY(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="w-full h-96 flex-shrink-0">
              <section className="bg-indigo-50 rounded-2xl h-full">
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
                    <div>
                      <div className="max-w-lg md:max-w-none">
                        <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                          {slide.title}
                        </h2>
                        <p className="mt-4 text-gray-700">{slide.description}</p>
                      </div>
                    </div>
                    <div>
                      <img
                        src={slide.image}
                        className="rounded"
                        alt={`Image for ${slide.text}`}
                      />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="absolute right-10 top-1/3 translate-y-8 flex flex-col gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === index ? "bg-indigo-600 h-4" : "bg-indigo-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;

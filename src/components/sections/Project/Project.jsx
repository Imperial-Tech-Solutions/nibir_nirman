import React, { useState, useEffect, useCallback } from 'react';

const Project = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    { id: 1, text: "Slide 1" },
    { id: 2, text: "Slide 2" },
    { id: 3, text: "Slide 3" }
  ];

  const handleWheel = useCallback((e) => {
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
  }, [isTransitioning, slides.length]);

  useEffect(() => {
    const carouselElement = document.getElementById('vertical-carousel');
    carouselElement.addEventListener('wheel', handleWheel);

    return () => {
      carouselElement.removeEventListener('wheel', handleWheel);
    };
  }, [handleWheel]);

  const goToSlide = (index) => {
    if (!isTransitioning) {
      setCurrentSlide(index);
    }
  };

  return (
    <div className="w-full relative">
      <div 
        id="vertical-carousel"
        className="relative h-96 overflow-hidden"
      >
        <div 
          className="transition-transform duration-500 ease-linear h-full"
          style={{ transform: `translateY(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div 
              key={slide.id}
              className="w-full h-96 flex-shrink-0"
            >
              <div className="bg-indigo-50 rounded-2xl h-full flex justify-center items-center">
                <span className="text-3xl font-semibold text-indigo-600">
                  {slide.text}
                </span>
              </div>
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
                currentSlide === index ? 'bg-indigo-600 h-4' : 'bg-indigo-300'
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
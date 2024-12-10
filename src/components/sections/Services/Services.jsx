import React, { useState } from "react";

const Services = () => {
  const services = [
    {
      title: "Industrial and Turnkey Project Solution",
      link: "#",
      image: "https://via.placeholder.com/800x600?text=Installation", // Replace with the actual image URL
      description:
        "We offer comprehensive installation, testing, and commissioning services to ensure your systems are fully operational and meet the highest standards.",
    },
    {
      title: "Civil and Building Constructions",
      link: "#",
      image: "https://via.placeholder.com/800x600?text=Operations", // Replace with the actual image URL
      description:
        "Our operations and maintenance services provide end-to-end support to keep your systems running smoothly and efficiently.",
    },
    {
      title: "Architectural and Design Solution",
      link: "#",
      image: "https://via.placeholder.com/800x600?text=Project+Management", // Replace with the actual image URL
      description:
        "We specialize in project and contract management, ensuring your projects are delivered on time and within budget.",
    },
    {
      title: "Telecommunication Infrastructure Developement",
      link: "#",
      image: "https://via.placeholder.com/800x600?text=Bidding", // Replace with the actual image URL
      description:
        "Our bidding consultancy services help you secure competitive contracts with expertly crafted proposals.",
    },
    {
      title: "Irrigation and water resources",
      link: "#",
      image: "https://via.placeholder.com/800x600?text=Supply", // Replace with the actual image URL
      description:
        "We provide reliable supply and trading solutions to meet your business needs efficiently.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0); // Default to the first service

  const handleButtonClick = (index) => {
    setActiveIndex(index); // Set the clicked button as active
  };

  return (
    <div className="bg-white px-6 py-12 lg:py-20 lg:px-12 flex flex-col lg:flex-row gap-8">
      {/* Left Section with Image and Description */}
      <div className="lg:w-2/3">
        <img
          src={services[activeIndex].image}
          alt={services[activeIndex].title}
          className="w-full h-auto rounded"
        />
        <div className="mt-6">
          <p className="text-gray-700 text-base leading-relaxed">
            {services[activeIndex].description}
          </p>
        </div>
      </div>

      {/* Right Section with List */}
      <div className="lg:w-1/3">
        <ul className="space-y-4">
          {services.map((service, index) => (
            <li key={index}>
              <button
                onClick={() => handleButtonClick(index)}
                className={`block w-full rounded px-12 py-3 text-sm font-medium shadow focus:outline-none focus:ring transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-[#60AD02] text-white active:bg-[#068510]" // Active button styles
                    : "bg-gray-100 text-black hover:bg-gray-200" // Default button styles
                }`}
              >
                {service.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Services;

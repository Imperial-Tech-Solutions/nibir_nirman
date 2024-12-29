import React, { useState } from "react";
import s1 from "../../../assets/s1.jpg";
import s2 from "../../../assets/s2.jpg";
import s3 from "../../../assets/s3.jpg";
import s4 from "../../../assets/s4.jpg";
import s5 from "../../../assets/s5.jpg";


const Services = () => {
  const services = [
    {
      title: "Industrial and Turnkey Project Solution",
      link: "#",
      image: s1, // Replace with your actual image paths
      description:
        "We offer comprehensive installation, testing, and commissioning services to ensure your systems are fully operational and meet the highest standards.",
    },
    {
      title: "Civil and Building Constructions",
      link: "#",
      image: s2,
      description:
        "Our operations and maintenance services provide end-to-end support to keep your systems running smoothly and efficiently.",
    },
    {
      title: "Architectural and Design Solution",
      link: "#",
      image: s3,
      description:
        "We specialize in project and contract management, ensuring your projects are delivered on time and within budget.",
    },
    {
      title: "Telecommunication Infrastructure Developement",
      link: "#",
      image: s4,
      description:
        "Our bidding consultancy services help you secure competitive contracts with expertly crafted proposals.",
    },
    {
      title: "Irrigation and water resources",
      link: "#",
      image: s5,
      description:
        "We provide reliable supply and trading solutions to meet your business needs efficiently.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleButtonClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="container mx-auto bg-white px-4 py-8 lg:py-16">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Section with Image and Description */}
        <div className="lg:w-2/3">
          <div className="relative aspect-video w-full overflow-hidden rounded-lg">
            <img
              src={services[activeIndex].image}
              alt={services[activeIndex].title}
              className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300"
            />
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3">{services[activeIndex].title}</h3>
            <p className="text-gray-700 text-base leading-relaxed">
              {services[activeIndex].description}
            </p>
          </div>
        </div>

        {/* Right Section with List */}
        <div className="lg:w-1/3">
          <div className="sticky top-24">
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleButtonClick(index)}
                    className={`group w-full rounded-lg px-6 py-4 text-left text-sm font-medium shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 ${
                      activeIndex === index
                        ? "bg-[#60AD02] text-white"
                        : "bg-gray-50 text-gray-900 hover:bg-gray-100"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="line-clamp-2">{service.title}</span>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
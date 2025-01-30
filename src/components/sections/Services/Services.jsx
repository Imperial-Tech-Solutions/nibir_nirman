import React from "react";
import { HardHat, FileText, Truck, Wrench, Building, Ruler, Layers, Hammer } from "lucide-react";
import backgroundPattern from "../../../assets/background-image.png";

const servicesData = [
  { title: "CIVIL CONSTRUCTION", icon: <Building size={40} className="text-blue-600" /> },
  { title: "ELECTRO MECHANICAL ENGINEERING DESIGN", icon: <Wrench size={40} className="text-blue-600" /> },
  { title: "PROJECT MANAGEMENT & PROPERTY DEVELOPMENT", icon: <FileText size={40} className="text-blue-600" /> },
  { title: "HIRING OF MACHINERY & HEAVY VEHICLES", icon: <Truck size={40} className="text-blue-600" /> },
  { title: "TURNKEY CONTRACTS", icon: <HardHat size={40} className="text-blue-600" /> },
  { title: "DESIGN & BUILD CONTRACTS", icon: <Ruler size={40} className="text-blue-600" /> },
  { title: "PILING SERVICES", icon: <Layers size={40} className="text-blue-600" /> },
  { title: "STRUCTURAL ENGINEERING DESIGNS", icon: <Hammer size={40} className="text-blue-600" /> },
];

const Services = () => {
  return (
    <section
      className="py-12 bg-gray-100"
      style={{ backgroundImage: `url(${backgroundPattern})`, backgroundSize: "cover" }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">OUR SERVICES</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
          {servicesData.map((service, index) => (
            <div key={index} className="bg-white p-6 h-48 rounded-lg shadow-lg flex flex-col items-center justify-center">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-center">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

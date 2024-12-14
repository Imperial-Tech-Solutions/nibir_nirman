import React from "react";

const About = () => {
  return (
    <div>
      <section className="bg-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Know our Leaders</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base">
            As a Web Development Services We are Committed to Building Custom
            Web Solutions that Drive Business Success.
          </p>
        </div>
        <div className="mt-12 space-y-16 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <img
                src="/api/placeholder/400/300"
                alt="Our Mission"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Empowering Financial Independence
              </h3>
              <p className="text-gray-600 text-base">
                At Financial Freedom Advisors, our mission is clear: to empower
                individuals and families to achieve financial independence. We
                are dedicated to providing personalized guidance and
                comprehensive solutions that align with our clients' unique
                goals and aspirations.
              </p>
              <a
                href="#"
                className="text-blue-500 text-base font-medium hover:underline"
              >
                Read More
              </a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="w-full md:w-1/2">
              <img
                src="/api/placeholder/400/300"
                alt="Our Values"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Guiding Principles
              </h3>
              <p className="text-gray-600 text-base">
                Our values serve as the guiding principles that underpin
                everything we do at Financial Freedom Advisors:
              </p>
              <ul className="text-gray-600 text-base list-disc pl-6 space-y-2">
                <li>
                  <strong>Integrity:</strong> We uphold the highest standards of
                  honesty and ethical conduct.
                </li>
                <li>
                  <strong>Client-Centric:</strong> Our clients' needs and goals
                  are our top priority.
                </li>
              </ul>
              <a
                href="#"
                className="text-blue-500 text-base font-medium hover:underline"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

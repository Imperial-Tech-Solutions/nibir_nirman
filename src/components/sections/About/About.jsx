import React from "react";
import director from "../../../assets/managing_director.png";
import chairman from "../../../assets/chairman.png";

const About = () => {
  return (
    <div>
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 font-ibm-plex-serif">
            Know our Leaders
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg font-roboto-serif leading-relaxed">
            As a Construction Services, We are Committed to Building Your Vision.
          </p>
        </div>
        <div className="mt-16 space-y-20 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <img
                src={chairman}
                alt="Our Mission"
                className="rounded-lg shadow-xl w-full object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 font-ibm-plex-serif">
                Chairman
              </h3>
              <p className="text-gray-700 text-lg font-roboto-serif leading-relaxed">
                Engr. Monotosh Kumar Roy, the Chairman of Nibir Nirman, is a
                seasoned civil engineer with a remarkable career spanning
                decades. His vast expertise and leadership have been
                instrumental in shaping the company's vision and strategic
                direction. As a Fellow of the Institution of Engineers,
                Bangladesh (IEB), he upholds the highest standards of
                professionalism, ensuring that Nibir Nirman consistently
                delivers excellence in every project. His dedication to
                fostering innovation and maintaining client trust has been a
                cornerstone of the company's enduring success.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="w-full md:w-1/2">
              <img
                src={director}
                alt="Our Values"
                className="rounded-lg shadow-xl w-full object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 font-ibm-plex-serif">
                Managing Director
              </h3>
              <p className="text-gray-700 text-lg font-roboto-serif leading-relaxed">
                Engr. Kartick Chandra Nath, the Managing Director of Nibir
                Nirman, is a visionary leader with a proven track record of
                driving exceptional project execution. With a Bachelor's degree
                in Civil Engineering from BUET and extensive experience in the
                construction industry, he combines technical expertise with
                innovative thinking to meet the evolving needs of clients. His
                hands-on approach and commitment to quality have positioned
                Nibir Nirman as a trusted name in the construction sector,
                delivering projects that consistently exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
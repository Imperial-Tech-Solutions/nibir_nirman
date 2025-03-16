import React, { useState, useEffect } from "react";
import director from "../../../assets/managing_director.png";
import chairman from "../../../assets/chairman.png";
import nav_picture from "../../../assets/nav_picture.png";
import about1 from "../../../assets/about1.jpg";
import about2 from "../../../assets/about2.jpg";

const About = () => {
  const [selectedLeader, setSelectedLeader] = useState(null);

  // Add effect to prevent body scroll when modal is open
  useEffect(() => {
    if (selectedLeader) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedLeader]);

  const leaders = [
    {
      name: "Chairman",
      image: chairman,
      description:
        "Engr. Monotosh Kumar Roy, the Chairman of Nibir Nirman, is a seasoned civil engineer with a remarkable career spanning decades. His vast expertise and leadership have been instrumental in shaping the company's vision and strategic direction. As a Fellow of the Institution of Engineers, Bangladesh (IEB), he upholds the highest standards of professionalism, ensuring that Nibir Nirman consistently delivers excellence in every project.",
    },
    {
      name: "Managing Director",
      image: director,
      description:
        "Engr. Kartick Chandra Nath, the Managing Director of Nibir Nirman, is a visionary leader with a proven track record of driving exceptional project execution. With a Bachelor's degree in Civil Engineering from BUET and extensive experience in the construction industry, he combines technical expertise with innovative thinking to meet the evolving needs of clients. His hands-on approach and commitment to quality have positioned Nibir Nirman as a trusted name in the construction sector, delivering projects that consistently exceed expectations.",
    },
  ];

  const handleModalOpen = (leader) => {
    setSelectedLeader(leader);
  };

  return (
    <div>
      {/* Hero Section for About Nibir Nirman */}
      <section
        className="relative bg-cover bg-center h-80"
        style={{ backgroundImage: `url(${nav_picture})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex items-end h-full pb-8">
          <h1 className="text-white text-5xl font-bold ml-6">
            About Nibir Nirman
          </h1>
        </div>
      </section>

      {/* Company Information Section */}
      <section className="bg-gray-50 py-20 px-6">
        {/* ... rest of the company info section remains the same ... */}
      </section>

      {/* Know Our Leaders Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 font-ibm-plex-serif">
            Know our Leaders
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg font-roboto-serif leading-relaxed">
            As a Construction Services provider, we are committed to building your vision with leadership that inspires excellence.
          </p>
        </div>
        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
          {leaders.map((leader, index) => (
            <div key={index} className="w-full md:w-1/2 text-center">
              <img
                src={leader.image}
                alt={leader.name}
                className="rounded-lg shadow-xl w-full object-cover cursor-pointer"
                onClick={() => handleModalOpen(leader)}
              />
              <h3 className="mt-4 text-2xl font-semibold text-gray-900 font-ibm-plex-serif">
                {leader.name}
              </h3>
            </div>
          ))}
        </div>

        {selectedLeader && (
          <div
            className="fixed inset-0 z-50 overflow-y-auto"
            style={{
              top: window.scrollY,
              height: '100vh'
            }}
            onClick={() => setSelectedLeader(null)}
          >
            <div className="flex items-center justify-center min-h-full p-4">
              <div
                className="bg-white rounded-lg shadow-xl relative w-[90%] max-w-lg"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6">
                  <button
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
                    onClick={() => setSelectedLeader(null)}
                  >
                    &#x2715;
                  </button>
                  <img
                    src={selectedLeader.image}
                    alt={selectedLeader.name}
                    className="rounded-lg shadow-xl w-full object-cover mb-4"
                  />
                  <h3 className="text-2xl font-semibold text-gray-900 font-ibm-plex-serif">
                    {selectedLeader.name}
                  </h3>
                  <p className="text-gray-700 text-lg font-roboto-serif leading-relaxed mt-4">
                    {selectedLeader.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default About;
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import director from "../../../assets/managing_director.png";
import chairman from "../../../assets/chairman.png";
import nav_picture from "../../../assets/nav_picture.png";
import about1 from "../../../assets/about1.jpg";
import about2 from "../../../assets/about2.jpg";

const About = () => {
  const [selectedLeader, setSelectedLeader] = useState(null);

  useEffect(() => {
    if (!selectedLeader) {
      return undefined;
    }

    const originalOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedLeader(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
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
        <div className="max-w-5xl mx-auto">
          <header className="mb-12">
            <h2 className="text-5xl font-extrabold text-gray-800 border-b-4 border-[#15803D] inline-block pb-2">
              Our Story
            </h2>
          </header>
          <div className="space-y-16">
            {/* Row 1: Left-aligned text with image on right */}
            <div className="md:flex md:items-center md:justify-between">
              <div className="md:w-1/2">
                <p className="text-gray-700 text-lg leading-relaxed text-left">
                  <span className="font-semibold text-gray-800">Nibir Nirman</span> is a leading construction firm in Bangladesh with a strong track record of successful projects. Established in 1997 by a group of experienced professionals in engineering and related fields, the company has been actively engaged in civil and building construction both locally and internationally for over eighteen years.
                </p>
                <p className="mt-4 text-gray-700 text-lg leading-relaxed text-left">
                  The firm was founded to meet the growing demand for quality construction, particularly in collaboration with foreign investors, especially within the Export Processing Zones.
                </p>
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0 md:pl-8">
                <img
                  src={about1}
                  alt="Construction Project"
                  loading="lazy"
                  decoding="async"
                  className="w-full object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
            {/* Row 2: Image on left with right-aligned text */}
            <div className="md:flex md:items-center md:justify-between">
              <div className="md:w-1/2 md:pr-8">
                <img
                  src={about2}
                  alt="Construction Site"
                  loading="lazy"
                  decoding="async"
                  className="w-full object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0">
                <p className="text-gray-700 text-lg leading-relaxed text-right">
                  Nibir Nirman specializes in turnkey projects across multiple sectors, including Architectural Design, Civil Engineering, Telecommunication, Physical Planning, Irrigation, and Industrial Engineering. Over the years, the company has rapidly expanded, taking on diverse construction projects and building a strong capacity to handle large-scale developments. With a solid stock of machinery, equipment, and resources, Nibir Nirman is fully equipped to execute complex projects efficiently.
                </p>
                <p className="mt-4 text-gray-700 text-lg leading-relaxed text-right">
                  Dedicated to excellence, the company is committed to contributing to urban and infrastructure development through its expertise in civil and building construction. Its proven track record reflects a consistent ability to deliver projects that meet and exceed client expectations.
                </p>
              </div>
            </div>
            {/* Optional Full-Width Row for any remaining paragraph */}
            <div>
              <p className="text-gray-700 text-lg leading-relaxed">
                In addition to its in-house capabilities, Nibir Nirman collaborates with specialized firms and industry experts, forming strategic partnerships to ensure high-quality execution in specific projects. This approach allows the company to provide comprehensive and innovative solutions tailored to each project's unique requirements.
              </p>
            </div>
          </div>
        </div>
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
                loading="lazy"
                decoding="async"
                className="rounded-lg shadow-xl w-full object-cover cursor-pointer"
                onClick={() => setSelectedLeader(leader)}
              />
              <h3 className="mt-4 text-2xl font-semibold text-gray-900 font-ibm-plex-serif">
                {leader.name}
              </h3>
            </div>
          ))}
        </div>

        {selectedLeader &&
          typeof document !== "undefined" &&
          createPortal(
            <div
              className="fixed inset-0 z-[70] overflow-y-auto bg-black/60 px-4 py-24 sm:px-6 sm:py-10"
              onClick={() => setSelectedLeader(null)}
            >
              <div className="flex min-h-full items-start justify-center sm:items-center">
                <div
                  className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl"
                  onClick={(event) => event.stopPropagation()}
                >
                  <button
                    type="button"
                    className="absolute right-4 top-4 z-10 rounded-full bg-white/90 px-3 py-1 text-2xl text-gray-600 shadow-sm transition hover:text-gray-900"
                    onClick={() => setSelectedLeader(null)}
                    aria-label={`Close ${selectedLeader.name} details`}
                  >
                    &#x2715;
                  </button>

                  <div className="grid md:grid-cols-[minmax(0,320px)_1fr]">
                    <div className="bg-gray-100">
                      <img
                        src={selectedLeader.image}
                        alt={selectedLeader.name}
                        decoding="async"
                        className="h-72 w-full object-cover md:h-full"
                      />
                    </div>

                    <div className="max-h-[calc(100vh-8rem)] overflow-y-auto p-6 sm:p-8">
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#15803D]">
                        Leadership Profile
                      </p>
                      <h3 className="mt-3 text-3xl font-semibold text-gray-900 font-ibm-plex-serif">
                        {selectedLeader.name}
                      </h3>
                      <p className="mt-5 text-lg leading-relaxed text-gray-700 font-roboto-serif">
                        {selectedLeader.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>,
            document.body
          )}



      </section>
    </div>
  );
};

export default About;

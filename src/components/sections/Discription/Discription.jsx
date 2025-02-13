import React from 'react';
import backgroundPattern from '../../../assets/background-image.png'


const Discription = () => {
  return (
    <section className="nibir-services relative w-full overflow-hidden bg-white">
      {/* Hero Section */}
      <div className="relative">
        {/* Background pattern container - now limited to left half */}
        <div className="absolute top-0 left-0 w-1/2 h-full bg-[#F8FAFC]">
          <img 
            src={backgroundPattern} 
            className="w-full h-full object-cover opacity-20 mix-blend-multiply filter brightness-150" 
            alt="background pattern" 
          />
        </div>

        <div className="container mx-auto px-4 pt-16 pb-24 relative">
          <h2 className="text-4xl md:text-6xl lg:text-7xl mb-16 text-center">
            <span className="text-black font-bold">About</span>{' '}
            <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-gray-500 to-[#60AD02]">Nibir Nirman</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative z-10">
            <video 
  src="https://github.com/Imperial-Tech-Solutions/nibir_nirman/releases/download/videos/output.mp4"
  className="w-full rounded-lg shadow-xl" 
  autoPlay 
  loop 
  muted
/>

            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-[#4A5568] mb-4">
                  27 Years of Experience Building Bangladesh
                </h3>
                <p className="text-[#718096] mb-4">
                  Nibir Nirman has been providing construction services to a long list of new and repeat clients since 1998. 
                  We have been delivering exceptional construction services across residential, commercial, and industrial sectors.
                </p>
                <button
            onClick={() => (window.location.href = "/projects")}
            className="bg-green-600 hover:bg-green-700 text-white text-lg font-bold py-4 px-12 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            View All Projects
          </button>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#4A5568] mb-4">
                  Tradition of Trust
                </h3>
                <p className="text-[#718096] mb-6">
                  Through dedication, collaboration, customer satisfaction, and value creation, 
                  Nibir Nirman has become a premier Bangladeshi builder driven by passion and 
                  fueled by a team of committed professionals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discription;
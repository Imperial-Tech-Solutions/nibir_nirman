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
            <span className="text-black font-bold">Safety. Reliability.</span>{' '}
            <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-gray-500 to-[#60AD02]">Sustainability.</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1626385785701-a0d3b879de2c?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Construction site"
                className="w-full rounded-lg shadow-xl"
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
                <a href="/projects" className="text-[#60AD02] hover:text-[#4C8A02] underline">
                  View our memorable projects →
                </a>
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
                <button className="bg-[#60AD02] text-white px-6 py-3 rounded-lg hover:bg-[#4C8A02] transition-colors">
                  Client experience →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discription;
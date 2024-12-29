import React from "react";
import { Building2, CheckCircle, DollarSign, Users } from "lucide-react";

const Stats = () => {
  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Trusted by Industry Leaders
          </h2>

          <p className="mt-4 text-gray-500 sm:text-xl">
            With over 27 years of experience, Nibir Nirman has been delivering
            exceptional construction services across residential, commercial,
            and industrial sectors. Our commitment to quality, innovation, and
            reliability has earned the trust of top clients in Bangladesh and
            beyond.
          </p>
        </div>

        <dl className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center transform transition duration-300 hover:scale-105">
            <div className="mx-auto mb-4">
              <Building2 size={40} className="text-[#60AD02]" />
            </div>
            
            <dd className="text-4xl font-extrabold text-[#60AD02] md:text-5xl">
              27+
            </dd>

            <dt className="order-last text-lg font-medium text-gray-500 mt-2">
              Years in Business
            </dt>
          </div>

          <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center transform transition duration-300 hover:scale-105">
            <div className="mx-auto mb-4">
              <CheckCircle size={40} className="text-[#60AD02]" />
            </div>

            <dd className="text-4xl font-extrabold text-[#60AD02] md:text-5xl">
              55+
            </dd>

            <dt className="order-last text-lg font-medium text-gray-500 mt-2">
              Completed Projects
            </dt>
          </div>

          <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center transform transition duration-300 hover:scale-105">
            <div className="mx-auto mb-4">
              <DollarSign size={40} className="text-[#60AD02]" />
            </div>

            <dd className="text-4xl font-extrabold text-[#60AD02] md:text-5xl">
              $4.6M+
            </dd>

            <dt className="order-last text-lg font-medium text-gray-500 mt-2">
              High-Value Project
            </dt>
          </div>

          <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center transform transition duration-300 hover:scale-105">
            <div className="mx-auto mb-4">
              <Users size={40} className="text-[#60AD02]" />
            </div>

            <dd className="text-4xl font-extrabold text-[#60AD02] md:text-5xl">
              1,100+
            </dd>

            <dt className="order-last text-lg font-medium text-gray-500 mt-2">
              Skilled Workers
            </dt>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default Stats;
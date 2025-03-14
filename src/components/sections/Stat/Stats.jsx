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
            and industrial sectors.
          </p>
        </div>

        <dl className="mt-8 grid grid-cols-1 gap-6 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col rounded-lg bg-blue-50 px-6 py-4 text-center transform transition duration-300 hover:scale-105">
            <div className="flex items-center justify-center gap-4">
              <Building2 size={32} className="text-[#60AD02]" />
              <dd className="text-4xl font-extrabold text-[#60AD02]">27+</dd>
            </div>
            <dt className="text-lg font-medium text-gray-500 mt-1">
              Years in Business
            </dt>
          </div>

          <div className="flex flex-col rounded-lg bg-blue-50 px-6 py-4 text-center transform transition duration-300 hover:scale-105">
            <div className="flex items-center justify-center gap-4">
              <CheckCircle size={32} className="text-[#60AD02]" />
              <dd className="text-4xl font-extrabold text-[#60AD02]">55+</dd>
            </div>
            <dt className="text-lg font-medium text-gray-500 mt-1">
              Completed Projects
            </dt>
          </div>

          <div className="flex flex-col rounded-lg bg-blue-50 px-6 py-4 text-center transform transition duration-300 hover:scale-105">
            <div className="flex items-center justify-center gap-4">
              <DollarSign size={32} className="text-[#60AD02]" />
              <dd className="text-4xl font-extrabold text-[#60AD02]">100</dd>
            </div>
            <dt className="text-lg font-medium text-gray-500 mt-1">
              Companies We Worked With
            </dt>
          </div>

          <div className="flex flex-col rounded-lg bg-blue-50 px-6 py-4 text-center transform transition duration-300 hover:scale-105">
            <div className="flex items-center justify-center gap-4">
              <Users size={32} className="text-[#60AD02]" />
              <dd className="text-4xl font-extrabold text-[#60AD02]">1,100+</dd>
            </div>
            <dt className="text-lg font-medium text-gray-500 mt-1">
              Skilled Workers
            </dt>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default Stats;
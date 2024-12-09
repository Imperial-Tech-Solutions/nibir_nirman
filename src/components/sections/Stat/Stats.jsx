import React from "react";

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
          <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
            <dt className="order-last text-lg font-medium text-gray-500">
              Years in Business
            </dt>

            <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
              27+
            </dd>
          </div>

          <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
            <dt className="order-last text-lg font-medium text-gray-500">
              Completed Projects
            </dt>

            <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
              55+
            </dd>
          </div>

          <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
            <dt className="order-last text-lg font-medium text-gray-500">
              High-Value Project
            </dt>

            <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
              $4.6M+
            </dd>
          </div>

          <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
            <dt className="order-last text-lg font-medium text-gray-500">
              Skilled Workers
            </dt>

            <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
              1,100+
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default Stats;

import React from "react";
import { motion } from "motion/react";

const ProjectCard = ({ 
  imageUrl, 
  title, // Client Name
  description, // Project Name
  contractValue,
  commencement,
  completion,
  onReadMore 
}) => {
  return (
    <motion.div
      className="group flex flex-col h-80 w-full bg-white rounded-xl shadow-lg overflow-hidden hover:h-auto transition-all duration-500"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 200, damping: 25, duration: 0.6 }}
    >
      {/* Image Section with Zoom Effect */}
      <motion.div
        className="relative mx-4 mt-4 overflow-hidden text-white rounded-xl bg-blue-gray-500 shadow-lg shadow-blue-gray-500/40"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={imageUrl || "/api/placeholder/400/320"}
          alt={title}
          className="w-full h-40 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
      </motion.div>

      {/* Text and Description */}
      <div className="flex flex-col flex-grow p-6">
        <div className="flex-grow">
          <h5 className="text-center font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900 mb-3">
            {title}
          </h5>
          {/* Description and Details only visible on hover */}
          <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500 ease-in-out">
            <div className="space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <p className="block font-sans text-base antialiased font-medium leading-relaxed text-gray-800">
                {description}
              </p>
              <div className="space-y-1 text-sm text-gray-600">
                <p>Contract Value: {contractValue}</p>
                <div className="flex justify-between text-xs">
                  <span>Start: {commencement}</span>
                  <span>End: {completion}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Button only visible on hover */}
        <motion.div
          className="hidden group-hover:block"
        >
          <div className="pt-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
            <button
              onClick={onReadMore}
              className="block w-full select-none rounded-lg bg-gray-900 py-3 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Read More
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
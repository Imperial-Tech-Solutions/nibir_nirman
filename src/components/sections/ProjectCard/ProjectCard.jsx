import React from "react";
import { motion } from "motion/react";

const ProjectCard = ({
  imageUrl,
  title,
  description,
  onReadMore
}) => {
  return (
    <>
      <motion.div
      className="flex flex-col h-full w-full bg-white rounded-xl shadow-lg overflow-hidden"
      whileHover={{ scale: 1.05 }} // Enlarge the card on hover
      whileTap={{ scale: 0.98 }} // Shrink slightly on tap
      transition={{ type: "spring", stiffness: 300, damping: 20 }} // Smooth spring effect
    >
      {/* Image Section with Zoom Effect */}
      <motion.div
        className="relative mx-4 mt-4 overflow-hidden text-white rounded-xl bg-blue-gray-500 shadow-lg shadow-blue-gray-500/40"
        whileHover={{ scale: 1.1 }} // Slight zoom on hover
        transition={{ duration: 0.4 }}
      >
        <img
          src={imageUrl || "/api/placeholder/400/320"}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
      </motion.div>

      {/* Text and Description */}
      <div className="flex flex-col flex-grow p-6">
        <div className="flex-grow">
          <h5 className="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900 mb-3">
            {title}
          </h5>
          <p className="block font-sans text-base antialiased font-light leading-relaxed text-gray-700">
            {description}
          </p>
        </div>

        {/* Button with Hover and Tap Animations */}
        <motion.div
          className="pt-6"
          whileHover={{ scale: 1.1 }} // Slightly enlarge the button
          whileTap={{ scale: 0.95 }} // Shrink slightly on tap
          transition={{ duration: 0.2 }}
        >
          <button
            onClick={onReadMore}
            className="block w-full select-none rounded-lg bg-gray-900 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Read More
          </button>
        </motion.div>
      </div>
    </motion.div>
    </>
  );
};

export default ProjectCard;
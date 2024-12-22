import React from "react";

const ProjectCard = ({ 
  imageUrl, 
  title, 
  description, 
  onReadMore 
}) => {
  return (
    <div className="flex flex-col h-full w-full bg-white rounded-xl shadow-lg">
      <div className="relative mx-4 mt-4 overflow-hidden text-white rounded-xl bg-blue-gray-500 shadow-lg shadow-blue-gray-500/40">
        <img
          src={imageUrl || "/api/placeholder/400/320"}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-black/60">
        </div>
      </div>
      <div className="flex flex-col flex-grow p-6">
        <div className="flex-grow">
          <h5 className="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900 mb-3">
            {title}
          </h5>
          <p className="block font-sans text-base antialiased font-light leading-relaxed text-gray-700">
            {description}
          </p>
        </div>
        <div className="pt-6">
          <button
            onClick={onReadMore}
            className="block w-full select-none rounded-lg bg-gray-900 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
import React from "react";
import { useParams } from "react-router-dom";

const ProjectCard = () => {
  const { id, title, description } = useParams(); // Extract parameters from the URL

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-2xl font-bold text-gray-900">Project ID: {id}</h2>
      <h3 className="text-xl font-semibold text-gray-700">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ProjectCard;

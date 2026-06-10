import React from "react";
import { useNavigate } from "react-router-dom";
import ProjectCard from "../ProjectCard/ProjectCard";
import data from "../../../assets/JsonFiles/output.json";
import { getProjectMedia } from "../../../utils/projectMediaAssets";
import {
  getFeaturedProjects,
  getProjectCardDetails,
} from "../../../utils/featuredProjects";

const ProjectGrid = () => {
  const navigate = useNavigate();
  const featuredProjects = getFeaturedProjects(data);

  return (
    <div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
          {featuredProjects.map((project) => (
            <div key={project["Sl. No."]} className="flex">
              <ProjectCard
                projectId={project["Sl. No."]}
                imageUrl={getProjectMedia(project).cover}
                title={project.homepageTitle}
                description={project["Project Name"]}
                {...getProjectCardDetails(project)}
              />
            </div>
          ))}
        </div>

        {/* Centered container for the button */}
        <div className="flex justify-center w-full py-12">
          <button
            onClick={() => navigate("/projects")}
            className="bg-green-600 hover:bg-green-700 text-white text-lg font-bold py-4 px-12 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            View All Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectGrid;

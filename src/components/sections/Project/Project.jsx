import React, { useState, useEffect } from 'react';
import ProjectCard from "../ProjectCard/ProjectCard";
import data from "../../../assets/JsonFiles/output.json";
import photo from "../../../assets/toUse-optimized.jpg";
import { getProjectMedia } from "../../../utils/projectMediaAssets";
import { getProjectCardDetails } from "../../../utils/featuredProjects";

const Projects = () => {
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setFilteredProjects(data);
    const uniqueCategories = [...new Set(data.map((project) => project.Category))];
    setCategories(uniqueCategories);
  }, []);

  const filterProjects = (category) => {
    setSelectedCategory(category);
    if (category === 'all') {
      setFilteredProjects(data);
    } else {
      const filtered = data.filter(project => project.Category === category);
      setFilteredProjects(filtered);
    }
  };

  return (
    <>
      <section 
        className="relative flex min-h-[100svh] items-center justify-center bg-cover bg-center px-4 pb-24 pt-20 text-center text-white"
        style={{ backgroundImage: `url(${photo})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10">
          <p className="text-lg uppercase tracking-wide">View all of our</p>
          <h1 className="text-5xl font-bold sm:text-6xl">Projects</h1>
        </div>
        
        {/* Category Filter Buttons */}
        <section
          aria-label="Project categories"
          className="absolute bottom-4 left-1/2 flex w-[calc(100%-2rem)] max-w-4xl -translate-x-1/2 flex-nowrap justify-start gap-2 overflow-x-auto rounded-lg bg-white/90 p-2 text-gray-900 shadow-md sm:bottom-5 sm:flex-wrap sm:justify-around sm:p-5"
        >
          <button 
            onClick={() => filterProjects('all')}
            className={`shrink-0 whitespace-nowrap rounded-lg px-4 py-2 transition-colors sm:m-2 ${
              selectedCategory === 'all' ? 'bg-gray-900 text-white' : 'hover:bg-gray-200'
            }`}
          >
            All Projects
          </button>
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => filterProjects(category)}
              className={`shrink-0 whitespace-nowrap rounded-lg px-4 py-2 transition-colors sm:m-2 ${
                selectedCategory === category ? 'bg-gray-900 text-white' : 'hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </section>
      </section>

      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto py-16 sm:py-24 lg:py-32">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
              {selectedCategory === 'all' ? 'ALL PROJECTS' : selectedCategory.toUpperCase()}
            </h2>
            
            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project["Sl. No."]}
                  projectId={project["Sl. No."]}
                  imageUrl={getProjectMedia(project).cover}
                  title={project.Client}
                  description={project["Project Name"]}
                  {...getProjectCardDetails(project)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;

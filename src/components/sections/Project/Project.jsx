import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import ProjectCard from "../ProjectCard/ProjectCard";
import data from "../../../assets/JsonFiles/output.json";

const Projects = () => {
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setFilteredProjects(data);
    const uniqueCategories = _.uniq(data.map(project => project.Category));
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

  const handleReadMore = (project) => {
    console.log('Read more about:', project["Project Name"]);
  };

  return (
    <>
      <section className="relative h-screen bg-cover bg-center flex justify-center items-center text-white text-center bg-gray-900">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10">
          <p className="text-lg uppercase tracking-wide">View all of our</p>
          <h1 className="text-6xl font-bold">Projects</h1>
        </div>
        
        {/* Category Filter Buttons */}
        <section className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-90 flex flex-wrap justify-around p-5 rounded-lg shadow-md text-gray-900 max-w-4xl">
          <button 
            onClick={() => filterProjects('all')}
            className={`px-4 py-2 m-2 rounded-lg transition-colors ${
              selectedCategory === 'all' ? 'bg-gray-900 text-white' : 'hover:bg-gray-200'
            }`}
          >
            All Projects
          </button>
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => filterProjects(category)}
              className={`px-4 py-2 m-2 rounded-lg transition-colors ${
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
                  imageUrl="/api/placeholder/400/320"
                  title={project.Client}
                  description={project["Project Name"]}
                  onReadMore={() => handleReadMore(project)}
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
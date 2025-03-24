import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProjectCard = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch(`/data/projects/${id}.json`)
      .then((response) => response.json())
      .then((data) => setProject(data))
      .catch((error) => console.error("Error fetching project data:", error));
  }, [id]);

  if (!project) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div className="font-sans">
      {/* Header */}
      <header className="bg-blue-900 text-white p-4 text-center font-bold text-lg">
        {project.title}
      </header>
      
      {/* Main Content */}
      <main className="max-w-6xl mx-auto p-4">
        <section>
          <img
            src={project.mainImage}
            alt="Construction Work"
            className="w-full rounded-lg"
          />
        </section>
        
        <section className="mt-6">
          <h2 className="text-xl font-bold">About Project</h2>
          <p className="text-gray-700 mt-2">{project.description}</p>
        </section>
        
        <section className="mt-6">
          <h3 className="text-lg font-semibold">Project Details</h3>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Water Treatment Plant Capacity: {project.capacity}</li>
            <li>Raw Water Pipe: {project.pipeSize}</li>
            <li>Route Length: {project.routeLength}</li>
            <li>Scope: {project.scope.join(", ")}</li>
            <li>Project Cost: {project.cost}</li>
          </ul>
        </section>
        
        {/* Gallery */}
        <section className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {project.gallery.map((image, index) => (
            <img key={index} src={image} alt="Project Image" className="rounded-lg" />
          ))}
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center p-4 mt-6">
        &copy; 2025 AMDD Tech Serve Limited
      </footer>
    </div>
  );
};

export default ProjectCard;

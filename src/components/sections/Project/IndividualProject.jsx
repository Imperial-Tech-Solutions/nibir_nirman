import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const IndividualProject = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/output.json")  // Fetching from 'public' folder
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch JSON file");
        }
        return response.json();
      })
      .then((data) => {
        const foundProject = data.find((p) => String(p["Sl. No."]) === String(id));
        if (foundProject) {
          setProject(foundProject);
        } else {
          setError("Project not found.");
        }
      })
      .catch((error) => {
        console.error("Error fetching project data:", error);
        setError("Failed to load project data.");
      });
  }, [id]);

  if (error) {
    return <div className="text-center text-red-600 mt-10">{error}</div>;
  }

  if (!project) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div className="font-sans">

      <main className="max-w-6xl mx-auto p-20 space-y-6">
        <section className="mt-6">
          <h2 className="text-xl font-bold">Project Details</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li><strong>Client:</strong> {project.Client}</li>
            <li><strong>Commencement:</strong> {project.Commencement}</li>
            <li><strong>Completion:</strong> {project.Completion}</li>
            <li><strong>Category:</strong> {project.Category}</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default IndividualProject;

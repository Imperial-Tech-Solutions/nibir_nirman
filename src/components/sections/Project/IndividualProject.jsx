import React from "react";
import { useParams } from "react-router-dom";
import projectsData from "../../../assets/JsonFiles/output.json";
import { getProjectMedia } from "../../../utils/projectMediaAssets";

const IndividualProject = () => {
  const { id } = useParams();
  const project = projectsData.find((item) => String(item["Sl. No."]) === String(id));

  if (!project) {
    return <div className="text-center text-red-600 mt-10">Project not found.</div>;
  }

  const projectMedia = getProjectMedia(project);

  return (
    <div className="bg-gray-100 font-sans">
      <main className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
          <img
            src={projectMedia.cover}
            alt={project.Client}
            className="h-[320px] w-full object-cover sm:h-[420px]"
          />

          <div className="grid gap-10 p-8 lg:grid-cols-[1.4fr_1fr] lg:p-12">
            <section>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#15803D]">
                Project Overview
              </p>
              <h1 className="mt-3 text-3xl font-bold text-gray-900">
                {project.Client}
              </h1>
              <p className="mt-5 whitespace-pre-line text-lg leading-relaxed text-gray-700">
                {project["Project Name"]}
              </p>
            </section>

            <aside className="rounded-2xl bg-gray-50 p-6">
              <h2 className="text-xl font-bold text-gray-900">Project Details</h2>
              <ul className="mt-4 space-y-3 text-gray-700">
                <li><strong>Client:</strong> {project.Client}</li>
                <li><strong>Commencement:</strong> {project.Commencement}</li>
                <li><strong>Completion:</strong> {project.Completion}</li>
                <li><strong>Category:</strong> {project.Category}</li>
                {project["Contract Value"] && (
                  <li><strong>Contract Value:</strong> {project["Contract Value"]}</li>
                )}
              </ul>
            </aside>
          </div>

          {projectMedia.gallery.length > 1 && (
            <section className="border-t border-gray-100 px-8 pb-8 pt-2 lg:px-12 lg:pb-12">
              <h2 className="text-xl font-bold text-gray-900">Project Gallery</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {projectMedia.gallery.map((imageUrl, index) => (
                  <img
                    key={`${project["Sl. No."]}-${index}`}
                    src={imageUrl}
                    alt={`${project.Client} view ${index + 1}`}
                    className="h-52 w-full rounded-2xl object-cover shadow-md"
                  />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  );
};

export default IndividualProject;

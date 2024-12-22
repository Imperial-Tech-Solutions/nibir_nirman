import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";

// You could also move this data to a separate data.js file if you prefer
const projectsData = [
  {
    imageUrl: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9",
    title: "EXSACO LTD",
    description:
      "Construction, of 5 Storied Main Factory Building for EXSACO LIMITED. Total constructed area 501,601 sft including pavement, drain, Boundary all complete work",
    onReadMore: () => alert("Read more about Wooden House"),
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8SW5kdXN0cnklMjBidWlsZGluZ3xlbnwwfDB8MHx8fDA%3D",
    title: "SROOTY TEXTILE LTD",
    description:
      "Construction of Two storied Factory Building with Mez.floor for SOORTY textile (BD) Ltd. at Comilla EPZ. Factory Building with steel structure erection work, all civil and finishing work, etp, Utility buildings covering area 3,75,000 sft",
    onReadMore: () => alert("Read more about Modern Apartment"),
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "PAXAR BANGLADESH LTD",
    description:
      "Construction, of 4 Storied Factory Building for PAXAR Bangladesh Ltd. At Dhaka EPZ.(Civil Work), Architectural Work",
    onReadMore: () => alert("Read more about Beach Villa"),
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1455472467710-3b204ed59394?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "HYUNDAI ENGINEERING & CONSTRUCTION CO",
    description:
      "Construction of Temporary Accommodation & Cement Facilities Works in Matarbari Ultra Super Critical Coal-Fired Power Plant Project in Matarbari",
    onReadMore: () => alert("Read more about Beach Villa"),
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1494818889428-42c443ab9f69?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "JURONG ENGINEERING LTD",
    description:
      "Design, Supply and Site Installation of Local Staff and Worker Camp for JEL at Matarbari 2 x 600 MW ultrasuper Critical Power Plant",
    onReadMore: () => alert("Read more about Beach Villa"),
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1730030200615-e10511de2c7e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "TOWA Corporation",
    description:
      "Construction of 3-storied R.C.C factory Building with Mez. Floor for TOWA Personal Protective Device (BD). Ltd. At Ishwardi EPZ, Paksey Pabna. Total constructed area 1,50,000sqm. Of main factory build and others utility building",
    onReadMore: () => alert("Read more about Beach Villa"),
  },
];

const ProjectGrid = () => {
  return (
    <div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
          {projectsData.map((project, index) => (
            <div key={index} className="flex">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        {/* Centered container for the button */}
        <div className="flex justify-center w-full py-12">
          <button
            onClick={() => (window.location.href = "/projects")}
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

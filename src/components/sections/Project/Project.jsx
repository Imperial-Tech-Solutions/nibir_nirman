import React from "react";
import exsaco_display from "../../../assets/Projects/exsaco/BuildingView.png";
import soorty_display from "../../../assets/Projects/soorty/display.jpg";
import paxar_display from "../../../assets/Projects/paxar/Building View 1.jpg";
import towa_display from "../../../assets/Projects/towa/display.png";


const callouts = [
  {
    name: 'EXSACO LTD.',
    description: 'Construction, of 5 Storied Main Factory Building for EXSACO LIMITED. Total constructed area 501,601 sft including pavement, drain, Boundary all complete work',
    imageSrc: exsaco_display,
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    name: 'SROOTY TEXTILE LTD.',
    description: 'Construction of Two storied Factory Building with Mez.floor for SOORTY textile (BD) Ltd. at Comilla EPZ. Factory Building with steel structure erection work, all civil and finishing work, etp, Utility buildings covering area 3,75,000 sft',
    imageSrc: soorty_display,
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'PAXAR BANGLADESH LTD.',
    description: 'Construction, of 4 Storied Factory Building for PAXAR Bangladesh Ltd. At Dhaka EPZ.(Civil Work), Architectural Work',
    imageSrc: paxar_display,
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
  {
    name: 'HYUNDAI ENGINEERING & CONSTRUCTION CO., LTD. 140,2,KYE- DONG,CHONGR O-KU SEOUL,KOREA',
    description: 'Construction of Temporary Accommodation & Cement Facilities Works in Matarbari Ultra Super Critical Coal-Fired Power Plant Project in Matarbari',
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/home-page-02-edition-03.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
  {
    name: 'JURONG ENGINEERING LTD, SINGAPORE / IHI CORPORATION, JAPAN',
    description: 'Design, Supply and Site Installation of Local Staff and Worker Camp for JEL at Matarbari 2 x 600 MW ultrasuper Critical Power Plant',
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/home-page-02-edition-03.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
  {
    name: 'TOWA Corporation',
    description: 'Construction of 3-storied R.C.C factory Building with Mez. Floor for TOWA Personal Protective Device (BD). Ltd. At Ishwardi EPZ, Paksey Pabna. Total constructed area 1,50,000sqm. Of main factory build and others utility building.',
    imageSrc: towa_display,
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
  
]


const Projects = () => {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32 ">
          <h2 className="text-2xl font-bold text-gray-900 text-center"> OUR WORK </h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div
                key={callout.name}
                className="group relative rounded-lg overflow-hidden"
              >
                <img
                  alt={callout.imageAlt}
                  src={callout.imageSrc}
                  className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-sm text-white p-4 text-center">
                    {callout.description}
                  </p>
                </div>
                <h3 className="mt-6 text-sm text-gray-500 text-center">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-4 text-center justify-center">
            <a
              href="#"
              className="block w-full rounded bg-[#60AD02] px-12 py-3 text-sm font-medium text-white shadow hover:bg-[#068510] focus:outline-none focus:ring active:bg-[#068510] sm:w-auto"
            >
              View More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;


import React from "react";

const callouts = [
  {
    name: 'EXSACO LTD.',
    description: 'Construction, of 5- Storied Main Factory Building for EXSACO LIMITED at DAG No: SA/63,64,6 Mouza Domna & Dokkhin Baroibari Kashimpur, Gazipur Sadar, Dhaka Bangladesh. Total constructed area 501,601 sft including pavement, drain, Boundary all complete work',
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/home-page-02-edition-01.jpg',
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    name: 'SROOTY TEXTILE LTD.',
    description: 'Construction of Two storied Factory Building with Mez.floor for SOORTY textile (BD) Ltd. at Comilla EPZ. Factory Building with steel structure erection work, all civil and finishing work, etp, Utility buildings covering area 3,75,000 sft',
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/home-page-02-edition-02.jpg',
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'PAXAR BANGLADESH LTD.',
    description: 'Construction, of 4 Storied Factory Building for PAXAR Bangladesh Ltd. At Dhaka EPZ.(Civil Work), Architectural Work',
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/home-page-02-edition-03.jpg',
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
    name: 'JURONG ENGINEERING LTD, SINGAPORE / IHI CORPORATION, JAPAN',
    description: 'Design, Supply and Site Installation of Local Staff and Worker Camp for JEL at Matarbari 2 x 600 MW ultrasuper Critical Power Plant',
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/home-page-02-edition-03.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
  
]


const Projects = () => {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Collections</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <img
                  alt={callout.imageAlt}
                  src={callout.imageSrc}
                  className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"
                />
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                {/* <p className="text-base font-semibold text-gray-900">{callout.description}</p> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

import about1 from "../assets/about1.jpg";
import about2 from "../assets/about2.jpg";
import navPicture from "../assets/nav_picture.png";
import s1 from "../assets/optimized/s1.jpg";
import s2 from "../assets/s2.jpg";
import s3 from "../assets/s3.jpg";
import s4 from "../assets/s4.jpg";
import s5 from "../assets/optimized/s5.jpg";

import exsacoBuildingView from "../assets/Projects/exsaco/BuildingView.png";
import exsacoEntryView from "../assets/Projects/exsaco/Entry View.jpg";
import exsacoFrontView from "../assets/Projects/exsaco/Front View.jpg";

import paxarBuildingView1 from "../assets/Projects/paxar/Building View 1.jpg";
import paxarBuildingView2 from "../assets/Projects/paxar/Building View 2.jpg";
import paxarTopView1 from "../assets/Projects/paxar/Top View 1.jpg";

import soortyDisplay from "../assets/Projects/soorty/display.jpg";
import soortySiteView from "../assets/Projects/soorty/6_0.jpg";
import soortySiteView2 from "../assets/Projects/soorty/43005124_364228867655520_3827951231045730304_n.jpg";

import towaDisplay from "../assets/Projects/towa/display.png";
import towaView1 from "../assets/Projects/towa/463978018_8681394758584165_3451907369311735969_n.jpg";
import towaView2 from "../assets/Projects/towa/464021036_8681394755250832_362059781258852959_n.jpg";

import { getProjectMediaFileId, getProjectMediaKey } from "./projectMedia";

const projectImageModules = import.meta.glob(
  "../assets/imagesForNibirNirman/optimized/*.{jpg,jpeg,webp}",
  {
    eager: true,
    import: "default",
  }
);

const projectImagesById = Object.fromEntries(
  Object.entries(projectImageModules)
    .map(([path, module]) => {
      const matchedFileId = path.match(/\/(\d+)\.[^.]+$/);

      if (!matchedFileId) {
        return null;
      }

      return [matchedFileId[1], module];
    })
    .filter(Boolean)
);

const PROJECT_MEDIA_BY_KEY = {
  commercial: {
    cover: s3,
    gallery: [s3, about1],
  },
  default: {
    cover: navPicture,
    gallery: [navPicture],
  },
  exsaco: {
    cover: exsacoBuildingView,
    gallery: [exsacoBuildingView, exsacoFrontView, exsacoEntryView],
  },
  industrial: {
    cover: s5,
    gallery: [s5, about1],
  },
  paxar: {
    cover: paxarBuildingView1,
    gallery: [paxarBuildingView1, paxarBuildingView2, paxarTopView1],
  },
  power: {
    cover: s1,
    gallery: [s1, navPicture],
  },
  radar: {
    cover: s4,
    gallery: [s4],
  },
  residential: {
    cover: s2,
    gallery: [s2, about2],
  },
  soorty: {
    cover: soortyDisplay,
    gallery: [soortyDisplay, soortySiteView, soortySiteView2],
  },
  temporary: {
    cover: navPicture,
    gallery: [navPicture, s1],
  },
  towa: {
    cover: towaDisplay,
    gallery: [towaDisplay, towaView1, towaView2],
  },
};

export const getProjectMedia = (project) => {
  const projectMediaFileId = getProjectMediaFileId(project);
  const directProjectImage = projectImagesById[projectMediaFileId];

  if (directProjectImage) {
    return {
      cover: directProjectImage,
      gallery: [directProjectImage],
    };
  }

  const mediaKey = getProjectMediaKey(project);

  return PROJECT_MEDIA_BY_KEY[mediaKey] ?? PROJECT_MEDIA_BY_KEY.default;
};

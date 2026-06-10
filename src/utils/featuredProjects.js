export const FEATURED_PROJECT_IDS = ["40", "30", "55", "41", "51", "31"];

const FEATURED_PROJECT_TITLES = {
  "40": "EXSACO LTD",
  "30": "SOORTY TEXTILE LTD",
  "55": "PAXAR BANGLADESH LTD",
  "41": "HYUNDAI ENGINEERING & CONSTRUCTION CO",
  "51": "JURONG ENGINEERING LTD",
  "31": "TOWA Corporation",
};

const toDisplayValue = (value) => {
  if (value === null || value === undefined) {
    return undefined;
  }

  const normalizedValue = String(value).replace(/\s+/g, " ").trim();
  return normalizedValue || undefined;
};

export const getProjectCardDetails = (project) => {
  const contractValue = toDisplayValue(project?.["Contract Value"]);
  const commencement = toDisplayValue(project?.Commencement);
  const completion = toDisplayValue(project?.Completion);

  return {
    ...(contractValue ? { contractValue } : {}),
    ...(commencement ? { commencement } : {}),
    ...(completion ? { completion } : {}),
    hasTimeline: Boolean(commencement || completion),
  };
};

export const getFeaturedProjects = (projects) =>
  FEATURED_PROJECT_IDS.map((projectId) => {
    const project = projects.find(
      (item) => String(item?.["Sl. No."]) === String(projectId)
    );

    if (!project) {
      return null;
    }

    return {
      ...project,
      homepageTitle: FEATURED_PROJECT_TITLES[projectId] ?? toDisplayValue(project.Client),
    };
  }).filter(Boolean);

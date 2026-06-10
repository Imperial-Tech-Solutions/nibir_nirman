const PROJECT_MEDIA_KEYS_BY_ID = {
  "30": "soorty",
  "31": "towa",
  "40": "exsaco",
  "55": "paxar",
};

const CATEGORY_MEDIA_KEYS = {
  "Commercial Projects": "commercial",
  "Industrial Projects": "industrial",
  "Power Generation & Distribution Projects": "power",
  "Radar Project": "radar",
  "Residential Projects": "residential",
  "Temporary Facilities Work": "temporary",
};

export const getProjectMediaKey = (project) => {
  const projectId = String(project?.["Sl. No."] ?? "");

  if (PROJECT_MEDIA_KEYS_BY_ID[projectId]) {
    return PROJECT_MEDIA_KEYS_BY_ID[projectId];
  }

  return CATEGORY_MEDIA_KEYS[project?.Category] ?? "default";
};

export const getProjectMediaFileId = (project) =>
  String(project?.["Sl. No."] ?? "");

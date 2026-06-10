import test from "node:test";
import assert from "node:assert/strict";

import projects from "../assets/JsonFiles/output.json" with { type: "json" };
import {
  FEATURED_PROJECT_IDS,
  getFeaturedProjects,
  getProjectCardDetails,
} from "./featuredProjects.js";

test("selects the six homepage featured projects from the real dataset", () => {
  assert.deepEqual(FEATURED_PROJECT_IDS, ["40", "30", "55", "41", "51", "31"]);

  const featuredProjects = getFeaturedProjects(projects);

  assert.deepEqual(
    featuredProjects.map((project) => String(project["Sl. No."])),
    FEATURED_PROJECT_IDS
  );
});

test("omits empty card details when values are missing", () => {
  assert.deepEqual(
    getProjectCardDetails({
      "Contract Value": "",
      Commencement: undefined,
      Completion: "Sep-2024",
    }),
    {
      completion: "Sep-2024",
      hasTimeline: true,
    }
  );
});

test("keeps populated project card details", () => {
  assert.deepEqual(
    getProjectCardDetails({
      "Contract Value": "BDT 124,000,000.00",
      Commencement: "Feb-2020",
      Completion: "Dec-2022",
    }),
    {
      contractValue: "BDT 124,000,000.00",
      commencement: "Feb-2020",
      completion: "Dec-2022",
      hasTimeline: true,
    }
  );
});

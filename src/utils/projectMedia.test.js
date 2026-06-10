import test from "node:test";
import assert from "node:assert/strict";

import {
  getProjectMediaKey,
  getProjectMediaFileId,
} from "./projectMedia.js";

test("returns a dedicated media key for projects with local galleries", () => {
  assert.equal(
    getProjectMediaKey({
      "Sl. No.": "31",
      Category: "Industrial Projects",
    }),
    "towa"
  );
});

test("returns the numeric project id for image lookup", () => {
  assert.equal(
    getProjectMediaFileId({
      "Sl. No.": "55",
    }),
    "55"
  );
});

test("falls back to the category media key when a project has no dedicated gallery", () => {
  assert.equal(
    getProjectMediaKey({
      "Sl. No.": "2",
      Category: "Residential Projects",
    }),
    "residential"
  );
});

test("returns the default media key when category is missing", () => {
  assert.equal(
    getProjectMediaKey({
      "Sl. No.": "999",
    }),
    "default"
  );
});

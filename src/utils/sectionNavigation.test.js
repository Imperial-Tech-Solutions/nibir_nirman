import test from "node:test";
import assert from "node:assert/strict";

import { getSectionNavigationTarget } from "./sectionNavigation.js";

test("returns a scroll action when already on the home page", () => {
  assert.deepEqual(getSectionNavigationTarget("/", "services"), {
    type: "scroll",
    sectionId: "services",
  });
});

test("returns a route target when navigating from another page", () => {
  assert.deepEqual(getSectionNavigationTarget("/about", "services"), {
    type: "route",
    to: "/#services",
  });
});

export const getSectionNavigationTarget = (pathname, sectionId) => {
  if (pathname === "/") {
    return {
      type: "scroll",
      sectionId,
    };
  }

  return {
    type: "route",
    to: `/#${sectionId}`,
  };
};

export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);

  if (!element) {
    return false;
  }

  element.scrollIntoView({ behavior: "smooth" });
  return true;
};

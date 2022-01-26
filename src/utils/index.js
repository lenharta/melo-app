export const loaderTimeout = 5000;
export const loaderDelay = 1000;
export const navbarDelay = 6000;
export const isHome = window.location.pathname === "/";

// Loader Animations
export const loaderContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      ease: "easeInQuad",
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      ease: "easeOutQuad",
      duration: 0.5,
    },
  },
};

export const framerLogoContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.7,
      staggerChildren: 0.3,
    },
  },
};

export const framerLogoItem = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

export const overlayAnimation = {
  hidden: {
    opacity: 0,
    x: -1000,
  },
  show: {
    opacity: 1,
    x: 0,
  },
};

// svg path draw
export const draw = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },
  visible: {
    pathLength: 1.05,
    opacity: 1,
    transition: {
      pathLength: {
        type: "spring",
        duration: 3,
        delay: 0.5,
        bounce: 0,
      },
      opacity: { duration: 0.05 },
    },
  },
};

// Nav Select Transition
export const spring = {
  type: "spring",
  stiffness: 500,
  damping: 30,
};

// Progress Bar
export const progress = {
  stiffness: 1000,
  damping: 10,
};

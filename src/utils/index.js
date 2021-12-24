export const loaderTimeout = 5000
export const loaderDelay = 1000
export const navbarDelay = 6000

// Loader Animations
export const framerLogoContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.3,
    }
  }
}

export const framerLogoItem = {
  hidden: { 
    opacity: 0,
    y: 300
  },
  show: {
    opacity: 1,
    y: 0
  }
}


export const loaderTimeout = 5000
export const loaderDelay = 1000
export const navbarDelay = 6000

// Loader Animations
export const framerLogoContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.7,
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
        type: 'spring',
        duration: 2,
        delay: .5,
        bounce: 0,
      },
      opacity: { duration: 0.05 }
    }
  }
}



// notes
export const framerLoaderOverlay = {
  in: {
    opacity: 1,
    x: -300
  },
  out: {
    opacity: 0,
    x: 300
  },
  end: {
    x: 0,
    opacity: 1
  }
}


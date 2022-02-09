import { css } from "styled-components";
import { mixins } from ".";

// ========================================================= //
// ============== D A R K ====== T H E M E ================= //
// ========================================================= //

export const darkTheme = {
  // =========================================================
  //   GLOBALS
  mixins,

  body: css`
    background: var(--d-primary-color);
  `,

  scrollbarThumb: css`
    background: var(--d-secondary-color);
  `,

  scrollbarTrack: css`
    background: var(--d-third-color);
  `,

  styledHeader: css`
    background: var(--d-primary-color-tint);
    backdrop-filter: blur(30px);
  `,

  select: css`
    border: var(--d-sm-border);
    color: var(--d-secondary-color);
    background: var(--d-primary-color);
    font-size: var(--fz-sm-4);
  `,

  // =========================================================
  //   GLOBAL CLASSES

  header__title: css`
    h1 {
      color: var(--d-primary-color);
    }
  `,

  // =========================================================
  //   NAVIGATION
  progressBar: css`
    svg {
      stroke: var(--d-secondary-color);
    }
  `,

  navLogo: css`
    color: var(--d-secondary-color);
    font-size: clamp(var(--fz-lg-1), 5vw, var(--fz-xl-1));
    font-family: var(--logo-font);
    font-weight: var(--fw-800);
    letter-spacing: var(--let-space-sm);
  `,

  navList: css`
    a {
      color: var(--d-secondary-color);
      font-size: clamp(var(--fz-sm-1), 5vw, var(--fz-sm-4));
      font-family: var(--secondary-font);
      font-weight: var(--fw-800);
      text-transform: uppercase;
      text-align: center;
      text-decoration: none;
      letter-spacing: var(--let-space-md);
      cursor: pointer;

      &:hover,
      &:active {
        color: var(--d-third-color);
      }
      &:focus {
        color: var(--d-secondary-color);
      }
      &:focus-visible {
        border: var(--d-focus-border);
      }
    }
  `,

  navSelectedLink: css`
    border: solid 2px var(--d-secondary-color);
    z-index: -25;
  `,

  // =========================================================
  //   COMPONENTS
  loader: css`
    color: var(--secondary-color);
    background: var(--primary-color);

    svg {
      stroke: var(--secondary-color);
    }

    span {
      font-size: var(--fz-lg-4);
      font-family: var(--logo-font);
      font-weight: var(--fw-800);
      letter-spacing: var(--let-space-sm);
    }
  `,

  themeButton: css`
    background: var(--d-third-color-tint);
    // Custom Border
    border: 3px solid var(--d-secondary-color);
    backdrop-filter: var(--filter);

    &:focus-visible {
      border: var(--d-focus-border);
    }
    .handle__Color {
      background: var(--d-secondary-color);
    }
  `,

  section__image: css`
    border: var(--d-md-border);
  `,

  // =========================================================
  //   REUSED COMPONENTS

  track: css`
    a {
      border-bottom: var(--sm-border);
      &:hover {
        transition: var(--d-transition);
        border-bottom: none;
        border-radius: var(--default-md-radius);
        /* background: var(--accent-gradient); */
        transform: scale(1.01);
        h2 {
          color: var(--d-primary-color);
        }
        h3 {
          color: var(--d-primary-color);
          /* opacity: 1; */
        }
        svg {
          color: var(--d-primary-color);
        }
        
        /* @supports (-webkit-background: none) or (-webkit-linear-gradient: none) {
          -webkit-background: var(--w-accent-gradient);
        } */

        @media (max-width: 768px) {
          border-radius: var(--default-sm-radius);
        }
      }
      &:focus-visible {
        border-radius: var(--default-md-radius);
        /* background: var(--accent-gradient); */
        h2 {
          color: var(--d-primary-color);  
        }
        h3 {
          color: var(--d-primary-color);  
          /* opacity: 1; */
        }
        svg {
          color: var(--d-primary-color);
        }

        /* @supports (-webkit-background: none) and (-webkit-linear-gradient: none) {
          -webkit-background: var(--w-accent-gradient);
        } */
        @media (max-width: 768px) {
          border-radius: var(--default-sm-radius);
        }
      }
    }

    h2 {
      color: var(--d-secondary-color);
    }
    h3 {
      color: var(--d-secondary-color);
      opacity: 0.6;
    }
    svg {
      color: var(--d-secondary-color);
    }
  `,
};

// ========================================================= //
// ============= L I G H T ====== T H E M E ================ //
// ========================================================= //

export const lightTheme = {
  // =========================================================
  //   GLOBALS
  mixins,

  body: css`
    background: var(--primary-color);
  `,

  scrollbarThumb: css`
    background: var(--secondary-color);
  `,

  scrollbarTrack: css`
    background: var(--third-color);
  `,

  styledHeader: css`
    background: var(--primary-color-tint);
    backdrop-filter: blur(30px);
  `,

  img: css`
    border: var(--sm-border);
  `,

  select: css`
    border: 2px solid var(--secondary-color);
    color: var(--secondary-color);
    background: var(--primary-color);
    font-size: var(--fz-sm-4);
  `,

  // =========================================================
  //   GLOBAL CLASSES

  header__title: css`
    h1 {
      color: var(--primary-color);
    }
  `,

  // =========================================================
  //   NAVIGATION
  progressBar: css`
    svg {
      stroke: var(--secondary-color);
    }
  `,

  navLogo: css`
    span {
      color: var(--secondary-color);
      font-size: clamp(var(--fz-lg-1), 5vw, var(--fz-xl-1));
      font-family: var(--logo-font);
      font-weight: var(--fw-800);
      letter-spacing: var(--let-space-sm);
    }
  `,

  navList: css`
    a {
      color: var(--secondary-color);
      font-size: clamp(var(--fz-sm-1), 5vw, var(--fz-sm-4));
      font-family: var(--secondary-font);
      font-weight: var(--fw-800);
      text-transform: uppercase;
      text-align: center;
      text-decoration: none;
      letter-spacing: var(--let-space-md);
      cursor: pointer;

      &:hover,
      &:active {
        color: var(--third-color);
      }
      &:focus {
        color: var(--secondary-color);
      }
      &:focus-visible {
        border: var(--focus-border);
      }
    }
  `,

  navSelectedLink: css`
    border: solid 2px var(--secondary-color);
    z-index: -25;
  `,

  // =========================================================
  //   COMPONENTS
  loader: css`
    color: var(--secondary-color);
    background: var(--primary-color);

    svg {
      stroke: var(--secondary-color);
    }

    span {
      font-size: var(--fz-lg-4);
      font-family: var(--logo-font);
      font-weight: var(--fw-800);
      letter-spacing: var(--let-space-sm);
    }
  `,

  themeButton: css`
    background: var(--primary-color-tint);
    // Custom Border
    border: 3px solid var(--secondary-color);
    backdrop-filter: var(--filter);

    &:focus-visible {
      border: var(--focus-border);
    }
    .handle__Color {
      background: var(--secondary-color);
    }
  `,

  section__image: css`
    border: var(--md-border);
  `,

  // gradient__font: css`
  //   background: var(--accent-gradient);
  //   -webkit-background-clip: text;
  //   -webkit-text-fill-color: transparent;

  //   @supports (-webkit-linear-gradient: none) {
  //     background: var(--w-accent-gradient);
  //     -webkit-background-clip: text;
  //     -webkit-text-fill-color: transparent;
  //   }
  // `,

  // =========================================================
  //   REUSED COMPONENTS
  trackNumber: css`
      font-size: var(--fz-lg-4);
      /* font-family: var(--logo-font); */
      font-weight: var(--fw-800);
      color: var(--secondary-color)
  `,

  track: css`
      a {
        border-bottom: var(--sm-border);
        
        &:hover {
          transition: var(--transition);
          border-bottom: none;
          border-radius: var(--default-md-radius);
          /* background: var(--accent-gradient); */
          transform: scale(1.01);
          h2 {
            color: var(--secondary-color);
          }
          h3 {
            color: var(--secondary-color);
          }
          svg {
            color: var(--secondary-color);
          }

          /* @supports (-webkit-background: none) or (-webkit-linear-gradient: none) {
            -webkit-background: var(--w-accent-gradient);
          } */

          @media (max-width: 768px) {
            border-radius: var(--default-sm-radius);
          }
        }
        &:focus-visible {
          border-radius: var(--default-md-radius);
          /* background: var(--accent-gradient); */
          h2 {
            color: var(--secondary-color);  
          }
          h3 {
            color: var(--secondary-color);  
          }
          svg {
            color: var(--secondary-color);
          }

          @supports (-webkit-background: none) and (-webkit-linear-gradient: none) {
            -webkit-background: var(--w-accent-gradient);
          }
          @media (max-width: 768px) {
            border-radius: var(--default-sm-radius);
          }
        }
      }
    }
    
    h2 {
      color: var(--secondary-color);
    }
    h3 {
      color: var(--secondary-color);
      opacity: 0.6;
    }
    svg {
      color: var(--secondary-color);
    }
  `,
  // var(--w-accent-gradient)
  // var(--accent-gradient)
};

// background: linear-gradient(
//   to left,
//   var(--gray-tint) 0%,
//   var(--off-white) 100%
// );

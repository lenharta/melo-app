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
  background: var(--text-gradient);
    svg {
      stroke: var(--d-primary-color);

      /* @supports (-webkit-text-fill-color: transparent) or
        (-webkit-background-clip: none) {
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
      } */
    }
  `,

  navLogo: css`
    font-weight: var(--fw-800);
    font-family: var(--logo-font);
    letter-spacing: var(--let-space-sm);
    font-size: clamp(var(--fz-lg-2), 5vw, var(--fz-xl-4));

    color: var(--d-secondary-color);
    background-image: var(--text-gradient);

    @supports (-webkit-text-fill-color: transparent) or
      (-webkit-background-clip: none) {
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
    }
  `,

  navList: css`
    background-image: var(--text-gradient);
    border-radius: 0px;
    a {
      font-size: clamp(var(--fz-sm-1), 5vw, var(--fz-sm-4));
      font-family: var(--d-secondary-font);
      font-weight: var(--fw-800);

      text-transform: uppercase;
      text-align: center;
      text-decoration: none;
      letter-spacing: var(--let-space-md);
      cursor: pointer;

      &:hover {
        color: var(--d-secondary-color-tint);
      }
      &:active {
        color: var(--d-primary-color);
      }
      &:focus-visible {
        border: var(--d-focus-border);
      }
    }

    svg {
      color: var(--d-primary-color);
      path {
        &:nth-child(2) {
          stroke: var(--d-primary-color-tint);
          stroke-width: 0.5px;
          stroke-linejoin: round;
        }
      }
    }
  `,

  navSelectedLink: css`
    background: var(--d-secondary-color);
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
    border: 3px solid transparent;
    backdrop-filter: var(--filter);

    &:focus-visible {
      border: var(--d-focus-border);
    }
    .handle__Color {
      background-image: var(--text-gradient);
    }
  `,

  section__image: css`
    border: var(--d-md-border);
  `,

  // =========================================================
  //   REUSED COMPONENTS
  TrackNumber: css`
    font-weight: var(--fw-800);
    font-family: var(--logo-font);
    letter-spacing: var(--let-space-sm);
    font-size: clamp(var(--fz-lg-1), 5vw, var(--fz-xl-1));

    background-image: var(--text-gradient);
    color: var(--d-secondary-color);

    @supports (-webkit-text-fill-color: transparent) or
      (-webkit-background-clip: none) {
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
    }
  `,

  track: css`
    a {
      border-bottom: var(--sm-border);
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

      // Link Overlay
      &:hover {
        border-bottom: none;
        transform: scale(1.01);
        transition: var(--transition);
        border-radius: var(--md-radius);
        h2 {
          color: var(--d-primary-color);
        }
        h3 {
          color: var(--d-primary-color);
        }
        svg {
          color: var(--d-primary-color);
        }

        @media (max-width: 768px) {
          border-radius: var(--sm-radius);
        }
        @media (max-width: 480px) {
          border-radius: var(--xs-radius);
        }
      }
      &:focus-visible {
        h2 {
          color: var(--d-primary-color);
        }
        h3 {
          color: var(--d-primary-color);
        }
        svg {
          color: var(--d-primary-color);
        }
      }
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
    background: var(--secondary-color-tint);
    backdrop-filter: blur(30px);

    @supports (-webkit-backdrop-filter: transparent) {
      -webkit-backdrop-filter: transparent;
    }
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
      background-image: var(--text-gradient);
      svg {
        stroke: var(--secondary-color);
    }
  `,

  navLogo: css`
    font-weight: var(--fw-800);
    font-family: var(--logo-font);
    letter-spacing: var(--let-space-sm);
    font-size: clamp(var(--fz-lg-2), 5vw, var(--fz-xl-4));

    color: var(--secondary-color);
    background-image: var(--text-gradient);

    @supports (-webkit-text-fill-color: transparent) or
      (-webkit-background-clip: none) {
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
    }
  `,

  navList: css`
    background-image: var(--text-gradient);
    a {
      font-size: clamp(var(--fz-sm-1), 5vw, var(--fz-sm-4));
      font-family: var(--secondary-font);
      font-weight: var(--fw-800);

      text-transform: uppercase;
      text-align: center;
      text-decoration: none;
      letter-spacing: var(--let-space-md);
      cursor: pointer;

      &:hover {
        color: var(--secondary-color-tint);
      }
      &:active {
        color: var(--primary-color);
      }
      &:focus-visible {
        border: var(--focus-border);
      }
    }

    svg {
      color: var(--secondary-color);
      path {
        &:nth-child(2) {
          stroke: var(--secondary-color-tint);
          stroke-width: 0.5px;
          stroke-linejoin: round;
        }
      }
    }
  `,

  navSelectedLink: css`
    background: var(--primary-color);
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
    /* background: var(--third-color); */
    // Custom Border
    border: 4px solid transparent;
    background: var(--secondary-color-tint);
    backdrop-filter: var(--filter);
    background-position: 100%;
    /* background-clip: padding-box; */
    /* backdrop-filter: var(--filter); */
    
    /* &:before {
      content: '';
      position: absolute;
      top: 0; right: 0; bottom: 0; left: 0;
      border-radius: inherit;
      background: var(--text-gradient);
    } */
    
    &:focus-visible {
      border: var(--focus-border);
    }
    .handle__Color {
    /* border: 4px solid var(--secondary-color); */
      background-image: var(--text-gradient);
    }
  `,

  section__image: css`
    border: var(--md-border);
  `,

  // =========================================================
  //   REUSED COMPONENTS
  TrackNumber: css`
    font-size: clamp(var(--fz-md-4), 5vw, var(--fz-lg-4));
    font-family: var(--primary-font);
    font-weight: var(--fw-700);
    /* border-radius: var(--sm-radius); */
    color: var(--secondary-color);
    /* background-image: var(--text-gradient);

    @supports (-webkit-text-fill-color: transparent) or
      (-webkit-background-clip: none) {
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
    } */
  `,

  track: css`
    a {
      border-bottom: var(--sm-border);
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

      // Link Overlay
      &:hover {
        border-bottom: none;
        transform: scale(1.01);
        transition: var(--transition);
        border-radius: var(--md-radius);
        h2 {
          color: var(--secondary-color);
        }
        h3 {
          color: var(--secondary-color);
        }
        svg {
          color: var(--secondary-color);
        }

        @media (max-width: 768px) {
          border-radius: var(--sm-radius);
        }
        @media (max-width: 480px) {
          border-radius: var(--xs-radius);
        }
      }
      &:focus-visible {
        h2 {
          color: var(--secondary-color);
        }
        h3 {
          color: var(--secondary-color);
        }
        svg {
          color: var(--secondary-color);
        }
      }
    }
  `,
};

// background: linear-gradient(
//   to left,
//   var(--gray-tint) 0%,
//   var(--off-white) 100%
// );

// var(--w-accent-gradient)
// var(--accent-gradient)
// background: var(--d-accent-gradient);
// background: var(--accent-gradient);

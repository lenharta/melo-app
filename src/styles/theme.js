import { css } from "styled-components";
import { mixins } from ".";

// ========================================================= //
// ============== D A R K ====== T H E M E ================= //
// ========================================================= //

export const darkTheme = {
  mixins,

  // ==========================================================
  //                  GLOBALS
  // ==========================================================
  body: css`
    background: var(--d-primary-color);
  `,

  //                  SCROLLBAR
  // ==========================================================
  scrollbarThumb: css`
    background: var(--d-secondary-color);
  `,

  scrollbarTrack: css`
    background: var(--d-third-color);
  `,

  styledHeader: css`
    background: var(--d-primary-color-tint);
    backdrop-filter: var(--filter);
    -webkit-backdrop-filter: blur(30px);

    @supports (-webkit-backdrop-filter: none) {
      -webkit-backdrop-filter: none;
    }
  `,

  a: css`
    color: var(--d-secondary-color);
  `,
  h1: css`
    color: var(--d-secondary-color);
  `,
  h2: css`
    color: var(--d-secondary-color);
  `,
  h3: css`
    color: var(--d-secondary-color);
  `,
  h4: css`
    color: var(--d-secondary-color);
  `,
  h5: css`
    color: var(--d-secondary-color);
  `,
  h6: css`
    color: var(--d-secondary-color);
  `,
  p: css`
    color: var(--d-secondary-color);
  `,
  span: css`
    color: var(--d-secondary-color);
  `,
  ul: css`
    color: var(--d-secondary-color);
  `,
  svg: css`
    color: var(--d-secondary-color);
  `,

  //                  INPUTS & MENUS
  // ==========================================================

  select: css`
    border: var(--d-sm-border);
    color: var(--d-secondary-color);
    background: var(--d-primary-color);
    font-size: var(--fz-sm-4);
  `,

  // ==========================================================
  //                  GLOBAL COMPONENTS
  // ==========================================================

  loader: css`
    color: var(--d-secondary-color);
    background: var(--d-primary-color);

    svg {
      stroke: var(--d-secondary-color);
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
      /* background-image: var(--text-gradient); */
      background: var(--primary-color);
    }
  `,

  progressBar: css`
    background-image: var(--text-gradient);
    svg {
      stroke: var(--d-primary-color);

      /* @supports (-webkit-text-fill-color: transparent) or
        (-webkit-background-clip: none) {
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
      } */
    }
  `,

  //                  NAVIGATION
  // ==========================================================
  navLogo: css`
    span {
      color: var(--d-secondary-color);
      span {
        font-weight: var(--fw-800);
        font-family: var(--logo-font);
        letter-spacing: var(--let-space-sm);
        font-size: clamp(var(--fz-lg-4), 5vw, var(--fz-xl-1));
        background-image: var(--text-gradient);
        /* color: var(--d-secondary-color); */

        @supports (-webkit-text-fill-color: transparent) or
          (-webkit-background-clip: none) {
          -webkit-text-fill-color: transparent;
          -webkit-background-clip: text;
        }
      }
    }
  `,

  navList: css`
    background-image: var(--text-gradient);
    a {
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

  // ==========================================================
  //                    CLASSES
  // ==========================================================
  accent__line: css`
    background: var(--text-gradient);
  `,

  track__img: css`
    border-radius: var(--xs-radius);
  `,

  tab__img: css``,

  // ==========================================================
  //                  COMPONENTS
  // ==========================================================

  //                  TRACKLIST & TRACK
  // ==========================================================
  // numberList: css`
  //   background-image: var(--text-gradient);
  //   background-size: cover;

  //   @supports (-webkit-text-fill-color: transparent) or
  //     (-webkit-background-clip: none) {
  //     -webkit-text-fill-color: transparent;
  //     -webkit-background-clip: text;
  //   }
  // `,

  trackList: css`
    h2 {
      color: var(--d-secondary-color);

      @media (max-width: 1600px) {
      }
      @media (max-width: 1080px) {
      }
      @media (max-width: 768px) {
      }
      @media (max-width: 480px) {
      }
    }
  `,

  track: css`
    a {
      border-bottom: var(--sm-border);
      h5 {
        color: var(--d-secondary-color);
      }
      h6 {
        color: var(--d-secondary-color);
        opacity: 0.6;
      }
      svg {
        color: var(--d-secondary-color);
      }

      // Link Overlay
      &:hover {
        background: var(--d-third-color-tint);
        border-bottom: none;
        transform: scale(1.01);
        transition: var(--transition);
        border-radius: var(--md-radius);
        h5 {
          color: var(--d-secondary-color);
        }
        h6 {
          color: var(--d-secondary-color);
        }
        svg {
          color: var(--d-secondary-color);
        }

        @media (max-width: 768px) {
          border-radius: var(--sm-radius);
        }
        @media (max-width: 480px) {
          border-radius: var(--xs-radius);
        }
      }
      &:focus-visible {
        h5 {
          color: var(--d-secondary-color);
        }
        h6 {
          color: var(--d-secondary-color);
        }
        svg {
          color: var(--d-secondary-color);
        }
      }
    }
  `,

  // ==========================================================
  //                  ROUTES
  // ==========================================================

  //                  CHARTS
  // ==========================================================
  chartsContainer: css``,

  ChartsHeader: css`
    /* background: var(--secondary-color-tint); */
    h2 {
      color: var(--d-secondary-color);
      background-image: var(--text-gradient);

      @supports (-webkit-text-fill-color: transparent) or
        (-webkit-background-clip: none) {
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
      }
    }
  `,
};

// ========================================================= //
// ============= L I G H T ====== T H E M E ================ //
// ========================================================= //

// COLORS / BORDERS / BACKGROUNDS / FILTERS /
export const lightTheme = {
  mixins,

  // ==========================================================
  //                  GLOBALS
  // ==========================================================
  body: css`
    background: var(--off-white-tint);
  `,

  //                  SCROLL BAR
  // ==========================================================
  scrollbarThumb: css`
    background: var(--secondary-color);
  `,

  scrollbarTrack: css`
    background: var(--third-color);
  `,

  styledHeader: css`
    background: var(--secondary-color-tint);
    backdrop-filter: var(--filter);
    -webkit-backdrop-filter: blur(30px);

    @supports (-webkit-backdrop-filter: none) {
      -webkit-backdrop-filter: none;
    }
  `,

  a: css`
    color: var(--secondary-color);
    
  `,
  h1: css`
    color: var(--secondary-color);
  `,
  h2: css`
    color: var(--secondary-color-tint);
  `,
  h3: css`
    color: var(--secondary-color);
  `,
  h4: css`
    color: var(--secondary-color-tint);
  `,
  h5: css`
    color: var(--secondary-color);
  `,
  h6: css`
    color: var(--secondary-color-tint);
  `,
  p: css`
    color: var(--secondary-color);
  `,
  span: css`
    color: var(--secondary-color);
  `,
  ul: css`
    color: var(--secondary-color);
  `,
  svg: css`
    color: var(--primary-color);
  `,

  // ==========================================================
  //                  GLOBAL COMPONENTS
  // ==========================================================
  loader: css`
    color: var(--secondary-color);
    background: var(--primary-color);

    svg {
      stroke: var(--secondary-color);
      filter: none;
    }
  `,

  themeButton: css`
    // Custom Border
    border: 4px solid transparent;
    background: var(--secondary-color-tint);
    backdrop-filter: var(--filter);
    background-position: 100%;

    &:focus-visible {
      border: var(--focus-border);
    }
    .handle__Color {
      background: var(--primary-color);
    }
  `,

  progressBar: css`
    background-image: var(--text-gradient);
    svg {
      stroke: var(--secondary-color);
      filter: none;
    }
  `,

  //                  NAVIGATION
  // ==========================================================
  navLogo: css`
    span {
      color: var(--primary-color);
    }
  `,

  navList: css`
    background-image: var(--text-gradient);
    a {
      &:active {
        color: var(--primary-color);
      }
      &:focus-visible {
        border: var(--focus-border);
      }
    }

    svg {
      text-align: center;
      filter: none;
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

  // ==========================================================
  //                    CLASSES
  // ==========================================================
  accent__line: css`
    background: var(--text-gradient);
  `,

  track__img: css`
    border-radius: var(--xs-radius);
  `,

  tab__img: css``,

  // ==========================================================
  //                  COMPONENTS
  // ==========================================================

  //                  TRACKLIST & TRACK
  // ==========================================================
  numberList: css`
    /* background-image: var(--text-gradient); */
    /* background-size: cover; */
    /* background-clip: text; */

    /* @supports (-webkit-text-fill-color: transparent) or
    (-webkit-background-clip: none) {
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
    } */
  `,

  trackList: css`
    h4 {
      color: var(--secondary-color);
    }
  `,

  track: css`
    border-bottom: var(--sm-border);
    a {
      svg {
        color: var(--secondary-color);
        filter: drop-shadow(4px 4px 1px var(--third-color));

        @media (max-width: 768px) {
          filter: drop-shadow(3px 3px 1px var(--third-color));
        }
      }

      // Link Overlay
      &:hover {
        background: var(--secondary-color-tint);
        border-radius: var(--lg-radius);
        transition: var(--transition);
        transform: scale(1.01);
        border-bottom: none;

        h5 {
          color: var(--primary-color);
        }
        h6 {
          color: var(--primary-color);
        }
        svg {
          color: var(--primary-color);
          filter: none;
        }

        @media (max-width: 1600px) {
        }
        @media (max-width: 1080px) {
          border-radius: var(--md-radius);
        }
        @media (max-width: 768px) {
          border-radius: var(--sm-radius);
        }
        @media (max-width: 480px) {
          border-radius: var(--xs-radius);
        }
      }

      &:focus-visible {
        background: var(--secondary-color-tint);
        h5 {
          color: var(--primary-color);
        }
        h6 {
          color: var(--primary-color);
        }
        svg {
          color: var(--primary-color);
          filter: none;
        }
      }
    }
  `,

  // ==========================================================
  //                  ROUTES
  // ==========================================================

  //                  CHARTS
  // ==========================================================
  chartsContainer: css``,

  ChartsHeader: css`
    h2 {
      color: var(--secondary-color-tint);
    }
  `,
};

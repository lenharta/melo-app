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
    background: var(--d-green);
  `,

  scrollbarThumb: css`
    background: var(--l-green);
  `,

  scrollbarTrack: css`
    background: var(--l-green-tint);
  `,

  header: css`
    background-color: var(--d-green-tint);
    backdrop-filter: blur(30px);
  `,

  h1: css`
    color: var(--l-green);
  `,

  h3: css`
    color: var(--green);
  `,

  h2: css`
    color: var(--l-green);
  `,

  p: css`
    color: var(--slate-green);
  `,

  cardGradient: css`
    background: linear-gradient(
      135deg,
      var(--l-green-tint) 0%,
      var(--green-tint) 50%,
      var(--d-green-tint) 100%
    );
  `,

  // =========================================================
  //   NAVIGATION
  progressBar: css`
    svg {
      stroke: var(--l-green);
    }
  `,

  navLogo: css`
    color: var(--l-green);
  `,

  navList: css`
    background-color: var(--slate-green-tint);
    border: 3px solid var(--l-green-tint);
  `,

  navLinks: css`
    a {
      color: var(--l-green);
      &:active,
      &:hover {
        color: var(--l-green);
      }
      &:focus-visible {
        border: dashed 3px var(--l-green);
      }
    }
  `,

  navSelectedLink: css`
    background: var(--slate-green-tint);
  `,

  // =========================================================
  //   COMPONENTS
  loader: css`
    color: var(--l-green);
    background-color: var(--d-green);
    svg {
      stroke: var(--l-green);
    }
  `,

  themeButton: css`
    background: var(--slate-green-tint);
    border: 2px solid var(--l-green);
    &:focus-visible {
      border: dashed 3px var(--l-green);
    }
    div {
      background: var(--l-green);
    }
  `,

  scrollFade: css`
    background: linear-gradient(0deg, var(--d-green) 0%, transparent 100%);
  `,

  // =========================================================
  //   REUSED COMPONENTS

  track: css`
    border-bottom: solid 1px var(--slate-green-tint);
    &:last-of-type {
      border-bottom: none;
    }
    svg {
      color: var(--slate-green);
    }
  `,

  trackList: css``,

  // =========================================================
  //   GLOBAL CLASSES

  header__divider: css`
    background: linear-gradient(
      135deg,
      var(--l-green) 0%,
      var(--green) 50%,
      var(--slate-green-tint) 100%
    );
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
    background: var(--white);
  `,

  scrollbarThumb: css`
    background: var(--teal);
  `,

  scrollbarTrack: css`
    background: var(--l-teal-tint);
  `,

  header: css`
    background: var(--white-tint);
    backdrop-filter: blur(30px);
  `,

  nav: css``,

  h1: css`
    color: var(--teal);
  `,

  h2: css`
    color: var(--slate-gray);
  `,

  p: css`
    color: var(--slate-gray);
  `,

  // Tested in Tracklist
  // cardGradient: css`
  //   background: linear-gradient(
  //     135deg,
  //     var(--teal) 0%,
  //     var(--teal-tint) 50%,
  //     var(--slate-gray) 100%
  //   );
  // `,

  // =========================================================
  //   GLOBAL CLASSES

  header__divider: css`
    background: linear-gradient(135deg, var(--teal) 0%, var(--teal-tint) 100%);
  `,

  // =========================================================
  //   NAVIGATION
  progressBar: css`
    svg {
      stroke: var(--teal);
    }
  `,

  navLogo: css`
    color: var(--teal);
    text-decoration: none;
  `,

  navList: css`
    background-color: var(--l-teal-tint);
    border: 2px solid var(--teal-tint);
  `,

  navLinks: css`
    a {
      color: var(--slate-gray);
      text-decoration: none;
      &:active {
        color: var(--gray-tint);
      }
      &:focus-visible {
        border: dashed 3px var(--black);
      }
    }
  `,

  navSelectedLink: css`
    background: var(--teal-tint);
  `,

  // =========================================================
  //   COMPONENTS
  loader: css`
    color: var(--teal);
    background-color: var(--white);
    svg {
      stroke: var(--teal);
    }
  `,

  themeButton: css`
    background: var(--l-teal-tint);
    border: 2px solid var(--teal);
    border-radius: 25px;
    &:focus-visible {
      border: dashed 3px var(--black);
    }
    div {
      background: var(--teal);
    }
  `,

  scrollFade: css`
    // background: linear-gradient(180deg, transparent 0%, var(--teal-tint) 100%);
    // backdrop-filter: ;
  `,

  chartsSection: css`
    // backdrop-filter: blur(20px);
  `,

  // =========================================================
  //   REUSED COMPONENTS

  track: css`
    border-bottom: solid 1px var(--slate-gray-tint);
    &:last-of-type {
      border-bottom: none;
    }
    

    svg {
      color: var(--slate-gray);
    }
  `,

  trackList: css``,
};

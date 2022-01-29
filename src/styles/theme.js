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

  // =========================================================
  //   NAVIGATION
  progressBar: css`
    svg {
      stroke: var(--l-green);
    }
  `,

  navLogo: css`
    color: var(--l-green);
    text-decoration: none;
  `,

  navList: css`
    background-color: var(--slate-green-tint);
  `,

  navLinks: css`
    a {
      color: var(--l-green);
      text-decoration: none;
      &:hover {
        color: var(--l-green-tint);
      }
    }
  `,

  navSelectedLink: css`
    background: var(--l-green-tint);
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
    border-radius: 25px;
    div {
      background: var(--l-green);
    }
  `,

  // =========================================================
  //   REUSED COMPONENTS

  track: css`
    svg {
      color: var(--slate-green-tint);
    }
  `,

  trackList: css``,
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

  ol: css`
    background: var(--gray);
  `,

  h1: css`
    color: var(--teal);
  `,

  h2: css`
    color: var(--green);
  `,

  p: css`
    color: var(--white);
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
  `,

  navLinks: css`
    a {
      color: var(--teal);
      text-decoration: none;
      &:hover {
        color: var(--teal-tint);
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
    div {
      background: var(--teal);
    }
  `,

  // =========================================================
  //   REUSED COMPONENTS

  track: css`
    svg {
      color: var(--gray-tint);
    }
  `,

  trackList: css``,
};

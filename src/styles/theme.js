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

  form: css`
    background: transparent;
    select {
      height: 300px;
    }
  `,

  select: css`
    border: solid 2px var(--slate-green-tint);
    color: var(--l-green);
    background: linear-gradient(
      to right,
      var(--d-green) 0%,
      var(--black-tint) 100%
    );
    li::after {
      content: "";
    }
  `,

  h1: css`
    color: var(--l-green);
    letter-spacing: 5px;
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
      90deg,
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
    border: 2px solid var(--l-green);
    background: transparent;
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
    .handle__Color {
      background: var(--l-green);
    }
  `,

  scrollFade: css`
    background: linear-gradient(0deg, var(--d-green) 0%, transparent 100%);
  `,

  // =========================================================
  //   REUSED COMPONENTS

  track: css`
    a {
      border: solid 2px var(--slate-green-tint);
      &:hover,
      &:focus {
        background: var(--slate-green-tint);
        transform: scale(1.01);
      }
      &:focus-visible {
        border: dashed 3px var(--black);
      }
    }
    svg {
      color: var(--slate-green);
    }
  `,

  trackList: css``,

  // =========================================================
  //   GLOBAL CLASSES

  header__title: css`
    background: linear-gradient(
      to left,
      var(--l-green-tint) 0%,
      var(--d-green) 100%
    );
    border-left: solid 5px var(--l-green);
    h1 {
      color: var(--l-green);
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
    background: var(--off-white);
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
    color: var(--coral);
  `,

  h2: css`
    color: var(--coral);
  `,

  p: css`
    color: var(--black);
  `,

  select: css`
    border: solid 2px var(--coral);
    color: var(--black);
    background: linear-gradient(
      to right,
      var(--gray-tint) 0%,
      var(--off-white) 100%
    );
    &:focus-visible {
      border: dashed 3px var(--black);
    }
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

  header__title: css`
    background: linear-gradient(
      to left,
      var(--gray-tint) 0%,
      var(--off-white) 100%
    );
    border-left: solid 5px var(--coral);
    h1 {
      color: var(--coral)
    }
  `,

  // =========================================================
  //   NAVIGATION
  progressBar: css`
    svg {
      stroke: var(--coral);
    }
  `,

  navLogo: css`
    color: var(--coral);
    font-size: clamp(var(--fz-nav), 5vw, var(--fz-lg));
    font-family: var(--righteous);
  `,

  navList: css`
    background-color: transparent;
    border: 2px solid var(--coral);
  `,

  navLinks: css`
    a {
      color: var(--coral);
      text-decoration: none;
      font-family: var(--roboto);
      font-weight: var(--roboto-reg);
      &:active {
        color: var(--white);
      }

      &:focus-visible {
        border: dashed 3px var(--black);
      }
    }
  `,

  navSelectedLink: css`
    background: transparent;
    border: 2px solid var(--coral);
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
    background: var(--off-white-tint);
    border: 2px solid var(--coral);
    backdrop-filter: blur(30px);
    &:focus-visible {
      border: dashed 3px var(--black);
    }
    .handle__Color {
      background: var(--coral);
    }
  `,

  // =========================================================
  //   REUSED COMPONENTS

  track: css`
    a {
      border: solid 2px var(--gray-tint);
      &:hover {
        background: var(--gray-tint);
        transform: scale(1.01);
      }
      &:focus-visible {
        border: dashed 3px var(--black);
      }
    }
    svg {
      color: var(--coral);
    }
  `,

  trackList: css``,
};

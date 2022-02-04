import { css } from "styled-components";
import { mixins } from ".";

// ========================================================= //
// ============== D A R K ====== T H E M E ================= //
// ========================================================= //

export const darkTheme = {
  // =========================================================
  //   GLOBALS STYLES
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

  styledHeader: css`
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
    border: solid 3px var(--l-green);
    color: var(--l-green);
    background: var(--d-green);
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
    font-size: clamp(var(--fz-lg), 5vw, var(--fz-xl));
    font-family: var(--righteous);
    letter-spacing: 1px;
    color: var(--l-green);
  `,

  navList: css`
    background-color: transparent;
    /* border: 2px solid var(--l-green); */
    font-family: var(--righteous);
    font-weight: 200;

    li {
      a {
        font-size: clamp(var(--fz-sm), 5vw, var(--fz-nav));
        text-decoration: none;
        cursor: pointer;
        color: var(--l-green);

        &:active,
        &:hover {
          color: var(--l-green);
        }
        &:focus-visible {
          border: dashed 3px var(--l-green);
          color: var(--slate-green-tint);
        }
      }
    }
  `,

  navLinks: css``,

  navSelectedLink: css`
    border: 2px solid var(--l-green);
    background-color: var(--l-green-tint);
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
    background: var(--d-green);
    border: 5px solid var(--l-green);
    /* backdrop-filter: blur(30px); */
    &:focus-visible {
      border: dashed 3px var(--l-green);
    }
    .handle__Color {
      background: var(--l-green);
    }
  `,

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
    border-left: solid 4px var(--l-green);
    border-bottom: solid 4px var(--l-green);
    border-top: solid 4px var(--l-green);
    border-right: solid 4px var(--l-green);
    h1 {
      color: var(--l-green);
    }
  `,

  card__background: css`
    background: var(--l-green-tint);

    @media (max-width: 1080px) {
      border: none;
      background: transparent;
    }
    @media (max-width: 768px) {
    }
    @media (max-width: 480px) {
    }
  `,

  card__background_aside: css`
    background: var(--l-green-tint);
    @media (max-width: 1080px) {
      border: none;
      background: transparent;
    }
    @media (max-width: 768px) {
    }
    @media (max-width: 480px) {
    }
  `,

  section__border: css`
    border-color: var(--l-green);
  `,

  section__border_right: css`
    border-right-color: var(--l-green);
  `,

  section__border_noRight: css`
    border-color: var(--l-green);
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

  styledHeader: css`
    background: var(--off-white-tint);
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
    border: solid 3px var(--coral);
    color: var(--coral);
    background: var(--off-white);
  `,

  // =========================================================
  //   GLOBAL CLASSES

  header__title: css`
    border: solid 4px var(--coral);
    background: var(--coral);
    h1 {
      color: var(--off-white);
    }
  `,

  card__background_aside: css`
    background: var(--coral);
    /* background: linear-gradient(
      to left,
      var(--coral) 0%,
      var(--off-white) 100%
      ); */
    @media (max-width: 1080px) {
      border: none;
      background: transparent;
    }
    @media (max-width: 768px) {
    }
    @media (max-width: 480px) {
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
    font-size: clamp(var(--fz-lg), 5vw, var(--fz-xl));
    font-family: var(--righteous);
    letter-spacing: 1px;
    color: var(--coral);
  `,

  navList: css`
    background-color: transparent;
    font-family: var(--righteous);
    font-weight: 200;

    a {
      font-size: clamp(var(--fz-sm), 5vw, var(--fz-nav));
      text-decoration: none;
      cursor: pointer;
      color: var(--coral);

      &:active {
        color: var(--white);
      }
      &:focus-visible {
        border: dashed 3px var(--black);
      }
    }
  `,

  navSelectedLink: css`
    background: var(--coral-tint);
    border: 2px solid var(--coral);
  `,

  // =========================================================
  //   COMPONENTS
  loader: css`
    color: var(--coral);
    background-color: var(--off-white);
    svg {
      stroke: var(--coral);
    }
  `,

  themeButton: css`
    background: var(--off-white-tint);
    border: 5px solid var(--coral);
    /* backdrop-filter: blur(30px); */
    &:focus-visible {
      border: dashed 3px var(--black);
    }
    .handle__Color {
      background: var(--coral);
    }
  `,

  section__border: css`
    border-color: var(--coral);
  `,

  section__border_right: css`
    border-right-color: var(--coral);
  `,

  section__border_noRight: css`
    border-color: var(--coral);
  `,

  section__image: css`
    border: 2px solid var(--off-white);
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

// background: linear-gradient(
//   to left,
//   var(--gray-tint) 0%,
//   var(--off-white) 100%
// );

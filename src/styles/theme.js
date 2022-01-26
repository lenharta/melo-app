import { css } from "styled-components";
import { mixins } from ".";

export const darkTheme = {
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

  loader: css`
    color: var(--l-green);
    background-color: var(--d-green);
    svg {
      stroke: var(--l-green);
    }
  `,

  header: css`
    background-color: var(--d-green-tint);
    backdrop-filter: blur(10px);
  `,

  progressBar: css`
    svg {
      stroke: var(--l-green);
    }
  `,

  navList: css`
    background-color: var(--slate-green-tint);
  `,

  navLogo: css`
    color: var(--l-green);
    text-decoration: none;
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

  themeButton: css`
    background: var(--slate-green-tint);
    border: 2px solid var(--l-green);
    border-radius: 25px;
    div {
      background: var(--l-green);
    }
  `,

  h1: css`
    color: var(--l-green);
  `,

  h2: css`
    color: var(--green);
  `,

  p: css`
    color: var(--white);
  `,
};

export const lightTheme = {
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

  loader: css`
    color: var(--teal);
    background-color: var(--white);
    svg {
      stroke: var(--teal);
    }
  `,

  header: css`
    // background: var(--gray);
    backdrop-filter: blur(10px);
  `,

  progressBar: css`
    svg {
      stroke: var(--teal);
    }
  `,

  navList: css`
    background-color: var(--l-teal-tint);
  `,

  navLogo: css`
    color: var(--teal);
    text-decoration: none;
  `,

  navLinks: css`
    a {
      color: var(--teal);
      text-decoration: none;
      &:hover {
        color: var(--white);
      }
    }
  `,

  navSelectedLink: css`
    background: var(--teal-tint);
  `,

  themeButton: css`
    background: var(--l-teal-tint);
    border: 2px solid var(--teal);
    border-radius: 25px;
    div {
      background: var(--teal);
    }
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
};

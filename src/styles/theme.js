import { css } from "styled-components";
import { mixins } from ".";

export const darkTheme = {
  mixins,

  body: css`
    background: var(--d-green);
  `,

  nav: css`
    background-color: var(--d-green);
  `,

  progressbar: css`
    svg {
      stroke: var(--l-green);
    }
  `,

  a: css`
    color: var(--l-green);
    text-decoration: none;
    &:hover {
      opacity: 0.7;
      transform: translateY(-3px);
    }
  `,

  button: css`
    background: var(--l-green-tint);
    border: 2px solid var(--l-green);
    border-radius: 25px;
    div {
      background: var(--l-green);
    }
  `,

  ol: css`
    background-color: var(--gray);
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

  nav: css`
    background: var(--nav-bg-light);
    backdrop-filter: blur(10px);
    border-bottom: solid 1px var(--gray-tint);
  `,

  progressbar: css`
    svg {
      stroke: var(--teal);
    }
  `,

  a: css`
    color: var(--teal);
    text-decoration: none;
    &:hover {
      color: var(--teal-tint);
      transform: translateY(-3px);
    }
  `,

  button: css`
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
    color: var(--green);
  `,

  h2: css`
    color: var(--green);
  `,

  p: css`
    color: var(--white);
  `,
};

import { css } from "styled-components";
import { mixins } from ".";

export const lightTheme = {
  mixins,

  body: css`
    background: var(--white);
  `,

  nav: css`
    background-color: var(--black);
  `,

  a: css`
    color: var(--green);
    text-decoration: none;
    &:hover {
      opacity: 0.7;
      transform: translateY(-3px);
    }
  `,

  button: css`
    background: var(--white);
    border: 2px solid var(--black);
    border-radius: 25px;
    svg {
      color: var(--black);
    }
  `,

  ol: css`
    background-color: var(--l-gray);
  `,

  h1: css`
    color: var(--black);
  `,

  h2: css`
    color: var(--green);
  `,

  p: css`
    color: var(--white);
  `,
};

export const darkTheme = {
  mixins,

  body: css`
    background: var(--black);
  `,

  nav: css`
    background-color: var(--d-gray);
  `,

  a: css`
    color: var(--green);
    text-decoration: none;
    &:hover {
      opacity: 0.7;
      transform: translateY(-3px);
    }
  `,

  button: css`
    background: var(--black);
    border: 2px solid var(--green);
    border-radius: 25px;
    svg {
      color: var(--green);
      transform: translateX(85%);
    }
  `,

  ol: css`
    background: var(--d-gray);
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

import { css } from 'styled-components'
import { mixins } from '.'

export const lightTheme = {
  mixins,

  body: css`
    background: var(--white);
  `,

  button: css`
    border: 2px solid var(--black);
    border-radius: 25px;
    svg {
      color: var(--black);
    }
  `,

  ol: css`
    background: var(--green);
    color: var(--d-gray);
  `,

  h1: css`
    color: var(--d-gray);
  `,
}

export const darkTheme = {
  mixins,

  body: css`
    background: var(--black);
  `,

  button: css`
    border: 2px solid var(--green);
    border-radius: 25px;
    svg {
      color: var(--green);
      transform: translateX(85%);
    }
  `,

  ol: css`
    background: var(--d-gray);
    color: var(--green);
  `,

  h1: css`
    color: var(--green);
  `,
}
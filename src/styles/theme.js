import { css } from 'styled-components'
import { mixins } from '.'

export const lightTheme = {
  mixins,

  body: 'var(--white)',
  button: css`
    border: 2px solid var(--black);
    border-radius: 25px;
    svg {
      color: var(--black);
    }
  `,
}

export const darkTheme = {
  mixins,

  body: 'var(--black)',
  button: css`
    border: 2px solid var(--green);
    border-radius: 25px;
    svg {
      color: var(--green);
      transform: translateX(85%);
      transition: ease;
    }
  `,
}
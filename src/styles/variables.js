import { css } from 'styled-components'

const variables = css`
  :root {
    // Colors
    --green: #CBFB45;
    --black: #151517;
    --d-gray: #232325;
    --gray: #3A3A3E;
    --l-gray: #898990;
    --white: #F3F3F3;

    // light theme
    
    // dark theme


    // Font Styles
    --righteous: 'Righteous', cursive; // Logo/Various
    --barlow: 'Barlow', sans-serif;
    --roboto: 'Roboto Condensed', sans-serif;

    // Font Weights
    --barlow-light: 300;
    --barlow-reg: 400;
    --roboto-reg: 400;
    --roboto-bold: 700;

    // Font Sizes
    --fz-xxs: 11px;
    --fz-xs: 13px;
    --fz-sm: 16px;
    --fz-md: 18px;
    --fz-lg: 30px;
    --fz-xl: 44px;
    --fz-xxl: 54px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
`;

export default variables


import { css } from 'styled-components'

const variables = css`
  :root {
    // Colors
    --d-green: rgb(27, 32, 31);
    --d-green-tint: rgb(27, 32, 31 0.4);
    --green: rgb(61, 88, 87);
    --green-tint: rgba(61, 88, 87, 0.4);
    --l-green: rgb(203, 251, 185);
    --l-green-tint: rgb(203, 251, 185, 0.4);
    --black: rgb(21, 21, 23);
    --gray: rgb(182, 183, 187);
    --gray-tint: rgba(182, 183, 187, 0.4);
    --white: rgb(240, 244, 245);
    --teal: rgb(111, 148, 149);
    --teal-tint: rgb(111, 148, 149, 0.4);
    --l-teal: rgb(162, 196, 196);
    --l-teal-tint: rgba(162, 196, 196, 0.4);

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

    // Transitions
    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    // Gradients
    --nav-bg-light: linear-gradient(180deg, var(--l-teal-tint) 0%, transparent 100%);
  }
`;

export default variables

// --black: #151517;
//     --d-gray: #232325;
//     --gray: #F8F8F8;
//     --l-gray: #F0F0F0;
//     --white: #F3F3F3;


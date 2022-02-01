import { css } from "styled-components";

const variables = css`
  :root {
    // Colors
    --d-green: rgb(27, 32, 31);
    --d-green-tint: rgba(27, 32, 31 0.4);
    --green: rgb(61, 88, 87);
    --green-tint: rgba(61, 88, 87, 0.4);
    --l-green: rgb(203, 251, 185);
    --l-green-tint: rgba(203, 251, 185, 0.4);
    --slate-green: rgb(127, 148, 136);
    --slate-green-tint: rgba(127, 148, 136, 0.4);
    --black: rgb(21, 21, 23);
    --black-tint: rgba(21, 21, 23, 0.1);
    --gray: rgb(182, 183, 187);
    --gray-tint: rgba(182, 183, 187, 0.4);
    --slate-gray: rgb(112, 128, 144);
    --slate-gray-tint: rgba(112, 128, 144, 0.4);
    --white: rgb(240, 244, 245);
    --white-tint: rgba(240, 244, 245, 0.4);
    --teal: rgb(111, 148, 149);
    --teal-tint: rgba(111, 148, 149, 0.4);
    --l-teal: rgb(162, 196, 196);
    --l-teal-tint: rgba(162, 196, 196, 0.4);

    // New Light Theme
    --coral: rgb(240, 93, 94);
    --coral-tint: rgba(240, 93, 94, 0.4);
    /* --dark-blue: rgb(); */
    /* --dark-blue: rgb(); */
    /* --dark-blue: rgb(); */
    --off-white: rgb(242, 243, 244);
    --off-white-tint: rgb(242, 243, 244, 0.4);
    // Font Styles
    --righteous: "Righteous", cursive; // Logo/Various
    --barlow: "Barlow", sans-serif;
    --roboto: "Roboto Condensed", sans-serif;

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
    --fz-nav: 22px;

    // Transitions
    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    // Gradients
    --nav-bg-light: linear-gradient(
      180deg,
      var(--l-teal-tint) 0%,
      transparent 100%
    );
  }
`;

export default variables;

// Color HEX Reference
// Dark Green             - #1B201F
// Green                  - #3D5857
// Light Green            - #CBFBB9
// Slate Green            - #7F9488
// Black                  - #151517
// Gray                   - #B6B7BB
// Slate Gray             - #708090
// White                  - #F0F4F5
// Teal                   - #6F9495
// Light Teal             - #A2C4C4


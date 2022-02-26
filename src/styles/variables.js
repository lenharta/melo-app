import { css } from "styled-components";

const variables = css`
  :root {
    // ====================================================================================================================
    // =====  -------------------------------------------------  ==========================================================
    // =====  G ----- L ----- O ----- B ----- A ----- L ----- S  ==========================================================
    // =====  -------------------------------------------------  ==========================================================
    // ====================================================================================================================
    //  ===================================================
    //  FONTS
    //  ===================================================
    --logo-font: "Righteous", cursive; // (400)
    --primary-font: "Poppins", sans-serif; // (100-900)
    --secondary-font: "Quicksand", sans-serif; // (300-700)

    //  ===================================================
    //  FONT WEIGHTS
    //  ===================================================
    --fw-100: 100;
    --fw-200: 200;
    --fw-300: 300  
    --fw-400: 400;
    --fw-600: 600;
    --fw-700: 700;
    --fw-800: 800;
    --fw-900: 900;

    //  ===================================================
    //  FONT SIZES
    //  ===================================================
    --fz-xs-1: 8px;
    --fz-xs-2: 12px;
    --fz-sm-1: 16px;
    --fz-sm-2: 20px;
    --fz-md-1: 24px;
    --fz-md-2: 28px;
    --fz-lg-1: 32px;
    --fz-lg-2: 36px;
    --fz-xl-1: 40px;
    --fz-xl-2: 44px;
    --fz-xxl-1: 48px;
    --fz-xxl-2: 52px;
    --fz-xxxl-1: 56px;
    --fz-xxxl-2: 60px;

    //  ===================================================
    //  LETTER SPACING
    //  ===================================================
    --let-space-xs: 1px;
    --let-space-sm: 2px;
    --let-space-md: 4px;
    --let-space-lg: 6px;
    --let-space-xl: 8px;

    //  BORDER RADIUS
    //  ===================================================
    --xs-radius: 10px;
    --sm-radius: 15px;
    --md-radius: 20px;
    --lg-radius: 25px;
    --xl-radius: 30px;

    //  ===================================================
    //  FILTERS & SHADOWS
    //  ===================================================
    --filter: blur(30px);

    //  ===================================================
    //  TRANSITIONS
    //  ===================================================
    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --d-transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);

    //
    //
    //
    //
    //
    //
    //
    //
    //
    //

    //  ===================================================
    //  ANIMATIONS (add above break)
    //  ===================================================
    --ellipsis-hover: 2.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) infinite
      alternate-reverse both;

    //  =====================================================================================================================================================
    //  GLOBAL COLORS
    //  =====================================================================================================================================================
    //  ===================================================
    //  ACCENT COLORS
    //  ===================================================
    --orange: rgba(245, 133, 41, 1);
    --orange-tint: rgba(245, 133, 41, 0.4);
    --gold: rgba(254, 218, 119, 1);
    --gold-tint: rgba(254, 218, 119, 0.4);
    --pink: rgba(221, 42, 123, 1);
    --pink-tint: rgba(221, 42, 123, 0.4);
    --purple: rgba(129, 52, 175, 1);
    --purple-tint: rgba(129, 52, 175, 0.4);
    --blue: rgba(81, 91, 212, 1);
    --blue-tint: rgba(81, 91, 212, 0.4);

    //  =====================================================================================================================================================
    //  =====================================================================================================================================================
    //  LIGHT THEME COLORS
    //  =====================================================================================================================================================
    //  =====================================================================================================================================================

    --primary-color: rgba(229, 229, 229, 1);
    --primary-color-tint: rgba(229, 229, 229, 0.4);

    --secondary-color: rgba(5, 4, 6, 1);
    --secondary-color-tint: rgba(5, 4, 6, 0.85);
    --secondary-color-tint-1: rgba(5, 4, 6, 0.75);
    --secondary-color-tint-2: rgba(5, 4, 6, 0.3);

    --third-color: rgba(161, 163, 165, 1);
    --third-color-tint: rgba(161, 163, 165, 0.2);
    --third-color-tint-2: rgba(161, 163, 165, 0.8);

    //  ===================================================
    //  Borders
    //  ===================================================
    --img-border: solid 1px rgba(161, 163, 165, 1);
    --focus-border: dashed 4px rgba(229, 229, 229, 1);

    --sm-border: solid 2px rgba(161, 163, 165, 0.4);
    --md-border: solid 4px rgba(161, 163, 165, 0.4);
    --lg-border: solid 6px rgba(161, 163, 165, 0.4);

    //
    //
    //
    //
    //
    //
    //
    //
    //
    //

    //  =================================================================================================
    //  =================================================================================================
    //  ============================ D == A == R == K ===== T == H == E == M == E =======================
    //  =================================================================================================
    //  =================================================================================================

    --d-primary-color: rgb(5, 4, 6, 1);
    --d-primary-color-tint: rgba(5, 4, 6, 0.4);

    --d-secondary-color: rgba(229, 229, 229, 1);
    --d-secondary-color-tint: rgba(229, 229, 229, 0.4);
    --d-secondary-color-tint-1: rgba(5, 4, 6, 0.65);
    --d-secondary-color-tint-2: rgba(5, 4, 6, 0.85);

    --d-third-color: rgba(161, 163, 165, 1);
    --d-third-color-tint: rgba(161, 163, 165, 0.2);

    --d-third-color-tint-2: rgba(161, 163, 165, 0.6);

    //  Borders
    //  ===================================================
    --d-img-border: solid 1px rgba(161, 163, 165, 1);
    --d-focus-border: dashed 4px rgba(229, 229, 229, 1);

    --d-sm-border: solid 2px rgba(161, 163, 165, 0.4);
    --d-md-border: solid 4px rgba(161, 163, 165, 0.4);
    --d-lg-border: solid 6px rgba(161, 163, 165, 0.4);

    //
    //
    //
    //
    //
    //
    //
    //
    //
    //

    // ACCENT GRADIENTS
    --text-gradient: linear-gradient(
      to right,
      var(--orange) 0%,
      var(--gold) 25%,
      var(--pink) 50%,
      var(--purple) 75%,
      var(--blue) 100%
    );

    --text-gradient-btm: linear-gradient(
      to bottom,
      var(--orange) 0%,
      var(--gold) 25%,
      var(--pink) 50%,
      var(--purple) 75%,
      var(--blue) 100%
    );

    --text-gradient-tint: linear-gradient(
      to right,
      var(--orange-tint) 0%,
      var(--gold-tint) 25%,
      var(--pink-tint) 50%,
      var(--purple-tint) 75%,
      var(--blue-tint) 100%
    );

    --section-header-gradient: linear-gradient(
      to bottom,
      var(--secondary-color-tint) 0%,
      var(--secondary-color-tint-1) 100%
    );

    --d-section-header-gradient: linear-gradient(
      to bottom,
      var(--d-secondary-color-tint) 0%,
      var(--d-secondary-color-tint-1) 100%
    );

    // Transitions

    // ===================================================
  }
`;

export default variables;

// PRIMARY COLOR REFERENCE
// White        #E5E5E5 / rgb(229, 229, 229)
// Black        #050406 / rgb(5, 4, 6)
// Gray         #A1A3A5 / rgb(161, 163, 165)

// ACCENT COLOR REFERENCE
// ORANGE           #F58529
// GOLD             #FEDA77
// PINK             #DD2A7B
// PURPLE           #8134AF
// BLUE             #515BD4

// --orange: rgba(245, 133, 41, 1);
// --orange-tint: rgba(245, 133, 41, 0.4);

// --gold: rgba(254, 218, 119, 1);
// --gold-tint: rgba(254, 218, 119, 0.4);

// --pink: rgba(221, 42, 123, 1)
// --pink-tint: rgba(221, 42, 123, 0.4)

// --purple: rgba(129, 52, 175, 1)
// --purple-tint: rgba(129, 52, 175, 0.4)

// --blue: rgba(81, 91, 212, 1)
// --blue-tint: rgba(81, 91, 212, 0.4)

// Color              # / rgba(, 1)
// Color-tint         rgba(, .05)

// MEDIA REFERENCE

// @media (max-width: 1600px) {
// }
// @media (max-width: 1080px) {
// }
// @media (max-width: 768px) {
// }
// @media (max-width: 480px) {
// }

// SUPPORTS REFERENCE

// TEXT OUTLINE
// -webkit-text-stroke-width: 0.5px;
// -webkit-text-stroke-color: var(--secondary-color-tint);
//
// @supports (-webkit-text-stroke-width: none) or
//   (-webkit-text-stroke-color: none) {
//    -webkit-text-stroke-width: none;
//    -webkit-text-stroke-color: none;
//   }

// TEXT GRADIENT BACKGROUND
// background-image: var(--text-gradient-btm);
//
// @supports (-webkit-text-fill-color: transparent) or
//  (-webkit-background-clip: none) {
//  -webkit-text-fill-color: transparent;
//  -webkit-background-clip: text;
// }

// CSS REFERENCE

// text-shadow: -1px -1px 0px var(--primary-color);

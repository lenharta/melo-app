import { css } from "styled-components";
import { mixins } from ".";

export const darkTheme = {
  // ======================================================================
  // ======================================================================
  // ==[D]==  D - A - R - K --- T - H - E - M - E
  // ======================================================================
  // ======================================================================
  mixins,

  // ============================================================
  // ==[D]==  G L O B A L S
  // ============================================================
  body: css`
    background: var(--d-primary-color);
  `,

  // __________________________________________________
  // ==[D]==  S C R O L L - B A R
  // **************************************************
  scrollbarThumb: css`
    background: var(--d-secondary-color);
  `,

  scrollbarTrack: css`
    background: var(--d-third-color);
  `,

  // __________________________________________________
  // ==[D]==  T E X T - T A G S
  // ``````````````````````````````````````````````````
  a: css`
    color: var(--d-secondary-color);
  `,
  p: css`
    color: var(--d-secondary-color);
  `,
  span: css`
    color: var(--d-secondary-color);
  `,
  ul: css`
    color: var(--d-secondary-color);
  `,

  // __________________________________________________
  // ==[D]==  H E A D E R - T A G S
  // **************************************************
  h1: css`
    color: var(--d-secondary-color);
  `,
  h2: css`
    color: var(--d-secondary-color);
  `,
  h3: css`
    color: var(--d-secondary-color);
  `,
  h4: css`
    color: var(--d-secondary-color);
  `,
  h5: css`
    color: var(--d-secondary-color);
  `,
  h6: css`
    color: var(--d-secondary-color);
  `,

  // __________________________________________________
  // ==[D]==  G R A P H I C S
  // **************************************************
  svg: css`
    color: var(--d-secondary-color);
  `,

  // ________________________________________________
  // ==[D]==  I N P U T S  &  M E N U S
  // ````````````````````````````````````````````````
  select: css`
    color: var(--d-secondary-color);
  `,

  // __________________________________________________
  // ==[D]==  C U S T O M - C L A S S E S
  // **************************************************
  accent__line: css`
    background: var(--text-gradient);
  `,

  track__img: css``,

  tab__img: css``,

  // ============================================================
  // ==[D]==  C O M P O N E N T S
  // ============================================================

  // __________________________________________________
  // ==[D]==  L O A D E R
  // **************************************************
  loader: css`
    color: var(--d-secondary-color);
    background: var(--d-primary-color);

    svg {
      stroke: var(--d-secondary-color);
    }

    /* span {
      font-size: var(--fz-lg-4);
      font-family: var(--logo-font);
      font-weight: var(--fw-800);
      letter-spacing: var(--let-space-sm);
    } */
  `,

  // __________________________________________________
  // ==[D]==  T H E M E - B U T T O N
  // **************************************************
  themeButton: css`
    background: var(--d-third-color-tint);

    // Custom Border
    border: 3px solid transparent;
    &:focus-visible {
      border: var(--d-focus-border);
    }

    // targeted class for handle div
    .handle__Color {
      background: var(--primary-color);
    }
  `,

  // __________________________________________________
  // ==[D]==  P R O G R E S S - B A R
  // **************************************************
  progressBar: css`
    background-image: var(--text-gradient);
    svg {
      stroke: var(--d-primary-color);
    }
  `,

  // __________________________________________________
  // ==[D]==  N A V
  // **************************************************
  header: css`
    background: var(--d-primary-color-tint);
  `,

  navLogo: css`
    // not yet used (used in light)
  `,

  navList: css`
    background-image: var(--text-gradient);
    a {
      &:hover {
        color: var(--d-secondary-color-tint);
      }
      &:active {
        color: var(--d-primary-color);
      }
      &:focus-visible {
        border: var(--d-focus-border);
      }
    }

    svg {
      color: var(--d-primary-color);
      path {
        &:nth-child(2) {
          stroke: var(--d-primary-color-tint);
          stroke-width: 0.5px;
          stroke-linejoin: round;
        }
      }
    }
  `,

  navSelectedLink: css`
    background: var(--d-secondary-color);
  `,

  // __________________________________________________
  // ==[D]==  T R A C K L I S T - & - T R A C K
  // **************************************************
  numberList: css`
    /* background-image: var(--text-gradient);
    background-size: cover;

    @supports (-webkit-text-fill-color: transparent) or
      (-webkit-background-clip: none) {
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
    } */
  `,

  trackList: css`
    span {
      // Non-Default Font
      font-size: clamp(var(--fz-sm-2), 3vw, var(--fz-xl-2));
      font-weight: var(--fw-400);
    }
  `,

  track: css`
    a {
      border-bottom: var(--sm-border);
      h5 {
        color: var(--d-secondary-color);
      }
      h6 {
        color: var(--d-secondary-color);
        opacity: 0.6;
      }
      svg {
        color: var(--d-secondary-color);
      }

      // Link Overlay
      &:hover {
        background: var(--d-third-color-tint);
        border-bottom: none;
        h5 {
          color: var(--d-secondary-color);
        }
        h6 {
          color: var(--d-secondary-color);
        }
        svg {
          color: var(--d-secondary-color);
        }

        @media (max-width: 768px) {
          border-radius: var(--sm-radius);
        }
        @media (max-width: 480px) {
          border-radius: var(--xs-radius);
        }
      }
      &:focus-visible {
        h5 {
          color: var(--d-secondary-color);
        }
        h6 {
          color: var(--d-secondary-color);
        }
        svg {
          color: var(--d-secondary-color);
        }
      }
    }
  `,

  // ============================================================
  // ==[D]==  R O U T E S
  // ============================================================

  // __________________________________________________
  // ==[D]==  C H A R T S
  // **************************************************
  ChartsHeader: css`
    h2 {
      color: var(--d-secondary-color);
      background-image: var(--text-gradient);

      @supports (-webkit-text-fill-color: transparent) or
        (-webkit-background-clip: none) {
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
      }
    }
  `,
};

export const lightTheme = {
  // ======================================================================
  // ======================================================================
  // ==[L]==  L - I - G - H - T --- T - H - E - M - E
  // ======================================================================
  // ======================================================================
  mixins,

  // ============================================================
  // ==[L]==  G L O B A L S
  // ============================================================
  body: css`
    background: var(--off-white-tint);
  `,

  // __________________________________________________
  // ==[L]==  S C R O L L - B A R
  // **************************************************
  scrollbarThumb: css`
    background: var(--secondary-color);
  `,

  scrollbarTrack: css`
    background: var(--third-color);
  `,

  // __________________________________________________
  // ==[L]==  T E X T - T A G S
  // **************************************************
  a: css`
    color: var(--secondary-color);
  `,
  p: css`
    color: var(--secondary-color);
  `,
  span: css`
    color: var(--secondary-color);
  `,
  ul: css`
    color: var(--secondary-color);
  `,

  // __________________________________________________
  // ==[L]==  H E A D E R - T A G S
  // **************************************************
  h1: css`
    color: var(--secondary-color);
  `,
  h2: css`
    color: var(--secondary-color-tint);
  `,
  h3: css`
    color: var(--secondary-color);
  `,
  h4: css`
    color: var(--secondary-color-tint);
  `,
  h5: css`
    color: var(--secondary-color);
  `,
  h6: css`
    color: var(--secondary-color-tint);
  `,

  // __________________________________________________
  // ==[L]==  G R A P H I C S
  // **************************************************
  svg: css`
    color: var(--secondary-color);
  `,

  // ________________________________________________
  // ==[L]==  I N P U T S - & - M E N U S
  // ````````````````````````````````````````````````
  select: css`
    color: var(--d-secondary-color);
  `,

  // __________________________________________________
  // ==[L]==  C U S T O M - C L A S S E S
  // **************************************************
  accent__line: css`
    background: var(--text-gradient);
  `,

  track__img: css``,

  tab__img: css``,

  // ============================================================
  // ==[L]==  C O M P O N E N T S
  // ============================================================

  // __________________________________________________
  // ==[L]==  L O A D E R
  // **************************************************
  loader: css`
    background: var(--primary-color);

    // Non-Default SVG
    svg {
      stroke: var(--secondary-color);
      filter: none;
    }
  `,

  // __________________________________________________
  // ==[L]==  T H E M E - B U T T O N
  // **************************************************
  themeButton: css`
    background: var(--secondary-color-tint);
    background-position: 100%;

    // Custom Border

    // Targeted class for handle div
    .handle__Color {
      background: var(--primary-color);
    }
  `,

  // __________________________________________________
  // ==[L]==  P R O G R E S S - B A R
  // **************************************************
  progressBar: css`
    background-image: var(--text-gradient);

    // Non-Default SVG
    svg {
      stroke: var(--secondary-color);
      filter: none;
    }
  `,

  // __________________________________________________
  // ==[L]==  N A V
  // **************************************************
  header: css`
    background: var(--secondary-color-tint);
  `,

  navLogo: css`
    // Non-Default span
    span {
      color: var(--primary-color);
    }
  `,

  navList: css`
    background-image: var(--text-gradient);
    a {
      &:focus-visible {
        border: var(--focus-border);
      }
    }

    svg {
      text-align: center;
      filter: none;
    }
  `,

  navSelectedLink: css`
    background: var(--primary-color);
  `,

  // __________________________________________________
  // ==[L]==  T R A C K L I S T - & - T R A C K
  // **************************************************
  numberList: css`
    /* background-image: var(--text-gradient); */
    /* background-size: cover; */
    /* background-clip: text; */

    /* @supports (-webkit-text-fill-color: transparent) or
    (-webkit-background-clip: text) {
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
    } */
  `,

  trackList: css`
    span {
      color: var(--secondary-color);
      
      // Non-Default Font
      font-size: clamp(var(--fz-sm-2), 3vw, var(--fz-xl-2));
      font-weight: var(--fw-400);
    }
  `,

  track: css`
    border-bottom: var(--sm-border);
    a {
      svg {
        filter: drop-shadow(4px 4px 1px var(--third-color));

        @media (max-width: 768px) {
          filter: drop-shadow(3px 3px 1px var(--third-color));
        }
      }

      // Link Overlay
      &:hover {
        background: var(--secondary-color-tint);
        border-bottom: none;
        
        h5 {
          color: var(--primary-color);
        }
        h6 {
          color: var(--primary-color);
        }
        
        // Non-Default SVG
        svg {
          color: var(--primary-color);
          filter: none;
        }
      }

      &:focus-visible {
        background: var(--secondary-color-tint);
        h5 {
          color: var(--primary-color);
        }
        h6 {
          color: var(--primary-color);
        }
        svg {
          color: var(--primary-color);
          filter: none;
        }
      }
    }
  `,

  // ============================================================
  // ==[L]==  R O U T E S
  // ============================================================

  // __________________________________________________
  // ==[L]==  C H A R T S
  // **************************************************
  chartsContainer: css``,

  ChartsHeader: css`
    h2 {
      color: var(--secondary-color-tint);
    }
  `,
};

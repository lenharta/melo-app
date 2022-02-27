import { css } from "styled-components";
import variables from "./variables";

const mixins = {
  // ============================================================
  // ======  D I S P L A Y
  // ============================================================
  variables,

  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexStart: css`
    display: flex;
    justify-content: start;
    align-items: start;
  `,

  flexEnd: css`
    display: flex;
    justify-content: end;
    align-items: end;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  flexAround: css`
    display: flex;
    justify-content: space-around;
    align-items: center;
  `,

  flexEven: css`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  `,

  flexText: css`
    display: flex;
  `,
  // ============================================================
  // ======  C S S - B R O W S E R - S U P P O R T
  // ============================================================
  // var(--filter)
  backdropFilter: css`
    @supports (-webkit-backdrop-filter: var(--filter)) {
      -webkit-backdrop-filter: var(--filter);
    }
    backdrop-filter: var(--filter);
  `,

  // ============================================================
  // ======  B O R D E R
  // ============================================================

  // __________________________________________________
  // ======  C U S T O M - B O R D E R S
  // **************************************************
  themeButtonBorder: css`
    border: 4px solid transparent;

    &:focus-visible {
      border: var(--focus-border);
    }
  `,

  // __________________________________________________
  // ======  B O R D E R - R A D I U S
  // **************************************************
  tabOverlayRadius: css`
    border-radius: var(--lg-radius);

    @media (max-width: 1600px) {
    }
    @media (max-width: 1080px) {
      border-radius: var(--md-radius);
    }
    @media (max-width: 768px) {
      border-radius: var(--sm-radius);
    }
    @media (max-width: 480px) {
      border-radius: var(--xs-radius);
    }
  `,

  // ============================================================
  // ======  T R A N S I T I O N S
  // ============================================================
  scaleCubicSmall: css`
    transition: var(--transition);
    transform: scale(1.01);
  `,
};

export default mixins;

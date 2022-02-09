import { css } from "styled-components";

const variables = css`
  :root {
    // Fonts
    --logo-font: 'Righteous', cursive;             // (400)
    --primary-font: 'Poppins', sans-serif;         // (100-900)
    --secondary-font: 'Quicksand', sans-serif;     // (300-700)
      // Weights
      --fw-100: 100;
      --fw-200: 200;
      --fw-300: 300;
      --fw-400: 400;
      --fw-600: 600;
      --fw-700: 700;
      --fw-800: 800;
      --fw-900: 900;
      // Sizes
      --fz-sm-1: 10px;
      --fz-sm-2: 12px;
      --fz-sm-3: 14px;
      --fz-sm-4: 18px;
          --fz-md-1: 20px;
          --fz-md-2: 22px;
          --fz-md-3: 24px;
          --fz-md-4: 26px;
              --fz-lg-1: 30px;
              --fz-lg-2: 34px;
              --fz-lg-3: 38px;
              --fz-lg-4: 42px;
                  --fz-xl-1: 46px;
                  --fz-xl-2: 50px;
                  --fz-xl-3: 54px;
                  --fz-xl-4: 58px;

// ===================================================

    // Light Theme Colors
    --primary-color: rgb(229, 229, 229);
    --primary-color-tint: rgba(229, 229, 229, 0.4);
    --secondary-color: rgb(5, 4, 6);
    --secondary-color-tint: rgba(5, 4, 6, 0.4);
    --third-color: rgb(161, 163, 165);
    --third-color-tint: rgba(161, 163, 165, 0.2);
        // Borders
        --sm-border: solid 2px rgba(161, 163, 165, 0.4);
        --md-border: solid 4px rgba(161, 163, 165, 0.4);
        --lg-border: solid 6px rgba(161, 163, 165, 0.4);
        --focus-border: dashed 4px rgb(5, 4, 6);

    // Dark Theme Colors
    --d-primary-color: rgb(5, 4, 6);
    --d-primary-color-tint: rgba(5, 4, 6, 0.4);
    --d-secondary-color: rgb(229, 229, 229);
    --d-secondary-color-tint: rgba(229, 229, 229, 0.4);
    --d-third-color: rgb(161, 163, 165);
    --d-third-color-tint: rgba(161, 163, 165, 0.2);
        // Borders
        --d-sm-border: solid 2px rgba(161, 163, 165, 0.4);
        --d-md-border: solid 4px rgba(161, 163, 165, 0.4);
        --d-lg-border: solid 6px rgba(161, 163, 165, 0.4);
        --d-focus-border: dashed 4px rgb(161, 163, 165, 1);
      
    // Global Colors
    --gold: rgb(218, 199, 176);
    --slate-blue: rgb(180, 189, 203);
    --light-blue: rgb(186, 216, 241);
    --coral: rgb(211, 184, 184);
    --olive: rgb(190, 197, 191);
    --purple: rgb(184, 187, 211);

      // Acent Colors (maybe dark)
      --accent-pink: rgba(247, 37, 133, 1);
      --accent-pink-tint: rgba(247, 37, 133, 0.4);
      --accent-purple: rgba(86, 11, 173, 1);
      --accent-purple-tint: rgba(86, 11, 173, 0.4);
      --accent-d-blue: rgba(63, 55, 201, 1);
      --accent-d-blue-tint: rgba(63, 55, 201, 0.4);
      --accent-cyan: rgba(76, 201, 240, 1);
      --accent-cyan-tint: rgba(76, 201, 240, 0.4);

// ===================================================

    // Globals
      // General
      --default-lg-radius: 20px;
      --default-md-radius: 15px;
      --default-sm-radius: 10px;
      --filter: blur(30px);

      // Letter-Spacing
      --let-space-sm: 2px;
      --let-space-md: 4px;
      --let-space-lg: 6px;
      --let-space-xl: 8px;

      // Gradients
      --d-accent-gradient: linear-gradient(to right, var(--accent-pink) 0%, var(--accent-purple) 33.3%, var(--accent-d-blue) 66.6%, var(--accent-cyan) 100%);
      --accent-gradient: linear-gradient(to right, var(--accent-pink-tint) 0%, var(--accent-purple-tint) 33.3%, var(--accent-d-blue-tint) 66.6%, var(--accent-cyan-tint) 100%);
      
      // Transitions
      --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
      --d-transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
      --transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);

// ===================================================
  }
`;

export default variables;

// Color Reference
  // White        #E5E5E5 / rgb(229, 229, 229)
  // Black        #050406 / rgb(5, 4, 6)
  // Gray         #A1A3A5 / rgb(161, 163, 165)

  // Slate Blue   #B4BDCB / rgb(180, 189, 203)
  // light Blue   #BAD8F1 / rgb(186, 216, 241)
  // Olive Green  #BEC5BF / rgb(190, 197, 191)
  // Coral        #D3B8B8 / rgb(211, 184, 184)
  // Purple       #B8BBD3 / rgb(184, 187, 211)
  // Gold         #CFA97A / rgb(218, 199, 176)
  

  // @media (max-width: 1600px) {
  // }
  // @media (max-width: 1080px) {
  // }
  // @media (max-width: 768px) {
  // }
  // @media (max-width: 480px) {
  // }
    

    

      

      

      
        
        
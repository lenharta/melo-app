import React from "react";
import styled from "styled-components";
import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { progress } from "../utils";
import { useWidthSize } from "../utils/hooks/useWidthSize";

const ProgressBar = () => {
  const width = useWidthSize();
  // console.log(width);
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const pathLength = useSpring(yRange, { progress });

  return (
    <>
      <StyledProgressContainer>
        <motion.svg height="6" width={width}>
          {/* <defs>
            <linearGradient id="progress__gradient">
              <stop offset="5%" stop-color="rgba(76, 201, 240, 1)" />
              <stop offset="50%" stop-color="rgba(86, 11, 173, 1)" />
              <stop offset="95%" stop-color="rgba(247, 37, 133, 1)" />
            </linearGradient>
          </defs> */}

          <motion.line
            style={{ pathLength, scaleX: 1, x: 0 }}
            x1="0"
            x2="100%"
            strokeWidth="14"
            strokeDasharray="0 1"
            // className="progress__gradient_bg"
            // className="progress__shape"
          />
        </motion.svg>
      </StyledProgressContainer>
    </>
  );
};

const StyledProgressContainer = styled(motion.div)`
  ${({ theme }) => theme.mixins.flexCenter}
  top: 125px;
  position: fixed;
  z-index: 160;
  left: 0;
  ${(props) => props.theme.progressBar};
  @media (max-width: 1600px) {
    top: 100px;
  }
  @media (max-width: 1080px) {
  }
  @media (max-width: 768px) {
    top: 90px;
  }
  @media (max-width: 480px) {
    top: 80px;
  }

  /* .progress__shape {
    line {
      fill: url(#progress__gradient);
    }
  } */
  /* .progress__gradient_bg */
`;

export default ProgressBar;

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
        <motion.svg height="5" width={width}>
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
            strokeWidth="10"
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
  position: fixed;
  z-index: 101;
  top: 90px;
  left: 0;
  ${(props) => props.theme.progressBar};


  /* .progress__shape {
    line {
      fill: url(#progress__gradient);
    }
  } */
  /* .progress__gradient_bg */
`;

export default ProgressBar;

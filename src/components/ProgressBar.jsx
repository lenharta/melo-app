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
  // Switched in opposite direction for gradient reveal
  const yRange = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const pathLength = useSpring(yRange, { progress });

  return (
    <>
      <StyledProgressContainer>
        <motion.svg height="8" width={width}>
          <motion.line
            style={{ pathLength, scaleX: 1 }}
            x1="100%"
            x2="0"
            strokeWidth="20"
          />
        </motion.svg>
      </StyledProgressContainer>
    </>
  );
};

const StyledProgressContainer = styled(motion.div)`
  ${(props) => props.theme.progressBar};
  ${({ theme }) => theme.mixins.flexCenter}
  top: 100px;
  position: fixed;
  z-index: 160;
  left: 0;
  @media (max-width: 1600px) {
    top: 90px;
  }
  @media (max-width: 1080px) {
  }
  @media (max-width: 768px) {
    top: 80px;
  }
  @media (max-width: 480px) {
  }
`;

export default ProgressBar;

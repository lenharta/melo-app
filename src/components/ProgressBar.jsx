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
          <motion.line
            style={{ pathLength, scaleX: 1, x: 0 }}
            x1="0"
            x2="100%"
            strokeWidth="5"
            strokeDasharray="0 1"
          />
        </motion.svg>
      </StyledProgressContainer>
    </>
  );
};

const StyledProgressContainer = styled(motion.div)`
  position: fixed;
  top: 90px;
  left: 0;
  ${(props) => props.theme.progressBar};
`;

export default ProgressBar;

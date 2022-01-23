import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { progress } from "../utils";

const ProgressBar = () => {
  // const [widthResize, setWidthResize] = useState('')
  const { scrollYProgress } = useViewportScroll();
  const xRange = window.innerWidth;
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const pathLength = useSpring(yRange, { progress });

  return (
    <>
      <StyledProgressContainer>
        <motion.svg height="5" width={xRange}>
          <motion.line 
            style={{ pathLength, scaleX: -1 }}
            x1={xRange}
            y1="0"
            x2="0"
            y2="0"
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
  right: 0;
  width: 100%;
  ${(props) => props.theme.progressbar};
`;

export default ProgressBar;

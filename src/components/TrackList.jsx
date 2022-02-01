import React from "react";
import styled from "styled-components";
import { Track } from "../components";

const TrackList = ({ charts, id }) => {
  return (
    <>
      <StyledTrackList id={id}>
        {charts.map((data) => {
          return <Track key={data.id} {...data} />;
        })}
        {/* <StyledFadeContainer /> */}
      </StyledTrackList>
    </>
  );
};

const StyledTrackList = styled.ol`
  ${(props) => props.theme.trackList}
  /* counter-reset: index; */
  width: 100%;
`;

// const StyledFadeContainer = styled.div`
//   ${(props) => props.theme.scrollFade}
//   position: fixed;
//   height: 150px;
//   width: 100%;
//   bottom: 0;
//   z-index: 99;
// `;

export default TrackList;

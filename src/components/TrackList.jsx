import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Track } from "../components";

const TrackList = ({ charts, id }) => {

  // useEffect(() => {
    
  // }, []);
  
  return (
    <>
      <StyledTrackList id={id}>
        {charts.map((data, i) => {
          return <Track key={i} {...data} />;
        })}
        {/* <StyledFadeContainer /> */}
      </StyledTrackList>
    </>
  );
};

const StyledTrackList = styled.ul`
  ${(props) => props.theme.trackList}
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

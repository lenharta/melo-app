import React from "react";
import styled from "styled-components";
import { Track } from "../components";

const TrackList = ({ charts }) => {
  return (
    <>
      <StyledTrackList>
        {charts.map((data) => {
          return <Track key={data.id} {...data} />;
        })}
        {/* <StyledFadeContainer /> */}
      </StyledTrackList>
    </>
  );
};

const StyledTrackList = styled.ul`
  ${(props) => props.theme.trackList}
  ${(props) => props.theme.cardGradient}
  width: 100%;
  height: 100%;
`;

const StyledFadeContainer = styled.div`
  ${(props) => props.theme.scrollFade}
  position: fixed;
  height: 150px;
  width: 100%;
  bottom: 0;
  z-index: 99;
`;

export default TrackList;

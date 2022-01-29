import React from "react";
import styled from "styled-components";
import { Track } from "../components";

const TrackList = ({ charts }) => {
  return (
    <>
      <StyledTrackList>
        <StyledTrackListInner>
          {charts.map((data) => {
            return <Track key={data.id} {...data} />;
          })}
        </StyledTrackListInner>
      </StyledTrackList>
    </>
  );
};

const StyledTrackList = styled.ul`
  ${(props) => props.theme.trackList}
  width: 100%;
  list-style-type: none;
`;

const StyledTrackListInner = styled.div`

`;

export default TrackList;

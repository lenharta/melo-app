import React from "react";
import styled from "styled-components";
import { Track } from "../components";

const TrackList = ({ charts }) => {
  return (
    <>
      <StyledTrackList>
        {charts.map((data) => {
          return <Track key={data.id} {...data}/>;
        })}
      </StyledTrackList>
    </>
  );
};

const StyledTrackList = styled.ul`
  width: 100%;
`;

export default TrackList;

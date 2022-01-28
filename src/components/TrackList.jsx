import React from "react";
import styled from "styled-components";
import { Track } from "../components";

const TrackList = ({ title_short, artist, album, position, explicit_lyrics, id }, i) => {
  return (
    <>
      <StyledTrackList key={i}>
        <Track
          id={id}
          title_short={title_short}
          artist={artist}
          album={album}
          position={position}
          explicit_lyrics={explicit_lyrics}
        />
      </StyledTrackList>
    </>
  );
};

const StyledTrackList = styled.ul`
  width: 100%;
`;

export default TrackList;

import React from "react";
import styled from "styled-components";
import { MdExplicit } from "react-icons/md";

const Track = ({ title_short, artist, album, explicit_lyrics, id }) => {
  return (
    <>
      <StyledTrack>
        <StyledTrackInner>
          <StyledImg>
            <img src={album.cover_medium} />
          </StyledImg>

          <StyledSong>
            <h2>{title_short}</h2>
          </StyledSong>

          <StyledExplict>
            {explicit_lyrics === true ? <MdExplicit /> : null}
          </StyledExplict>

          <StyledTrackArtist>
            <p>{artist.name}</p>
          </StyledTrackArtist>
        </StyledTrackInner>
      </StyledTrack>
    </>
  );
};

const StyledTrack = styled.li`
  ${(props) => props.theme.track}
  margin: 0 auto;
  width: 100%;
`;

const StyledTrackInner = styled.div`
  ${({ theme }) => theme.mixins.flexCenter}
  justify-content: flex-start;
  width: 100%;

  img {
    max-width: 100px;
    border-radius: 10%;
  }
`;

const StyledImg = styled.div`
  justify-content: flex-start;
  flex: 1;
`;

const StyledSong = styled.div`
  // flex-wrap: nowrap;
  justify-content: flex-start;
  flex: 3;
  text-overflow: clip;
`;

const StyledExplict = styled.div`
  flex: 1;
`;

const StyledTrackArtist = styled.div`
text-align: right;
  flex: 1;
`;

export default Track;

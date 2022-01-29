import React from "react";
import styled from "styled-components";
import { MdExplicit } from "react-icons/md";

const Track = ({ title_short, artist, album, position, explicit_lyrics }) => {
  return (
    <>
      <StyledTrack >
        <StyledTrackInner>
          <StyledTrackPosition>
            <h3>{position}</h3>
          </StyledTrackPosition>

          <StyledTrackImg>
            <img src={album.cover_medium} />
          </StyledTrackImg>

          <StyledSongTitle>
            <h2>{title_short}</h2>
          </StyledSongTitle>

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
  ${({ theme }) => theme.mixins.flexEven};
  width: 100%;
`;
const StyledTrackInner = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  justify-content: flex-start;
  width: 100%;

  img {
    max-width: 100px;
    border-radius: 10%;
  }
`;

const StyledTrackPosition = styled.div``;

const StyledTrackImg = styled.div``;

const StyledSongTitle = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  justify-content: flex-start;
`;

const StyledExplict = styled.div``;

const StyledTrackArtist = styled.div``;

export default Track;

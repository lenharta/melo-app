import React from "react";
import styled from "styled-components";
import { MdExplicit } from "react-icons/md";

const Track = ({
  id,
  title_short,
  artist,
  album,
  position,
  explicit_lyrics,
}) => {
  return (
    <>
      <StyledTrack key={id}>
        <StyledTrackInner>
          <h3>{position}</h3>
          <img src={album.cover_medium} />
          <StyledSongContent>
            <h2>{title_short}</h2>
            {explicit_lyrics === true ? <MdExplicit /> : null}
          </StyledSongContent>
            <p>{artist.name}</p>
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

const StyledSongContent = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  justify-content: flex-start;
`;

export default Track;

import React from "react";
import styled from "styled-components";
import { MdExplicit } from "react-icons/md";

const Track = ({ title_short, artist, album, explicit_lyrics, id }, i) => {
  return (
    <>
      <StyledTrack aria-label={title_short} key={i}>
        <StyledTrackInner>
          <StyledImg src={album.cover_medium} alt={album.title} />

          <StyledSong>
            <h2>{title_short}</h2>
          </StyledSong>
          <StyledExplicit>
            {explicit_lyrics === true ? <MdExplicit /> : null}
          </StyledExplicit>

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
  ${({ theme }) => theme.mixins.flexCenter}
  padding: 10px 0;
  width: 100%;

  li:before {
    content: counters(index, ".", decimal-leading-zero);
    font-size: 1.5rem;
    text-align: right;
    font-weight: bold;
    min-width: 50px;
    padding-right: 12px;
    font-variant-numeric: tabular-nums;
    align-self: flex-start;
    background-image: linear-gradient(to bottom, aquamarine, orangered);
    background-attachment: fixed;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const StyledTrackInner = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: 1fr;
  width: 100%;

  @media (max-width: 480px) {
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
`;

const StyledImg = styled.img`
  grid-area: 1 / 1 / span 1 / span 1;
  border-radius: 10px;
  margin-right: 20px;
  width: 100px;
  height: 100px;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
    margin-right: 20px;
    grid-area: 1 / 1 / span 2 / span 1;
  }
`;

const StyledSong = styled.div`
  grid-area: 1 / 2 / span 1 / span 4;
  margin: auto 0;
  h2 {
    padding: 5px 0;
    text-overflow: ellipsis;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    background-clip: text;
  }

  p {
    padding: 10px 0;
  }

  @media (max-width: 480px) {
    grid-area: 1 / 2 / span 1 / span 6;
  }
`;

const StyledExplicit = styled.div`
  grid-area: 1 / 6 / span 1 / span 1;
  margin: auto 0 auto 20px;
  text-align: center;
  svg {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 480px) {
    grid-area: 1 / 8 / span 2 / span 2;
  }
`;

const StyledTrackArtist = styled.div`
  grid-area: 1 / 7 / span 1 / span 2;
  text-align: right;
  margin: auto 0;
  padding: 5px 0;

  @media (max-width: 480px) {
    grid-area: 2 / 2 / span 1 / span 4;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;

export default Track;

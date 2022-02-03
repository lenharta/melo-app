import React from "react";
import styled from "styled-components";
import { MdExplicit } from "react-icons/md";
import { Link } from "react-router-dom";

const Track = ({
  title_short,
  artist,
  album,
  explicit_lyrics,
  preview,
  id,
}) => {
  return (
    <>
      <StyledTrack
        aria-label={
          "Song Title: " + title_short + " Song Artist: " + artist.name
        }
      >
        <Link
          to="#"
          aria-label={
            "Play " + title_short + " Song Artist: " + artist.name
          }
        >
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
        </Link>
      </StyledTrack>
    </>
  );
};

const StyledTrack = styled.li`
  ${(props) => props.theme.track}
  ${({ theme }) => theme.mixins.flexCenter}
  margin: 10px 0;
  /* width: 100%; */
  list-style-type: none;


  &:first-child {
    margin-top: 0px;
  }
  &:last-child {
    margin-bottom: 0px;
  }

  a {
    height: 100%;
    padding: 10px;
    width: 100%;
    border-radius: 15px;

    @media (max-width: 1080px) {
      /* padding: 5px; */
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
    }
    @media (max-width: 768px) {
      /* padding: 5px; */
    }
    @media (max-width: 480px) {
    }
  }
`;

const StyledTrackInner = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: 1fr;
  margin: 0 auto;

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
    padding: 5px 0px;
    text-overflow: ellipsis;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    background-clip: text;

    @media (max-width: 480px) {
      padding: 5px 0;
    }
  }

  p {
    padding: 5px 0;
  }

  @media (max-width: 480px) {
    grid-area: 1 / 2 / span 1 / span 6;
  }
`;

const StyledExplicit = styled.div`
  grid-area: 1 / 6 / span 1 / span 0.5;
  margin: auto auto;
  text-align: center;
  svg {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 480px) {
    grid-area: 1 / 8 / span 2 / span 1;
    margin: auto auto;
  }
`;

const StyledTrackArtist = styled.div`
  grid-area: 1 / 7 / span 1 / span 2;
  text-align: right;
  margin: auto 0;
  padding: 5px 0;

  @media (max-width: 1080px) {
  }
  @media (max-width: 768px) {
  }

  @media (max-width: 480px) {
    grid-area: 2 / 2 / span 1 / span 6;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;

export default Track;

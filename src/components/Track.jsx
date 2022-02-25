import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import {
  MdExplicit,
  MdPlayDisabled,
  MdPauseCircleOutline,
  MdPlayCircleOutline,
} from "react-icons/md";
import { Link } from "react-router-dom";
import { colors } from "../utils";

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
      <Container
        aria-label={
          `Song Title: ${title_short}` + ", " + `Song Artist: ${artist.name}`
        }
      >
        <Link
          to="#"
          aria-label={"Play " + title_short + " Song Artist: " + artist.name}
        >
          <Inner>
            <img
              className="track__img"
              src={album.cover_medium}
              alt={album.title}
            />

            <SongTitle className="ellipsis__titlebox">
              <h5>{title_short}</h5>
            </SongTitle>

            <Artist className="ellipsis__titlebox">
              <h6>{artist.name}</h6>
            </Artist>

            <Explicit>
              {explicit_lyrics === true ? <MdExplicit /> : null}
            </Explicit>

            <PlayPause>
              <MdPlayCircleOutline />
            </PlayPause>
          </Inner>
        </Link>
      </Container>
    </>
  );
};

const Container = styled.li`
  ${(props) => props.theme.track}
  ${({ theme }) => theme.mixins.flexCenter}
  list-style-type: none;
  width: 100%;
  height: 100%;
  /* height: 110px;
  
  @media (max-width: 1600px) {
    height: 100px;
  }
  @media (max-width: 1080px) {
    height: 90px;
  }
  @media (max-width: 768px) {
    height: 80px;
  }
  @media (max-width: 480px) {
    height: 70px;
  } */

  // Router Link
  a {
    ${({ theme }) => theme.mixins.flexCenter}
    width: 100%;
    height: 100%;
    padding: 15px;

    &:hover,
    &:focus-visible {
    }
    @media (max-width: 1600px) {
    }
    @media (max-width: 1080px) {
      padding: 10px;
    }
    @media (max-width: 768px) {
      padding: 7.5px;
    }
    @media (max-width: 480px) {
      padding: 5px;
    }
  }
`;

const Inner = styled.div`
  grid-template-columns: repeat(12, 1fr);
  grid-template-areas:
    "a b b b b b b b b b d e"
    "a c c c c c c c c c d e";
  column-gap: 5px;
  display: grid;
  width: 100%;
  height: 100%;

  img {
    grid-area: a;
    align-self: center;
    justify-self: center;
  }

  @media (max-width: 1600px) {
  }
  @media (max-width: 1080px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
    grid-template-columns: repeat(11, 1fr);
    grid-template-areas:
      "a b b b b b b b b b d"
      "a c c c c c c c c c d";
  }
`;

const SongTitle = styled.div`
  grid-area: b;
  align-self: end;
  justify-self: start;
  width: 97%;
  height: 100%;

  h5 {
    ${({ theme }) => theme.mixins.flexCenter}
    justify-content: flex-start;
    align-items: flex-end;
    line-height: 1.4;
    height: 100%;
    margin-left: 25px;

    @supports (-webkit-background-clip: none) {
      -webkit-background-clip: text;
    }

    @media (max-width: 1600px) {
      margin-left: 20px;
    }
    @media (max-width: 1080px) {
      margin-left: 15px;
    }
    @media (max-width: 768px) {
      margin-left: 10px;
    }
    @media (max-width: 480px) {
    }
  }
`;

const Artist = styled.div`
  grid-area: c;
  justify-self: start;
  align-self: center;
  width: 97%;
  height: 100%;

  h6 {
    ${({ theme }) => theme.mixins.flexCenter}
    justify-content: flex-start;
    align-items: flex-start;
    height: 100%;
    margin-left: 25px;

    @supports (-webkit-background-clip: none) {
      -webkit-background-clip: text;
    }

    @media (max-width: 1600px) {
      margin-left: 20px;
    }
    @media (max-width: 1080px) {
      margin-left: 15px;
    }
    @media (max-width: 768px) {
      margin-left: 10px;
    }
    @media (max-width: 480px) {
    }
  }
`;

const Explicit = styled.div`
  grid-area: d;
  justify-self: center;
  align-self: center;
  svg {
    justify-self: center;
    align-self: center;
    width: 30px;
    height: 30px;

    @media (max-width: 768px) {
      width: 25px;
      height: 25px;
    }
    @media (max-width: 480px) {
      justify-self: end;
      align-self: start;
      text-align: right;
      width: 18px;
      height: 18px;
    }
  }

  @media (max-width: 1600px) {
  }
  @media (max-width: 1080px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;

const PlayPause = styled.div`
  grid-area: e;
  justify-self: center;
  align-self: center;
  svg {
    width: 50px;
    height: 50px;

    @media (max-width: 1600px) {
    }
    @media (max-width: 768px) {
      width: 40px;
      height: 40px;
    }
    @media (max-width: 480px) {
      display: none;
    }
  }
`;

export default Track;

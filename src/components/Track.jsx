import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import {
  MdExplicit,
  MdPlayDisabled,
  MdPauseCircleOutline,
  MdPlayCircleOutline,
} from "react-icons/md";
import { Link } from "react-router-dom";

const Track = ({
  title_short,
  artist,
  album,
  explicit_lyrics,
  preview,
  id,
}) => {
  const colors = [
    "#CFA97A",
    "#B8BBD3",
    "#D3B8B8",
    "#BEC5BF",
    "#BAD8F1",
    "#B4BDCB",
  ];
  const [randomColor, setRandomColor] = useState("");
  const randomize = colors[Math.floor(Math.random() * colors.length)];

  useEffect(() => {
    setRandomColor(randomize);
    // console.log(randomColor);
  }, []);

  return (
    <>
      <StyledTrackContainer
        randomColor={randomColor}
        aria-label={
          "Song Title: " + title_short + " Song Artist: " + artist.name
        }
      >
        <Link
          to="#"
          aria-label={"Play " + title_short + " Song Artist: " + artist.name}
        >
          <StyledTrackInner>
            <StyledTrackNumber>
              <h1>{1 * 2}</h1>
            </StyledTrackNumber>
            {/* <StyledTrackImg> */}
              <img src={album.cover_medium} alt={album.title} />
            {/* </StyledTrackImg> */}

            <StyledTrackSong>
              <h2>{title_short}</h2>
            </StyledTrackSong>
            <StyledTrackArtist>
              <h3>{artist.name}</h3>
            </StyledTrackArtist>
            <StyledTrackExplicit>
              {explicit_lyrics === true ? <MdExplicit /> : null}
            </StyledTrackExplicit>

            <StyledTrackPlay>
              <MdPlayCircleOutline />
            </StyledTrackPlay>
          </StyledTrackInner>
        </Link>
      </StyledTrackContainer>
    </>
  );
};

const StyledTrackContainer = styled.li`
  ${(props) => props.theme.track}
  ${({ theme }) => theme.mixins.flexCenter}
  list-style-type: none;
  height: 110px;
  width: 100%;
  
  @media (max-width: 1600px) {
    border-radius: 15px;
    height: 100px;
  }
  @media (max-width: 1080px) {
    border-radius: 10px;
    height: 90px;
  }
  @media (max-width: 768px) {
    /* height: 80px; */
  }
  @media (max-width: 480px) {
    /* height: 80px; */
  }
  
  // Router Link
  a {
    width: 100%;
    height: 100%;
    &:hover,
    &:focus-visible {
      background: ${(props) => props.randomColor};
    }
  }
  
  img {
    grid-area: b;
    align-self: center;
    justify-self: center;
    border-radius: 20px;
    height: 95px;
    width: 95px;
    /* max-height: 100px; */
    /* max-width: 100px; */
    @media (max-width: 1600px) {
      border-radius: 15px;
      height: 85px;
      width: 85px;
    }
    @media (max-width: 1080px) {
      border-radius: 10px;
      height: 75px;
      width: 75px;
    }
    @media (max-width: 768px) {
    }
    @media (max-width: 480px) {
    }
  }
  `;

const StyledTrackInner = styled.div`
  width: 97%;
  height: 100%;
  display: grid;
  grid-column-gap: 5px;
  grid-template-areas:
  "a b b c c c c c c c e f"
  "a b b d d d d d d d e f";
  grid-template-columns: repeat(12, 1fr);
  `;

const StyledTrackNumber = styled.div`
  ${(props) => props.theme.trackNumber}
  grid-area: a;
  justify-self: end;
  text-align: center;
  vertical-align: center;
  align-self: start;
  height: 80px;
  width: 80px;
  
  @media (max-width: 1600px) {
    height: 70px;
    width: 70px;
  }
  @media (max-width: 1080px) {
    height: 60px;
    width: 60px;
  }
  @media (max-width: 768px) {
    height: 50px;
    width: 50px;
  }
  
  h1 {
    height: 80px;
    width: 80px;
  
    @media (max-width: 1600px) {
      height: 70px;
      width: 70px;
    }
    @media (max-width: 1080px) {
      height: 60px;
      width: 60px;
    }
    @media (max-width: 768px) {
      height: 50px;
      width: 50px;
    }
  }
`;

const StyledTrackSong = styled.div`
  grid-area: c;
  align-self: end;
  justify-self: start;
  width: 98%;
  
  h2 {
    width: 98%;
    height: 40%;
    line-height: 1.4;
    margin-left: 20px;
    text-decoration: none;
    text-decoration-color: none;
    text-overflow: ellipsis;
    background-clip: text;
    white-space: nowrap;
    overflow: hidden;
    
    @supports (-webkit-background-clip: none) {
      -webkit-background-clip: text;
    }
    
    @media (max-width: 1600px) {
      line-height: 1.3;
      margin-left: 20px;
    }
    @media (max-width: 1080px) {
      line-height: 1.3;
      margin-left: 15px;
    }
    @media (max-width: 768px) {
      margin-left: 10px;
    }
    @media (max-width: 480px) {
      line-height: 1.2;
    }
  }
  `;

const StyledTrackArtist = styled.div`
  grid-area: d;
  align-self: start;
  justify-self: start;
  margin-right: 15px;
  width: 98%;

  h3 {
    width: 98%;
    height: 60%;
    line-height: 1.2;
    margin-left: 25px;
    text-decoration: none;
    text-decoration-color: none;
    text-overflow: ellipsis;
    background-clip: text;
    white-space: nowrap;
    overflow: hidden;

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
const StyledTrackExplicit = styled.div`
  grid-area: e;
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
      width: 20px;
      height: 20px;
    }
  }
`;

const StyledTrackPlay = styled.div`
  grid-area: f;
  justify-self: center;
  align-self: center;
  svg {
    /* justify-self: center;
    align-self: center; */
    width: 70px;
    height: 70px;

    @media (max-width: 1600px) {
      width: 60px;
      height: 60px;
    }
    @media (max-width: 768px) {
      width: 50px;
      height: 50px;
    }
    @media (max-width: 480px) {
      width: 40px;
      height: 40px;
    }
  }
`;

export default Track;

import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import {
  MdExplicit,
  MdPlayDisabled,
  MdPauseCircleOutline,
  MdPlayCircleOutline,
} from "react-icons/md";
import { Link } from "react-router-dom";
import { useNumberedList } from "../utils/hooks/useNumberedList";

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
  }, []);

  return (
    <>
      <Container
        randomColor={randomColor}
        aria-label={
          "Song Title: " + title_short + " Song Artist: " + artist.name
        }
      >
        <Link
          to="#"
          aria-label={"Play " + title_short + " Song Artist: " + artist.name}
        >
          <Inner>
            <img src={album.cover_medium} alt={album.title} />

            <SongTitle>
              <h2>{title_short}</h2>
            </SongTitle>

            <Artist>
              <h3>{artist.name}</h3>
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
  height: 115px;
  width: 100%;
  
  @media (max-width: 1600px) {
    height: 105px;
  }
  @media (max-width: 1080px) {
    height: 95px;
  }
  @media (max-width: 768px) {
    /* height: 80px; */
  }
  @media (max-width: 480px) {
    height: 85px;
  }
  
  // Router Link
  a { 
    border-radius: 0px;
    padding: 0 10px;
    /* padding: 0 10px; */
    width: 100%;
    height: 100%;
    &:hover,
    &:focus-visible {
      background: ${(props) => props.randomColor};
      border-radius: 15px;
      @media (max-width: 1080px) {
        border-radius: 10px;
      }
    }
    @media (max-width: 1600px) {
    }
    @media (max-width: 1080px) {
    }
    @media (max-width: 768px) {
    }
    @media (max-width: 480px) {
      padding: 0 7.5px;
    }
  }

  img {
    grid-area: a;
    align-self: center;
    justify-self: center;
    border-radius: 15px;
    height: 95px;
    width: 95px;

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
      height: 70px;
      width: 70px;
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
  height: 100%;
  width: 100%;

  @media (max-width: 1600px) {
  }
  @media (max-width: 1080px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }

  /* @media (max-width: 480px) {
    grid-template-areas:
      "a b b b b b b b b b b e"
      "a c c c c c c c c c c e";
  } */

  h1 {
    ${(props) => props.theme.TrackNumber}
    text-align: center;
    justify-self: center;
    align-self: center;
    height: 50px;
    width: 70px;

    @media (max-width: 1600px) {
    }
    @media (max-width: 1080px) {
    }
    @media (max-width: 768px) {
    }
    @media (max-width: 480px) {
      width: 60px;
    }
  }
`;

// const StyledTrackNumber = styled.div`
//   ${(props) => props.theme.trackNumber}
//   grid-area: a;
//   justify-self: end;
//   align-self: start;
//   height: 50px;
//   width: 50px;

//   @media (max-width: 1600px) {
//     height: 70px;
//     width: 70px;
//   }
//   @media (max-width: 1080px) {
//     height: 60px;
//     width: 60px;
//   }
//   @media (max-width: 768px) {
//     height: 50px;
//     width: 50px;
//   }
// `;

const SongTitle = styled.div`
  grid-area: b;
  align-self: end;
  justify-self: start;
  width: 98%;

  h2 {
    width: 98%;
    height: 40%;
    line-height: 1.4;
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
      line-height: 1.3;
    }
    @media (max-width: 1080px) {
      margin-left: 15px;
      line-height: 1.3;
    }
    @media (max-width: 768px) {
      margin-left: 10px;
    }
    @media (max-width: 480px) {
      line-height: 1.2;
    }
  }
`;

const Artist = styled.div`
  grid-area: c;
  align-self: start;
  justify-self: start;
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
      justify-self: start;
      align-self: start;
      text-align: left;
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
  justify-self: right;
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
    }
  }
`;

export default Track;

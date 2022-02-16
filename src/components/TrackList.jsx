import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Track } from "../components";
import { useNumberedList } from "../utils/hooks/useNumberedList";
import { colors } from "../utils";

const TrackList = ({ charts, id, countEnd }) => {
  const [count, setCount] = useState([]);
  const trackNumbers = useNumberedList(countEnd);
  const [randomColor, setRandomColor] = useState([]);
  const randomize = colors[Math.floor(Math.random() * colors.length)];

  useEffect(() => {
    setRandomColor(randomize);
    setCount(trackNumbers);
  }, []);

  return (
    <>
      <Container id={id}>
        <NumberList>
          {count.map((number) => (
            <TrackNumber key={number} randomColor={randomColor}>
              <h1>{number}.</h1>
            </TrackNumber>
          ))}
        </NumberList>
        <TrackWrapper>
          {charts.map((data, i) => {
            return <Track key={i} {...data} {...countEnd} />;
          })}
        </TrackWrapper>
      </Container>
    </>
  );
};

const Container = styled.div`
  ${(props) => props.theme.trackList}
  /* background-color: yellow; */
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-areas: "a b b b b b b b b b b b";
`;

const NumberList = styled.div`
  grid-area: a;
  height: 125px;
  width: 100%;

  @media (max-width: 1600px) {
    height: 105px;
  }
  @media (max-width: 1080px) {
    height: 95px;
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
    height: 85px;
  }
`;

const TrackNumber = styled.div`
  ${({ theme }) => theme.mixins.flexCenter}
  justify-content: flex-start;
  height: 100%;
  text-align: left;
  
  h1 {
    /* color: var(--primary-color); */
    
    color: ${(props) => props.randomColor};
    width: 100%;
    
    @media (max-width: 1600px) {
    }
    @media (max-width: 1080px) {
    }
    @media (max-width: 768px) {
    }
    @media (max-width: 480px) {
      justify-content: flex-end;
      width: 90%;
    }
    
    /* @supports (-webkit-text-fill-color: transparent) {
      -webkit-text-fill-color: transparent;
    } */
  }
  `;

const TrackWrapper = styled.div`
  grid-area: b;
  `;

export default TrackList;

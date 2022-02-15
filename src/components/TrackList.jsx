import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Track } from "../components";
import { useNumberedList } from "../utils/hooks/useNumberedList";

const TrackList = ({ charts, id, countEnd }) => {
  const [count, setCount] = useState([]);
  const trackNumbers = useNumberedList(countEnd);
  console.log(trackNumbers);

  useEffect(() => {
    setCount(trackNumbers);
  }, []);

  return (
    <>
      <Container id={id}>
        <NumberList>
          {count.map((number, i) => (
            <TrackNumber key={i}>
              <h1>{number}</h1>
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
  width: 100%;
  text-align: right;
  h1 {
    width: 100%;
    position: relative;
    padding: 10px;
    &::after {
      content: "";
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      z-index: -10;
    }
    @media (max-width: 1600px) {
    }
    @media (max-width: 1080px) {
    }
    @media (max-width: 768px) {
    }
    @media (max-width: 480px) {
    }
  }
`;

const TrackWrapper = styled.div`
  grid-area: b;
`;

export default TrackList;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Track } from "../components";
import { useNumberedList } from "../utils/hooks/useNumberedList";
import { colors } from "../utils";

const TrackList = ({ tracks, id, countEnd, isNumbered }) => {
  const [count, setCount] = useState([]);
  const [numberedList, setNumberedList] = useState(false);
  const trackNumbers = useNumberedList(countEnd);

  useEffect(() => {
    setCount(trackNumbers);
    setNumberedList(isNumbered);
  }, []);

  return (
    <>
      <Container id={id}>
        <Inner>
        {numberedList === true ? (
          <NumberList>
            {count.map((number) => (
              <TrackNumber key={number}>
                <h1>
                  {number}
                  <span>.</span>
                </h1>
                <div className="accent__line"></div>
              </TrackNumber>
            ))}
          </NumberList>
        ) : null}
        <TrackWrapper>
          {tracks.map((data, i) => {
            return <Track key={i} {...data} />;
          })}
        </TrackWrapper>
        </Inner>
      </Container>
    </>
  );
};

const Container = styled.div`
  ${({ theme }) => theme.mixins.flexCenter}
  flex-direction: column;
  ${(props) => props.theme.trackList}
  width: 100%;
`;

const Inner = styled.div`
  ${({ theme }) => theme.mixins.flexCenter}
  align-items: flex-start;
  flex-direction: row;
  width: 100%;
`;

const NumberList = styled.div`
  height: 125px;
  width: 10%;

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
  justify-content: flex-end;
  flex-direction: column;
  /* text-align: center; */
  height: 100%;
  width: 100%;
  
  h1 {
    width: 60%;
    
    @media (max-width: 1600px) {
    }
    @media (max-width: 1080px) {
    }
    @media (max-width: 768px) {
      width: 100%;
    }
    @media (max-width: 480px) {
    }
  }
`;

const TrackWrapper = styled.div`
  ${({ theme }) => theme.mixins.flexCenter}
  flex-direction: column;
  width: 100%;
`;

export default TrackList;

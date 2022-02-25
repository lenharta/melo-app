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
                  <h4>{number}.</h4>
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
  ${(props) => props.theme.trackList}
  flex-direction: column;
  width: 100%;
`;

const Inner = styled.div`
  ${({ theme }) => theme.mixins.flexCenter}
  align-items: flex-start;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;

const NumberList = styled.div`
  margin-right: 15px;
  width: 10%;
  height: 142px;
  
  @media (max-width: 1600px) {
    height: 132px;
  }
  @media (max-width: 1080px) {
    margin-right: 10px;
    height: 112px;
  }
  @media (max-width: 768px) {
    height: 97px;
  }
  @media (max-width: 480px) {
    height: 82px;
  }
`;

const TrackNumber = styled.div`
  ${({ theme }) => theme.mixins.flexCenter}
  justify-content: flex-end;
  align-items: flex-start;
  flex-direction: column;
  /* text-align: center; */
  height: 100%;
  width: 100%;

  h4 {
    width: 100%;

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
  ${({ theme }) => theme.mixins.flexCenter}
  flex-direction: column;
  width: 100%;
`;

export default TrackList;

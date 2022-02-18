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
        {isNumbered === true ? (
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
      </Container>
    </>
  );
};

const Container = styled.div`
  ${(props) => props.theme.trackList}
  grid-template-areas: "a b b b b b b b b b b b";
  grid-template-columns: repeat(12, 1fr);
  display: grid;
  width: 100%;

  /* ${(props) =>
    props.isNumbered === false
      ? 'grid-template-areas: "b b b b b b b b b b b b";'
      : null} */
`;

const NumberList = styled.div`
  height: 125px;
  width: 100%;
  grid-area: a;

  /* ${(props) => (props.isNumbered === false ? "display: none;" : null)} */

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
    width: 90%;

    @media (max-width: 1600px) {
    }
    @media (max-width: 1080px) {
    }
    @media (max-width: 768px) {
    }
    @media (max-width: 480px) {
      justify-content: flex-end;
    }
  }
`;

const TrackWrapper = styled.div`
  grid-area: b;
`;

export default TrackList;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Track } from "../components";
import { useNumberedList } from "../utils/hooks/useNumberedList";

const TrackList = ({ charts, id, countEnd }) => {
  // const [count, setCount] = useState()
  // const numberedTrackList = useNumberedList(101)
  // console.log(numberedTrackList);

  

  return (
    <>
      <Container id={id}>
        {/* {trackCount.data.map((data, i) => (
          <TrackNumber>
            <ul>
              <h1 key={i}>{data}.</h1>
            </ul>
          </TrackNumber>
        ))} */}
        {charts.map((data, i) => {
          return <Track key={i} {...data} />;
        })}
        {/* <StyledFadeContainer /> */}
      </Container>
    </>
  );
};

const Container = styled.ul`
  ${(props) => props.theme.trackList}
  width: 100%;
`;

const TrackNumber = styled.ul``;

// const StyledFadeContainer = styled.div`
//   ${(props) => props.theme.scrollFade}
//   position: fixed;
//   height: 150px;
//   width: 100%;
//   bottom: 0;
//   z-index: 99;
// `;

export default TrackList;

import axios from "../api/axios";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Chart } from "../components";

const Charts = ({ fetchURL }) => {
  const [chart, setChart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchURL);
      setChart(request.data.results);
      return request;
    };
    
    window.scrollTo(0, 0);
    fetchData();
  }, [fetchURL]);

  console.log(setChart);
  
  // make tabs for editorial top 10's
  return (
    <>
      <StyledChartsContainer>
        <StyledChartsInner>
          {chart?.data.map(
            ({ title_short, artist, album, position, explicit_lyrics, id }, i) => (
              <Chart
                key={i}
                id={id}
                title_short={title_short}
                artist={artist}
                album={album}
                position={position}
                explicit_lyrics={explicit_lyrics}
              />
            )
          )}
          <h1>Charts Top 10's</h1>
        </StyledChartsInner>
      </StyledChartsContainer>
    </>
  );
};

const StyledChartsContainer = styled.section``;

const StyledChartsInner = styled.div``;

export default Charts;

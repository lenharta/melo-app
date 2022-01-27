import { useState, useEffect } from "react";
import styled from "styled-components";
import { Track } from "../components";
import { getChartsEditorial } from "../Api";

const Charts = () => {
  const [chart, setChart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getChartsEditorial();
        setChart(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    window.scrollTo(0, 0);
    fetchData();
  }, []);

  return (
    <>
      <StyledChartContainer>
        <StyledChartInner>
          {chart?.tracks?.data.map(
            ({ title_short, artist, album, position, explicit_lyrics, id }) => (
              <StyledChartList>
                <Track
                  id={id}
                  title_short={title_short}
                  artist={artist}
                  album={album}
                  position={position}
                  explicit_lyrics={explicit_lyrics}
                />
              </StyledChartList>
            )
          )}
        </StyledChartInner>
      </StyledChartContainer>
    </>
  );
};

const StyledChartContainer = styled.section`
  width: 100%;
`;

const StyledChartInner = styled.div`
  margin: 0 auto;
  width: 100%;
`;

const StyledChartList = styled.ul`
  width: 100%;
`;

export default Charts;

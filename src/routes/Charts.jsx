import axios from "../api/axios";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { TrackList } from "../components";
import requests from "../api/Requests";

const Charts = () => {
  const [charts, setCharts] = useState([]);
  const [titled, setTitled] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchTopUS);
      setCharts(request.data.tracks.data);
      // setTitled(request.data);
      return request;
    };

    window.scrollTo(0, 0);
    fetchData();
  }, []);

  // make tabs for editorial top 10's
  return (
    <>
      <StyledChartsContainer>
        <ChartsHeader>
          <h1>Charts</h1>
        </ChartsHeader>

        <StyledChartsTracks>
          <TrackList charts={charts} />
        </StyledChartsTracks>
      </StyledChartsContainer>
    </>
  );
};

const StyledChartsContainer = styled.section`
  ${(props) => props.theme.chartsSection}

`;

const StyledChartsTracks = styled.div`
  width: 60%;

  @media (max-width: 1080px) {
    width: 100%;
  }
`;

const ChartsHeader = styled.div``;

export default Charts;

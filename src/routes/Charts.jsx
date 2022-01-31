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
      const response = await axios.get(requests.fetchTopUS);
      setCharts(response.data.tracks.data);
      return response;
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
          <div className="header__divider" />
        </ChartsHeader>

        <ChartsContent>
          <StyledChartsTracks>
            <TrackList charts={charts} />
          </StyledChartsTracks>
          <StyledChartInfo>
            {titled.map(({ title, picture }) => {
              <>
                <img src={picture} />
                <h1>{title}</h1>
              </>;
            })}
          </StyledChartInfo>
        </ChartsContent>
      </StyledChartsContainer>
    </>
  );
};

const StyledChartsContainer = styled.section`
  ${(props) => props.theme.chartsSection}
`;

const ChartsHeader = styled.div`
  margin: 50px 0px;
  ${({ theme }) => theme.mixins.flexCenter}
  align-items: flex-start;
  flex-direction: column;
  h1 {
    margin-bottom: 10px;
  }
`;

const ChartsContent = styled.div``;

const StyledChartsTracks = styled.div`
  width: 60%;

  @media (max-width: 1080px) {
    width: 100%;
  }
`;

const StyledChartInfo = styled.div``;

export default Charts;

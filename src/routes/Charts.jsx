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
      setTitled(response.data);
      // console.log(response.data);
      return response;
    };

    window.scrollTo(0, 0);
    fetchData();
  }, []);

  // make tabs for editorial top 10's
  return (
    <>
      <StyledChartsContainer>
        <ChartsContent>
          <ChartsHeader className="header__title">
            <h1>CHARTS</h1>
          </ChartsHeader>
          <StyledChartInfo>
            <img src={titled.picture_medium} />

            <StyledSelectMenuContainer>
              <select>
                <option value={titled.title}>{titled.title}</option>
              </select>
            </StyledSelectMenuContainer>
          </StyledChartInfo>
        </ChartsContent>
        <StyledChartsTracks>
          <TrackList charts={charts} />
        </StyledChartsTracks>
      </StyledChartsContainer>
    </>
  );
};

const StyledChartsContainer = styled.section`
  ${(props) => props.theme.chartsSection}
  ${({ theme }) => theme.mixins.flexCenter}
  flex-direction: column;
  width: 100%;
`;

const ChartsHeader = styled.div`
  padding: 20px 0px;
  margin: 5px 0px;
  @media (max-width: 1080px) {
    ${({ theme }) => theme.mixins.flexCenter}
    justify-content: flex-start;
    width: 100%;

    h1 {
      font-family: var(--barlow);
      font-weight: 900;
      letter-spacing: -1px;
    }
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
    padding: 15px 0;
  }
`;

const ChartsContent = styled.div`
  width: 100%;
  flex-direction: row;
`;

const StyledChartInfo = styled.div`
  ${({ theme }) => theme.mixins.flexBetween}
  padding: 60px 0;

  @media (max-width: 768px) {
    padding: 40px 0;
  }
  @media (max-width: 480px) {
    padding: 20px 0;
  }

  img {
    width: 150px;
    height: 150px;
    border-radius: 20px;
    margin-right: 20px;

    @media (max-width: 1080px) {
      border-radius: 10px;
      width: 100px;
      height: 100px;
    }

    @media (max-width: 768px) {
      width: 80px;
      height: 80px;
    }
  }
`;

const StyledChartsTracks = styled.div`
  width: 100%;
`;

const StyledSelectMenuContainer = styled.div`
  ${({ theme }) => theme.mixins.flexCenter}
  justify-content: flex-end;
  width: 100%;

  @media (max-width: 1080px) {
  }

  select {
    padding: 10px 20px;
    width: 50%;
    @media (max-width: 1080px) {
      width: 75%;
    }
    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

export default Charts;

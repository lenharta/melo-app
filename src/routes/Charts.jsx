import axios from "../api/axios";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { TrackList } from "../components";
import requests from "../api/Requests";

const Charts = () => {
  const [charts, setCharts] = useState([]);
  const [titled, setTitled] = useState([]);

  // const info = titled

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(requests.fetchTopUS);
      setCharts(response.data.tracks.data);
      setTitled(response.data);
      console.log(response.data);
      return response;
    };

    window.scrollTo(0, 0);
    fetchData();
  }, []);

  // make tabs for editorial top 10's
  return (
    <>
      <StyledChartsContainer>
        <ChartsHeader className="header__title">
          <h1>CHARTS</h1>
        </ChartsHeader>

        <ChartsContent>
          <StyledChartInfo key={titled.id}>
            <StyledSelectMenuContainer>
              <img src={titled.picture_medium} />
              <select>
                <option>{titled.title}</option>
              </select>
            </StyledSelectMenuContainer>
          </StyledChartInfo>

          <StyledChartsTracks>
            <TrackList charts={charts} id={titled.id} />
          </StyledChartsTracks>
        </ChartsContent>
      </StyledChartsContainer>
    </>
  );
};

const StyledChartsContainer = styled.section`
  ${({ theme }) => theme.mixins.flexCenter}
  flex-direction: column;
  width: 100%;
  position: relative;
`;

const ChartsHeader = styled.div`
  width: 100%;
  padding: 50px 0px;

  @media (max-width: 1080px) {
  }
  @media (max-width: 768px) {
    padding: 25px 0px;
  }
  @media (max-width: 480px) {
  }
`;

const ChartsContent = styled.div`
  ${(props) => props.theme.sectionBorder};

  width: 100%;
  display: grid;
  padding: 100px 0;

  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(1, 1fr);

  @media (max-width: 1080px) {
    grid-template-columns: auto;
    padding: 50px 0;
  }
  @media (max-width: 768px) {
    padding: 25px 0;
  }
  @media (max-width: 480px) {
    padding: 10px 0;
  }
`;

const StyledChartsTracks = styled.div`
  grid-area: 1 / 1 / span 1 / span 3;

  @media (max-width: 1080px) {
    grid-area: 2 / 1 / span 1 / span 1;
    width: 100%;
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;

const StyledChartInfo = styled.div`
  /* grid-area: 1 / 4 / span 1 / span 1; */
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  margin: 0 auto;
  margin-bottom: 50px;
  
  img {
    width: 200px;
    height: 200px;
    border-radius: 20px;
  margin-bottom: 25px;

    
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
  
  @media (max-width: 1080px) {
    grid-area: 1 / 1 / span 1 / span 1;
    width: 100%;
    padding: 5px;
  }
  @media (max-width: 768px) {
    margin-bottom: 25px;
  }
  @media (max-width: 480px) {
  }
`;

const StyledSelectMenuContainer = styled.div`
  ${({ theme }) => theme.mixins.flexCenter}
  flex-direction: column;

  select {
    width: 100%;
    padding: 10px 20px;

    @media (max-width: 1080px) {
      ${({ theme }) => theme.mixins.flexBetween}
      flex-direction: row;
      margin-left: 20px;
    }
    @media (max-width: 768px) {
    }
    @media (max-width: 480px) {
    }
  }

  @media (max-width: 1080px) {
    flex-direction: row;
    width: 75%;
  }
  @media (max-width: 768px) {
    width: 75%;
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`;

export default Charts;

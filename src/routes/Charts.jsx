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

        <ChartsContent className="section__border_right">
          <StyledChartInfo
            key={titled.id}
            className="card__background_aside section__border_noRight"
          >
            <StyledSelectMenuContainer className="section__image">
              <img src={titled.picture_xl} />
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
`;

const ChartsHeader = styled.div`
  // Custom Class
`;

const ChartsContent = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  padding: 100px 0;

  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(1, 1fr);

  @media (max-width: 1600px) {
    padding: 50px 0;
  }
  @media (max-width: 1080px) {
    grid-template-columns: auto;
    padding: 0px;
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
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
  grid-area: 1 / 4 / span 1 / span 1;
  margin: 0px 0px 0px 30px;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;

  @media (max-width: 1080px) {
    grid-area: 1 / 1 / span 1 / span 1;
    width: 100%;
    margin: 0 auto;
    border: none;
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;

const StyledSelectMenuContainer = styled.div`
  ${({ theme }) => theme.mixins.flexCenter}
  flex-direction: column;

  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 200px;
  margin: 0 auto;
  width: 250px;

  @media (max-width: 1600px) {
    width: 200px;
  }
  @media (max-width: 1080px) {
    ${({ theme }) => theme.mixins.flexCenter}
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
    flex-direction: row;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
  }
  @media (max-width: 768px) {
    justify-content: space-between;
  }
  @media (max-width: 480px) {
  }

  select {
    padding: 15px 0px;
    text-align: center;
    width: 100%;
    @media (max-width: 1080px) {
      justify-content: center;

      width: 60%;
    }
    @media (max-width: 768px) {
      padding: 10px 0px;
    }
    @media (max-width: 480px) {
    }
  }
`;

export default Charts;

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
      // console.log(response.data);
      setTitled(response.data);
      return response;
    };

    window.scrollTo(0, 0);
    fetchData();
  }, []);

  console.log(titled);
  // make tabs for editorial top 10's
  return (
    <>
      <StyledChartsContainer>
        <ChartsHeader>
          <h1 className="header__title">CHARTS</h1>
          <div className="header__divider" />
        </ChartsHeader>

        <ChartsContent>
          <StyledChartInfo>
            <img src={titled.picture_big} />
            <h1>{titled.title}</h1>
            <div className="header__divider" />
          </StyledChartInfo>
          <StyledChartsTracks>
            <TrackList charts={charts} />
          </StyledChartsTracks>
        </ChartsContent>
      </StyledChartsContainer>
    </>
  );
};

const StyledChartsContainer = styled.section`
  ${(props) => props.theme.chartsSection}
  width: 100%;
`;

const ChartsHeader = styled.div`
  margin: 50px 0px;
  ${({ theme }) => theme.mixins.flexCenter}
  align-items: flex-start;
  flex-direction: column;
  h1 {
    margin-bottom: 10px;
  }

  @media (max-width: 1080px) {
    display: none;
  }
`;

const ChartsContent = styled.div`
  ${({ theme }) => theme.mixins.flexBetween}
  position: relative;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;

  @media (max-width: 1080px) {
    ${({ theme }) => theme.mixins.flexCenter}
    flex-direction: column;
  }
`;

const StyledChartsTracks = styled.div`
  width: 65%;

  @media (max-width: 1080px) {
    width: 100%;
  }
`;

const StyledChartInfo = styled.div`
  width: 25%;
  position: absolute;
  right: 0px;
  top: 0px;
  @media (max-width: 1080px) {
    ${({ theme }) => theme.mixins.flexCenter}
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    position: relative;
    margin: 25px 0px;
  }

  h1 {
    position: fixed;
    margin-top: 40px;
    @media (max-width: 1080px) {
      position: relative;
      margin-bottom: 40px;
      width: 100%;
    }
  }
  img {
    position: fixed;
    width: 200px;
    height: 200px;
    margin-top: 150px;
    border-radius: 20px;
    @media (max-width: 1080px) {
      position: relative;
      margin-top: 0px;
      margin-bottom: 0px;
      width: 150px;
      height: 150px;
    }
    @media (max-width: 768px) {
      width: 80px;
      height: 80px;
    }
  }

  div {
    @media (min-width: 1080px) {
      display: none;
    }
  }
`;

export default Charts;

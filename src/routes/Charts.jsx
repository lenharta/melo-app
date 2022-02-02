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
        {titled.data?.map(({ picture_medium, title }, i) => {
          <ChartsContent>
            <StyledChartInfo key={i}>
              <img src={picture_medium} />

              <StyledSelectMenuContainer>
                <select>
                  <option>{title}</option>
                </select>
              </StyledSelectMenuContainer>
            </StyledChartInfo>
            ;
          </ChartsContent>;
        })}
        <StyledChartsTracks>
          <TrackList charts={charts} id={titled.id} />
        </StyledChartsTracks>
      </StyledChartsContainer>
    </>
  );
};

const StyledChartsContainer = styled.section`
  ${(props) => props.theme.chartsSection}
`;

const ChartsHeader = styled.div`
  padding: 20px 0px;
  margin: 5px 0px;

  @media (max-width: 1080px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
    padding: 15px 0;
  }
`;

const ChartsContent = styled.div``;

const StyledChartInfo = styled.div`
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

  @media (max-width: 1080px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;

const StyledChartsTracks = styled.div`
  @media (max-width: 1080px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;

const StyledSelectMenuContainer = styled.div`
  select {
    padding: 10px 20px;

    @media (max-width: 1080px) {
    }
    @media (max-width: 768px) {
    }
    @media (max-width: 480px) {
    }
  }

  @media (max-width: 1080px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;

export default Charts;

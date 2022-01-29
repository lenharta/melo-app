import axios from "../api/axios";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { TrackList } from "../components";
import requests from "../api/Requests";

const Charts = () => {
  const [charts, setCharts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchTopUS);
      setCharts(request.data?.tracks?.data);
      return request;
    };

    // window.scrollTo(0, 0);
    fetchData();
  }, []);

  // make tabs for editorial top 10's
  return (
    <>
      <StyledChartsContainer>
        <StyledChartsInner>
          <StyledChartsTracks>
            <TrackList charts={charts} />
          </StyledChartsTracks>
        </StyledChartsInner>
      </StyledChartsContainer>
    </>
  );
};

const StyledChartsContainer = styled.section`
  ${(props) => props.theme.chartsSection}
  width: 100%;
  border-radius: 30px;
  padding: 5px;
`;

const StyledChartsInner = styled.div`
  ${(props) => props.theme.chartsInner}
  border-radius: 30px;
  padding: 75px auto;

  @media (max-width: 768px) {
    padding: 50px auto;
  }

  @media (max-width: 480px) {
    padding: 25px auto;
  }
  
`;

const StyledChartsTracks = styled.div`
width: 100%;
padding: 75px auto;

  @media (max-width: 768px) {
    padding: 50px auto;
  }

  @media (max-width: 480px) {
    padding: 25px auto;
  }

  /* @media (max-width: 1080px) {
    padding: 100px;
  } */

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 0px;
  }

  img {
    max-width: 75px;
    border-radius: 10%;
  }
`;

export default Charts;

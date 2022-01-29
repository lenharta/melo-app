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
          <h1>US Top 100</h1>
          <TrackList charts={charts} />
        </StyledChartsInner>
      </StyledChartsContainer>
    </>
  );
};

const StyledChartsContainer = styled.section``;

const StyledChartsInner = styled.div``;

export default Charts;

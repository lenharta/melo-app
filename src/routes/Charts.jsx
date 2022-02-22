import axios from "../api/axios";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { TrackList } from "../components";
import requests from "../api/Requests";
import { motion } from "framer-motion";
import { spring } from "../utils";

const Charts = () => {
  const [tracks, setTracks] = useState([]);
  const [titled, setTitled] = useState([]);

  // const info = titled

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(requests.fetchTopUS);
      setTracks(response.data.tracks.data);
      setTitled(response.data);
      console.log(response.data);
      return response;
    };

    // window.scrollTo(0, 0);
    fetchData();
  }, []);

  // make tabs for editorial top 10's
  return (
    <>
      <Container>
        <ChartsTitle className="header__title">
          <h1>{titled.title}</h1>
        </ChartsTitle>

        <Inner>
          {/* <ChartInfo
            key={titled.id}
          >
            <ChartSelect transition={spring} className="section__image">
              <img src={titled.picture_xl} />
              <select>
                <option>{titled.title}</option>
              </select>
            </ChartSelect>
          </ChartInfo> */}

          <ChartTracks>
            <TrackList tracks={tracks} id={titled.id} isNumbered={true} countEnd={101} />
          </ChartTracks>
        </Inner>
      </Container>
    </>
  );
};

const Container = styled.section`
  ${( props ) => props.theme.chartsContainer}
  // Custom Section Class in Global Styles
`;

const Inner = styled.div`
  ${({ theme }) => theme.mixins.flexCenter}
  width: 100%;
  @media (max-width: 1600px) {
  }
  @media (max-width: 1080px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;

const ChartsTitle = styled.div`
  // Custom Class header__title
  flex-direction: column;
  align-items: flex-start;
`;

const ChartTracks = styled.div`
  width: 100%;
  @media (max-width: 1600px) {
  }
  @media (max-width: 1080px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;

const ChartSelect = styled.div`
  @media (max-width: 1600px) {
  }
  @media (max-width: 1080px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;

// const ChartSelect = styled(motion.div)`
//   ${({ theme }) => theme.mixins.flexCenter}
//   flex-direction: column;

//   position: -webkit-sticky; /* Safari */
//   position: sticky;
//   top: 200px;
//   margin: 0px auto;
//   width: 250px;
//   select {
//     padding: 15px 0px;
//     text-align: center;
//     width: 100%;
//   }

//   @media (max-width: 1600px) {
//     width: 200px;
//   }
//   @media (max-width: 1080px) {
//     ${({ theme }) => theme.mixins.flexCenter}
//     justify-content: space-between;
//     flex-direction: column;
//     width: 100%;
//     padding: 0px 10px;
//     margin: 25px 0px;

//     flex-direction: row;
//     select {
//       justify-content: center;
//       margin-left: 20px;
//     }
//   }
//   @media (max-width: 768px) {
//     justify-content: space-between;
//     padding: 0px 5px;
//     select {
//       padding: 10px 0px;
//     }
//   }
//   @media (max-width: 480px) {
//   }
// `;

export default Charts;

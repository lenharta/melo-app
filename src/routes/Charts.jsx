import axios from "../api/axios";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { TrackList } from "../components";
import { motion } from "framer-motion";
import { spring } from "../utils";

const Charts = () => {
  const [tracks, setTracks] = useState([]);
  const [titled, setTitled] = useState([]);

  const chartRequests = {
    fetchTopGermany: "/playlist/1111143121/",
    fetchTopMexico: "/playlist/1111142361/",
    fetchTopBrazil: "/playlist/1111141961/",
    fetchTopWorld: "/playlist/3155776842/",
    fetchTopUk: "/playlist/1111142221/",
    fetchTopUS: "/playlist/1313621735",
  };

  // const info = titled

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(chartRequests.fetchTopUS);
      setTracks(response.data.tracks.data);
      setTitled(response.data);
      console.log(response.data);
      return response;
    };

    fetchData();
  }, []);

  // make tabs for editorial top 10's
  return (
    <>
      <Container>
        <Inner>
          <ChartsHeader transition={spring}>
            <img className="tab__img" src={titled.picture_xl} />
            <h2>{titled.title}</h2>
            {/* <Dropdown>
              <DropItem></DropItem>
            </Dropdown> */}
          </ChartsHeader>

          <div className="accent__line"></div>

          <ChartTracks>
            <TrackList
              tracks={tracks}
              id={titled.id}
              isNumbered={true}
              countEnd={101}
            />
          </ChartTracks>
        </Inner>
      </Container>
    </>
  );
};

const Container = styled.section`
  // SECTION TEMPLATE CLASS
`;

const Inner = styled.div`
  ${({ theme }) => theme.mixins.flexCenter}
  flex-direction: column;
  width: 100%;
  height: 100%;
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

const ChartsHeader = styled.div`
  ${({ theme }) => theme.mixins.flexBetween}
  ${(props) => props.theme.ChartsHeader}
  align-items: flex-end;
  width: 100%;
  
  h2 {
    padding: 25px 0px;
    
    @media (max-width: 1600px) {
    }
    @media (max-width: 1080px) {
      padding: 15px 0px;
    }
    @media (max-width: 768px) {
    }
    @media (max-width: 480px) {
      padding: 10px 0px;
    }
  }
`;

const Dropdown = styled.select`
  @media (max-width: 1600px) {
  }
  @media (max-width: 1080px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;

const DropItem = styled.div`
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

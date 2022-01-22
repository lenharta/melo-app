import { useState, useEffect } from "react";
import styled from "styled-components";
import { getTopUsCharts } from "../Api";

const USCharts = () => {
  const [usChart, setUsChart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getTopUsCharts();
        setUsChart(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <StyledChartContainer>
        <StyledChart>
          <h1>USA Top 100</h1>
          {/* <ol>
            {usChart?.tracks?.data.map(
              ({ title_short, artist, album, id }, i) => (
                <li key={i}>
                  <img src={album.cover_big} alt="" />
                  <div>
                    <a id={id}>
                      <h2>{title_short}</h2>
                    </a>
                    <a id={artist.id}>
                      <p>{artist.name}</p>
                    </a>
                  </div>
                </li>
              )
            )}
          </ol> */}
        </StyledChart>
      </StyledChartContainer>
    </>
  );
};

const StyledChartContainer = styled.section`
  max-width: 100%;
`;

const StyledChart = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  width: 100%;

  ol {
    width: 100%;
    border-radius: 10px;
    padding: 0 25px 0;
  }

  li {
    ${({ theme }) => theme.mixins.flexBetween};
    width: 100%;
    text-align: right;
    margin: 25px 0;
  }

  h1 {
    margin-bottom: 50px;
  }

  h2 {
    margin-bottom: 10px;
  }

  img {
    width: 125px;
    border-radius: 10px;

    @media (max-width: 1080px) {
      width: 100px;
    }

    @media (max-width: 480px) {
      width: 75px;
    }
  }
`;

export default USCharts;

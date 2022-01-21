import { useState, useEffect } from "react";
import styled from "styled-components";
import { getTopUsCharts } from "../Api";

const Charts = () => {
  const [usChart, setUsChart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getTopUsCharts();
      setUsChart(data);
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <StyledChartContainer>
        <h1>USA Top 100</h1>
        <StyledChart>
          <ol>
            {usChart?.tracks?.data.map(
              ({ title_short, artist, album, id }, i) => (
                <li key={title_short}>
                  <img src={album.cover_big} alt="" />
                  <div>
                    <a id={id}>
                      <h2>{title_short}</h2>
                    </a>
                    <a>
                      <p>{artist.name}</p>
                    </a>
                  </div>
                </li>
              )
            )}
          </ol>
        </StyledChart>
      </StyledChartContainer>
    </>
  );
};

const StyledChartContainer = styled.section`
  max-width: 1200px;

  h1 {
    margin-bottom: 50px;
  }
`;

const StyledChart = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};

  ol {
    border-radius: 10px;
    padding: 0 25px 0;
  }

  li {
    ${({ theme }) => theme.mixins.flexBetween};
    width: 100%;
    text-align: right;
    margin: 25px 0;
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

export default Charts;

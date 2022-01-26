import { useState, useEffect } from "react";
import styled from "styled-components";
import { getTopUsCharts } from "../Api";

const USCharts = () => {
  const [usChart, setUsChart] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const { data } = await getTopUsCharts();
  //       setUsChart(data);
  //       console.log(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   window.scrollTo(0, 0);
  //   fetchData();
  // }, []);

  return (
    <>
      <StyledChartContainer>
        <StyledChart>
          <h1>Charts</h1>
          <ol>
            <div>
              <li>list item</li>
              <li>list item</li>
              <li>list item</li>
              <li>list item</li>
              <li>list item</li>
              <li>list item</li>
              <li>list item</li>
              <li>list item</li>
              <li>list item</li>
              <li>list item</li>
              <li>list item</li>
            </div>
            <div>
              <li>list item</li>
              <li>list item</li>
              <li>list item</li>
              <li>list item</li>
              <li>list item</li>
              <li>list item</li>
              <li>list item</li>
              <li>list item</li>
              <li>list item</li>
              <li>list item</li>
              <li>list item</li>
            </div>
          </ol>

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
width: 100%;
`;

const StyledChart = styled.div`
  ${({ theme }) => theme.mixins.flexcenter};
  width: 100%;
  ol {
    width: 90%;
    div {
      flex-direction: row;
      width: 45%;
      li {

      }
    }
  }
`;

export default USCharts;

import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { getTopUsCharts } from '../Api'

const Charts = () => {
  const [usChart, setUsChart] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getTopUsCharts()
      setUsChart(data)
      console.log(data);
    }
    fetchData()
  }, [])
  
  return (
    <>
      <StyledChartContainer>
        <h1>{usChart.title}</h1>
        <StyledChart>
          <ol type='1'>
            {usChart?.tracks?.data.map(({title, artist, album, id}, i) => (
              <li key={i}>
                <img src={album.cover_big} alt="" />
                <div>
                  <a id={id}><h2>{title}</h2></a>
                  <a><p>{artist.name}</p></a>
                </div>
              </li>
            ))}
          </ol>
        </StyledChart>
      </StyledChartContainer>
    </>
  )
}

const StyledChartContainer = styled.section`
  max-width: 1000px;

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

  img {
    width: 150px;
    border-radius: 10px;
  }
`;

export default Charts
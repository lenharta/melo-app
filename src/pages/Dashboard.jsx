import React, { useEffect, useState } from 'react'
import { getTopUsCharts } from '../Api'


const Dashboard = () => {
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
      <h1>{usChart.title}</h1>
      <img src={usChart.picture} alt=""/>
      {usChart.tracks.data.map(({title, album}, i) => (
        <ul key={i}>
          <p>{title}</p>
          <img src={album.cover} alt="" />
        </ul>
      ))}
    </>
  )
}

export default Dashboard

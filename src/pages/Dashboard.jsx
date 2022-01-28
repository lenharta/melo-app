import React, { useEffect } from "react";
import styled from "styled-components";

const Dashboard = () => {
  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const { data } = await getChartsEditorial();
    //     setChart(data);
    //     console.log(data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };

    window.scrollTo(0, 0);
    // fetchData();
  }, []);

  return (
    <>
      <StyledDashboardContainer>
        <StyledDashboardInner>
          <h1>Dashboard</h1>
        </StyledDashboardInner>
      </StyledDashboardContainer>
    </>
  );
};

const StyledDashboardContainer = styled.section``;

const StyledDashboardInner = styled.div``;

export default Dashboard;

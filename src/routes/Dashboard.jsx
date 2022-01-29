import React, { useEffect } from "react";
import styled from "styled-components";

const Dashboard = () => {
  // useEffect(() => {
    
  // }, []);

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

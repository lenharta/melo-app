import React, { useEffect } from "react";
import styled from "styled-components";

const Dashboard = () => {
  // useEffect(() => {
    
  // }, []);

  return (
    <>
      <StyledDashboardContainer>
        <StyledDashboardInner>
        <ChartsHeader className="header__title">
          <h1>DASHBOARD</h1>
        </ChartsHeader>
        </StyledDashboardInner>
      </StyledDashboardContainer>
    </>
  );
};

const StyledDashboardContainer = styled.section``;

const StyledDashboardInner = styled.div``;

const ChartsHeader = styled.div`
  // Custom Class
`;

export default Dashboard;

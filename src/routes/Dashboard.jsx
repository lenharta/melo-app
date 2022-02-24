import React, { useEffect } from "react";
import styled from "styled-components";

const Dashboard = () => {
  // useEffect(() => {

  // }, []);

  return (
    <>
      <Container>
        <Inner>
          <Examples>
            <a>Germany</a><br />
            <span>Example SPAN</span>
            {/* For Track Titles & Artists */}
            <h1>Example HEADER H1</h1>
            <h2>Example HEADER H2</h2>
            <h4>Example HEADER H4</h4>

            {/* For Track Titles & Artists */}
            <h3>Example HEADER H3</h3>
            <h5>Example HEADER H5</h5>

            {/* Regular Text */}
            <p>Example Paragraph TAG</p>

          </Examples>
        </Inner>
      </Container>
    </>
  );
};

const Container = styled.section`
`;

const Inner = styled.div`
  ${({ theme }) => theme.mixins.flexCenter}
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`;

const Examples = styled.div`
  width: 100%;
`;

export default Dashboard;

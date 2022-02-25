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
            {/* Logos */}
            <span>Example SPAN</span>
            {/* Headers */}
            <br />
            <br />
            <br />
            <br />
            <h1>Example HEADER H1</h1>
            <h2>Example HEADER H2</h2>
            <h3>Example HEADER H3</h3>
            <h4>Example HEADER H4</h4>
            <h5>Example HEADER H5</h5>
            <h6>Example HEADER H6</h6>

            <br />
            <br />
            <br />
            <br />
            {/* Regular Text */}
            <p>Example Paragraph TAG</p>

            {/* Links */}
            <a>Germany</a><br />
          </Examples>
        </Inner>
      </Container>
    </>
  );
};

const Container = styled.section`
width: 100%;
`;

const Inner = styled.div`
  ${({ theme }) => theme.mixins.flexCenter}
  flex-direction: column;
  justify-content: flex-start;
`;

const Examples = styled.div`
`;

export default Dashboard;

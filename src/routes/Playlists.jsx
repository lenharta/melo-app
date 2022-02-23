import React, { useEffect, useState } from "react";
import styled from "styled-components";
import requests from "../api/Requests";
import axios from "../api/axios";
import { TrackList } from "../components";

const Playlists = () => {
  return (
    <>
      <Container>
        <Inner>
          <TrackWrapper>

          </TrackWrapper>
        </Inner>
      </Container>
    </>
  );
};

const Container = styled.section``;
const Inner = styled.div``;
const TrackWrapper = styled.div``;

export default Playlists;

import React from 'react';
import styled from "styled-components";
import { TrackList } from "../components";

const Chart = ({ title_short, artist, album, position, explicit_lyrics, id }) => {
  return (
    <>
      <StyledChartContainer>
        <StyledChartInner>
              <StyledChartTracks>
                <TrackList
                  id={id}
                  title_short={title_short}
                  artist={artist}
                  album={album}
                  position={position}
                  explicit_lyrics={explicit_lyrics}
                />
              </StyledChartTracks>
        </StyledChartInner>
      </StyledChartContainer>
    </>
  )
};

const StyledChartContainer = styled.div`
  width: 100%;
`;

const StyledChartInner = styled.div`
  margin: 0 auto;
  width: 100%;
`;

const StyledChartTracks = styled.div``;

export default Chart;

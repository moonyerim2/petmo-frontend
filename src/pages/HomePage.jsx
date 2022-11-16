import React from "react";
import styled from "styled-components";
import { FeedHeader, SearchBar, Board, Nav, WritePostBtn } from "../components";

const StyledHeader = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${({ theme: { colors } }) => colors.white};
`;

export function HomePage() {
  return (
    <>
      <StyledHeader>
        <FeedHeader />
        <SearchBar />
      </StyledHeader>
      <Board />
      <WritePostBtn />
      <Nav />
    </>
  );
}

export default HomePage;

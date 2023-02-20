import React from "react";
import styled from "styled-components";
import { FeedHeader, SearchBar } from "../../components";

const HeaderWrapper = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  background-color: ${({ theme: { color } }) => color.white};
`;

function Header() {
  return (
    <HeaderWrapper>
      <FeedHeader />
      <SearchBar />
    </HeaderWrapper>
  );
}

export default Header;

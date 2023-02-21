import React from "react";
import styled from "styled-components";
import { FeedHeader, HomePageTabBar } from "../../components";

const HeaderWrapper = styled.div`
  width: 100%;
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
      <HomePageTabBar />
    </HeaderWrapper>
  );
}

export default Header;

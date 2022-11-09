import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 57px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  background-color: white;
`;

function Nav() {
  return (
    <Wrapper>
      <span>피드</span>
      &nbsp;
      <span>관심목록</span>
      &nbsp;
      <span>프로필</span>
    </Wrapper>
  );
}

export default Nav;

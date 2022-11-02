import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  box-sizing: border-box;
  background: rgba(241, 241, 245, 1);
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Board() {
  return (
    <Wrapper>
      <span>피드</span>
    </Wrapper>
  );
}

export default Board;

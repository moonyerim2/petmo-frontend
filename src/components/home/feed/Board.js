import React from "react";
import styled from "styled-components";
import Card from "../card/Card";

const Wrapper = styled.div`
  box-sizing: border-box;
  background: rgba(241, 241, 245, 1);
  width: 100%;
  height: 500px;
`;

function Board() {
  return (
    <Wrapper>
      <Card />
    </Wrapper>
  );
}

export default Board;

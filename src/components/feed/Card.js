import React from "react";
import styled from "styled-components";
import Profile from "./Profile";

const Wrapper = styled.div`
  box-sizing: border-box;
  background-color: white;
  width: 100%;
  height: 300px;
  display: flex;
  padding: 10px;
`;

function Card() {
  return (
    <Wrapper>
      <Profile />
    </Wrapper>
  );
}
export default Card;

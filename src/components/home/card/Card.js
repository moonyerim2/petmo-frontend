import React from "react";
import styled from "styled-components";
import Profile from "./Profile";
import Content from "./Content";
import ButtonBox from "./buttons/ButtonBox";

const Wrapper = styled.div`
  box-sizing: border-box;
  background-color: white;
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

function Card() {
  return (
    <Wrapper>
      <Profile />
      <Content />
      <ButtonBox />
    </Wrapper>
  );
}
export default Card;

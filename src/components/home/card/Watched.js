import React from "react";
import styled from "styled-components";

const Number = styled.span`
  margin-left: 2px;
`;
function Watched() {
  return (
    <>
      <span>조회수</span>
      <Number>11</Number>
    </>
  );
}
export default Watched;

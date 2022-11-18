import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 116px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    color: #999999;
  }
`;
function BlankComment() {
  return (
    <Wrapper>
      <div>아직 댓글이 없어요.</div>
      <div>가장 먼저 댓글을 남겨보세요.</div>
    </Wrapper>
  );
}

export default BlankComment;

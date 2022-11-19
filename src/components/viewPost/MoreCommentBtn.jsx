import React from "react";
import styled from "styled-components";

const Button = styled.button`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 140%;
  color: #767676;
  margin-left: 56px;
`;
function MoreCommentBtn() {
  return <Button>답글달기</Button>;
}

export default MoreCommentBtn;

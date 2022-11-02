import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  box-sizing: border-box;
  background: rgba(241, 241, 245, 1);
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchBarCategory = () => {
  return (
    <Wrapper>
      <span>전체</span>
      &nbsp;
      <span>반려질문</span>
      &nbsp;
      <span>반려고수</span>
      &nbsp;
      <span>장소후기</span>
      &nbsp;
    </Wrapper>
  );
};

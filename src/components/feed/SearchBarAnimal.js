import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Animal = styled.span`
  color: rgba(153, 153, 153, 1);
  font-family: Pretendard;
  font-weight: Medium;
  font-size: 16px;
  opacity: 1;
`;

function SearchBarAnimal() {
  return (
    <Wrapper>
      <Animal>
        <span>전체</span>
        <span>강아지</span>
        <span>고양이</span>
        <span>물고기</span>
        <span>햄스터</span>
        <span>파충류</span>
        <span>기타</span>
      </Animal>
    </Wrapper>
  );
}

export default SearchBarAnimal;

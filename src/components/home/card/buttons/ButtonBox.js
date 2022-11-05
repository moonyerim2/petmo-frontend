import React from "react";
import styled from "styled-components";
import { ReactComponent as CommentIcon } from "../../../../css/icon/CommentIcon.svg";
import { ReactComponent as BookmarkIcon } from "../../../../css/icon/BookmarkIcon.svg";
import { ReactComponent as HeartIcon } from "../../../../css/icon/HeartIcon.svg";
const Wrapper = styled.div`
  box-sizing: border-box;
  background-color: white;
  border-top: 1px solid rgba(241, 241, 245, 1);
  width: 100%;
  height: 40px;
  display: flex;
  position: absolute;
  bottom: 0px;
  justify-content: space-between;
  align-items: center;
  padding-right: 10px;
  padding-left: 10px;
`;
const Buttons = styled.div`
  display: flex;
`;
const Button = styled.button`
  background-color: white;
  font-family: Pretendard;
  font-weight: Regular;
  font-size: 14px;
  width: 42px;
  opacity: 1;
  border: none;
  display: flex;
  justify-content: space-between;
`;
const Watched = styled.div`
  color: #9a9a9a;
  font-family: Pretendard;
  font-weight: Regular;
  font-size: 14px;
  opacity: 1;
`;

function ButtonBox() {
  return (
    <Wrapper>
      <Buttons>
        <Button>
          <HeartIcon />
          <span>11</span>
        </Button>
        <Button>
          <BookmarkIcon />
          <span>12</span>
        </Button>
        <Button>
          <CommentIcon />
          <span>10</span>
        </Button>
      </Buttons>
      <Watched>
        <span>조회수</span>
        <span>27</span>
      </Watched>
    </Wrapper>
  );
}
export default ButtonBox;

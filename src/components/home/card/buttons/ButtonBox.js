import React from "react";
import styled from "styled-components";
import HeartBtn from "./HeartBtn.js";
import BookmarkBtn from "./BookmarkBtn.js";
import CommentBtn from "./CommentBtn.js";
import Watched from "./Watched.js";

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
const Column_buttons = styled.div`
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
const Collumn_watched = styled.div`
  color: #9a9a9a;
  font-family: Pretendard;
  font-weight: Regular;
  font-size: 14px;
  opacity: 1;
`;

function ButtonBox() {
  return (
    <Wrapper>
      <Column_buttons>
        <Button>
          <HeartBtn />
        </Button>
        <Button>
          <BookmarkBtn />
        </Button>
        <Button>
          <CommentBtn />
        </Button>
      </Column_buttons>
      <Collumn_watched>
        <Watched />
      </Collumn_watched>
    </Wrapper>
  );
}
export default ButtonBox;

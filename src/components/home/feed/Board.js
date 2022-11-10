import React from "react";
import styled from "styled-components";
import CardList from "./CardList";

const Wrapper = styled.div`
  box-sizing: border-box;
  background: rgba(241, 241, 245, 1);
  width: 100%;
  height: 502px;
  margin-bottom: 1px;
`;
const cardsDummyList = [
  {
    id: 1,
    author: "각이",
    village: "시흥시",
    time: "3분전",
    content: "내용",
    myLike: true,
    myBookmark: false,
    likeNumber: 2,
    bookmarkNumber: 3,
    commentNumber: 6,
  },
  {
    id: 2,
    author: "챌이",
    village: "남양주시",
    time: "5분전",
    content: "내용",
    myLike: false,
    myBookmark: true,
    likeNumber: 2,
    bookmarkNumber: 3,
    commentNumber: 6,
  },
  {
    id: 3,
    author: "림",
    village: "대구시",
    time: "9분전",
    content: "내용",
    myLike: false,
    myBookmark: true,
    likeNumber: 4,
    bookmarkNumber: 1,
    commentNumber: 8,
  },
  {
    id: 4,
    author: "민",
    village: "대구시",
    time: "9분전",
    content: "내용",
    myLike: false,
    myBookmark: true,
    likeNumber: 4,
    bookmarkNumber: 1,
    commentNumber: 8,
  },
];
function Board() {
  return (
    <Wrapper>
      <CardList cardsDummyList={cardsDummyList} />
    </Wrapper>
  );
}

export default Board;

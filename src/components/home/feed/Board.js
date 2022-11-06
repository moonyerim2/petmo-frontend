import React from "react";
import styled from "styled-components";
import CardList from "./CardList";

const Wrapper = styled.div`
  box-sizing: border-box;
  background: rgba(241, 241, 245, 1);
  width: 100%;
  height: 500px;
`;
const cardsDummyList = [
  {
    id: 1,
    author: "각이",
    village: "시흥시",
    content: "내용",
    likeNumber: 2,
    bookmarkNumber: 3,
    commentNumber: 6,
  },
  {
    id: 2,
    author: "챌이",
    village: "남양주시",
    content:
      "내용이 매우매우ㅐㅁ우매ㅜㅇ매우매우매우매우ㅐㅁ우매ㅜㅇ매우매우매우매우ㅐㅁ우매ㅜㅇ매우매우매우매우ㅐㅁ우매ㅜㅇ매우매우매우매우ㅐㅁ우매ㅜㅇ매우매우매우매우ㅐㅁ우매ㅜㅇ매우매우매우매우ㅐㅁ우매ㅜㅇ매우매우매우매우ㅐㅁ우매ㅜㅇ매우매우매우매우ㅐㅁ우매ㅜㅇ매우매우매우매우ㅐㅁ우매ㅜㅇ매우매우매우매우ㅐㅁ우매ㅜㅇ매우매우매우매우ㅐㅁ우매ㅜㅇ매우매우매우매우ㅐㅁ우매ㅜㅇ매우매우매우매우ㅐㅁ우매ㅜㅇ매우매우매우매우ㅐㅁ우매ㅜㅇ매우매우매우매우ㅐㅁ우매ㅜㅇ매우매우매우매우ㅐㅁ우매ㅜㅇ매우매우매우매우ㅐㅁ우매ㅜㅇ매우매우매우매우ㅐㅁ우매ㅜㅇ매우매우매우매우ㅐㅁ우매ㅜㅇ매우매우매우매우ㅐㅁ우매ㅜㅇ매우매우매우매우ㅐㅁ우매ㅜㅇ매우매우매우매우ㅐㅁ우매ㅜㅇ매우매우매우매우ㅐㅁ우매ㅜㅇ매우매우 길다",
    likeNumber: 3,
    bookmarkNumber: 5,
    commentNumber: 7,
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

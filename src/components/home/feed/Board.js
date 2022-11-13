import React from "react";
import styled from "styled-components";
import CardList from "./CardList";

const Wrapper = styled.div`
  box-sizing: border-box;
  background: rgba(241, 241, 245, 1);
  width: 100%;
  height: 500px;
  margin-bottom: 70px;
`;
const cardsDummyList = [
  {
    id: 1,
    author: "각이",
    village: "시흥시",
    time: "3분전",
    content: {
      text: "강아지가 사람을 좋아하고 따른다는 것은 쉽게 알 수 있어요. 하지만 강아지가 우리에게 '고마움'을 느끼는 건 쉽게 알기 어려운데요. 과연 강아지는 보호자에게 고마움을 느낄까요? 그렇다면, 강아지가 고마워할 때 보이는 행동은 어떤 것이 있을까요?",
      image: ["http://placeimg.com/346/223/animals"],
    },
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
    content: {
      text: "강아지가 사람을 좋아하고 따른다는 것은 쉽게 알 수 있어요. 하지만 강아지가 우리에게 '고마움'을 느끼는 건 쉽게 알기 어려운데요. 과연 강아지는 보호자에게 고마움을 느낄까요? 그렇다면, 강아지가 고마워할 때 보이는 행동은 어떤 것이 있을까요?",
      image: [
        "http://placeimg.com/346/223/animals",
        "http://placeimg.com/346/223/animals",
        "http://placeimg.com/346/223/animals",
      ],
    },
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
    content: {
      text: null,
      image: ["http://placeimg.com/346/223/animals"],
    },
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
    content: {
      text: "강아지가 사람을 좋아하고 따른다는 것은 쉽게 알 수 있어요. 하지만 강아지가 우리에게 '고마움'을 느끼는 건 쉽게 알기 어려운데요. 과연 강아지는 보호자에게 고마움을 느낄까요? 그렇다면, 강아지가 고마워할 때 보이는 행동은 어떤 것이 있을까요?",
      image: null,
    },
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

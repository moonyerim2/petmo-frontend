import React from "react";
import { PageHeader2 } from "../components";
import BookmarkBoard from "../components/bookmark/BookmarkBoard";

const bookmarkDummyList = [
  {
    id: 1,
    categoryTag: "축하해요",
    animalTag: [
      {
        tagName: "강아지",
        id: 1,
      },
      {
        tagName: "고양이",
        id: 2,
      },
    ],
    content: {
      text: "강아지가 사람을 좋아하고 따른다는 것은 쉽게 알 수 있어요. 하지만 강아지가 우리에게 '고마움'을 느끼는 건 쉽게 알기 어려운데요. 과연 강아지는 보호자에게 고마움을 느낄까요? 그렇다면, 강아지가 고마워할 때 보이는 행동은 어떤 것이 있을까요?",
      image: [
        {
          src: "http://placeimg.com/320/220/animals",
        },
      ],
    },
  },
  {
    id: 2,
    categoryTag: "반려고수",
    animalTag: [
      {
        tagName: "고양이",
        id: 1,
      },
    ],
    content: {
      text: "강아지가 사람을 좋아하고 따른다는 것은 쉽게 알 수 있어요. 하지만 강아지가 우리에게 '고마움'을 느끼는 건 쉽게 알기 어려운데요. 과연 강아지는 보호자에게 고마움을 느낄까요? 그렇다면, 강아지가 고마워할 때 보이는 행동은 어떤 것이 있을까요?",
      image: [
        {
          src: "http://placeimg.com/320/220/animals",
        },
      ],
    },
  },
  {
    id: 3,
    categoryTag: "축하해요",
    animalTag: [
      {
        tagName: "고양이",
        id: 1,
      },
    ],
    content: {
      text: "강아지가 사람을 좋아하고 따른다는 것은 쉽게 알 수 있어요. 하지만 강아지가 우리에게 '고마움'을 느끼는 건 쉽게 알기 어려운데요. 과연 강아지는 보호자에게 고마움을 느낄까요? 그렇다면, 강아지가 고마워할 때 보이는 행동은 어떤 것이 있을까요?",
      image: null,
    },
  },
];

function BookmarkPage() {
  return (
    <>
      <PageHeader2 pageTitle="북마크" />
      <BookmarkBoard cards={bookmarkDummyList} />
    </>
  );
}

export default BookmarkPage;

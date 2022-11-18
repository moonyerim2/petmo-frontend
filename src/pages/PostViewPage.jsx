import React from "react";
import { useParams } from "react-router-dom";
import { PageHeader } from "../components";
import { Card, BlankComment, PostCommentBox } from "../components";
import styled from "styled-components";
const sample = {
  id: 1,
  author: "각이",
  village: "시흥시",
  time: "3분전",
  content: {
    text: "강아지가 사람을 좋아하고 따른다는 것은 쉽게 알 수 있어요. 하지만 강아지가 우리에게 '고마움'을 느끼는 건 쉽게 알기 어려운데요. 과연 강아지는 보호자에게 고마움을 느낄까요? 그렇다면, 강아지가 고마워할 때 보이는 행동은 어떤 것이 있을까요?강아지가 사람을 좋아하고 따른다는 것은 쉽게 알 수 있어요. 하지만 강아지가 우리에게 '고마움'을 느끼는 건 쉽게 알기 어려운데요. 과연 강아지는 보호자에게 고마움을 느낄까요? 그렇다면, 강아지가 고마워할 때 보이는 행동은 어떤 것이 있을까요?",
    image: [
      {
        id: 1,
        src: "http://placeimg.com/320/220/animals",
      },
      {
        id: 2,
        src: "http://placeimg.com/320/220/animals",
      },
      {
        id: 3,
        src: "http://placeimg.com/320/220/animals",
      },
    ],
  },
  myLike: true,
  myBookmark: false,
  likeNumber: 2,
  bookmarkNumber: 3,
  commentNumber: 6,
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
  comment: [
    {
      authorInfo: {
        authorName: "챌",
        village: "남양주시",
        time: "10분전",
      },
      content: "강아지가 귀여워요!",
    },
  ],
};
const Wrapper = styled.div`
  background-color: #f0f0f6;
  width: 100%;
  height: 100%;
`;
function PostViewPage() {
  const { postId } = useParams();

  return (
    <Wrapper>
      <PageHeader pageTitle="게시글" />
      <Card key={postId} type={"full"} {...sample} />
      <BlankComment />
      <PostCommentBox />
    </Wrapper>
  );
}

export default PostViewPage;

import React from "react";
import { useParams } from "react-router-dom";
import { PageHeader, UserInfoHeader } from "../components";
import { Content } from "../components";
const sample = {
  id: 1,
  author: "각이",
  village: "시흥시",
  time: "3분전",
  content: {
    text: "강아지가 사람을 좋아하고 따른다는 것은 쉽게 알 수 있어요. 하지만 강아지가 우리에게 '고마움'을 느끼는 건 쉽게 알기 어려운데요. 과연 강아지는 보호자에게 고마움을 느낄까요? 그렇다면, 강아지가 고마워할 때 보이는 행동은 어떤 것이 있을까요?",
    image: [
      "http://placeimg.com/346/223/animals",
      "http://placeimg.com/346/223/animals",
      "http://placeimg.com/346/223/animals",
    ],
  },
  myLike: true,
  myBookmark: false,
  likeNumber: 2,
  bookmarkNumber: 3,
  commentNumber: 6,
};

function PostViewPage() {
  const { postId } = useParams();

  return (
    <>
      <PageHeader pageTitle="게시글" />
      <UserInfoHeader
        author={sample.author}
        village={sample.village}
        time={sample.time}
      />
      <Content content={sample.content} />
      <div>게시글 {postId}</div>;
    </>
  );
}

export default PostViewPage;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PageHeader } from "../components";
import { Card, BlankComment, PostCommentBox, CommentBox } from "../components";
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
  comments: [
    {
      commentId: 1,
      author: "챌",
      village: "남양주시",
      content: "강아지가 귀여워요",
      depth: 1,
      createdDate: "2022-11-18 19:00:25",
      rootId: 1,
      replyComments: [
        {
          commentId: 2,
          author: "지민",
          village: "종로구",
          content: "그렇네요",
          depth: 2,
          createdDate: "2022-11-18 19:00:28",
          rootId: 1,
        },
        {
          commentId: 3,
          author: "유강",
          village: "부천시",
          content: "유익했습니다",
          depth: 2,
          createdDate: "2022-11-18 19:00:29",
          rootId: 1,
        },
        {
          commentId: 4,
          author: "각",
          village: "시흥시",
          content: "스크랩해갑니다",
          depth: 2,
          createdDate: "2022-11-18 19:00:29",
          rootId: 1,
        },
      ],
    },
    {
      commentId: 5,
      author: "챌2",
      village: "남양주시",
      content: "강아지가 귀여워요오오오",
      depth: 1,
      createdDate: "2022-11-18 19:00:25",
      rootId: 1,
      replyComments: [
        {
          commentId: 6,
          author: "지민",
          village: "종로구",
          content: "그렇네요오오오",
          depth: 2,
          createdDate: "2022-11-18 19:00:28",
          rootId: 1,
        },
        {
          commentId: 7,
          author: "유강",
          village: "부천시",
          content: "유익했습니다이ㅏ이이ㅣ이",
          depth: 2,
          createdDate: "2022-11-18 19:00:29",
          rootId: 1,
        },
        {
          commentId: 8,
          author: "각",
          village: "시흥시",
          content: "스크랩해갑니다아아아ㅏ",
          depth: 2,
          createdDate: "2022-11-18 19:00:29",
          rootId: 1,
        },
      ],
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
  const [noComment, setNoComment] = useState(true);
  useEffect(() => {
    setNoComment(false);
  }, [noComment]);

  return (
    <Wrapper>
      <PageHeader pageTitle="게시글" />
      <Card key={postId} type={"full"} {...sample} />
      {noComment ? <BlankComment /> : <CommentBox comments={sample.comments} />}
      <PostCommentBox />
    </Wrapper>
  );
}

export default PostViewPage;

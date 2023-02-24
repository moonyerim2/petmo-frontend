import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  PageHeader,
  BlankComment,
  PostCommentBox,
  CommentBox,
  FullCard,
} from "../components";
import { useProcessSinglePostData } from "../hooks";

const sample = {
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

function PostViewPage() {
  const { postId } = useParams();
  const [noComment, setNoComment] = useState(true);
  const post = useProcessSinglePostData(postId.replace(":", ""));

  useEffect(() => {
    setNoComment(false);
  }, [noComment]);

  return (
    <>
      <PageHeader pageTitle="게시글" />
      {Object.keys(post).length && <FullCard {...post} />}
      {noComment ? <BlankComment /> : <CommentBox comments={sample.comments} />}
      <PostCommentBox />
    </>
  );
}

export default PostViewPage;

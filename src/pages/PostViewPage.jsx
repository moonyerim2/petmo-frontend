import React from "react";
import { useParams } from "react-router-dom";
import {
  PageHeader,
  BlankComment,
  PostCommentBox,
  Comments,
  FullCard,
} from "../components";
import { useProcessSinglePostData, useProcessCommentsData } from "../hooks";
import { PageWrapper } from "../styled";

function PostViewPage() {
  const { postId } = useParams();
  const post = useProcessSinglePostData(postId.replace(":", ""));
  const comments = useProcessCommentsData(postId.replace(":", ""));

  return (
    <>
      <PageWrapper>
        <PageHeader pageTitle="게시글" />
      </PageWrapper>
      {Object.keys(post).length && <FullCard {...post} />}
      {Object.keys(comments).length ? (
        <Comments comments={comments} />
      ) : (
        <BlankComment />
      )}
      <PostCommentBox />
    </>
  );
}

export default PostViewPage;

import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import {
  PageHeader,
  BlankComment,
  Comments,
  FullCard,
  CommentInput,
} from "../components";
import { useProcessSinglePostData, useProcessCommentsData } from "../hooks";
import { PageWrapper } from "../styled";

const CommentsWrapper = styled.div`
  padding: 20px 20px 60px;
`;

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
        <CommentsWrapper>
          <Comments comments={comments} />
        </CommentsWrapper>
      ) : (
        <BlankComment />
      )}
      <CommentInput />
    </>
  );
}

export default PostViewPage;

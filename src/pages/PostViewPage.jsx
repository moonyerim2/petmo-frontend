import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import {
  PageHeader,
  BlankComment,
  Comments,
  FullCard,
  CommentInput,
} from "../components";
import { useProcessSinglePostData, useProcessCommentsData } from "../hooks";
import { PageWrapper } from "../styled";
import { commentToWhoAtom, commentPayloadIdsAtom } from "../store";

const CommentsWrapper = styled.div`
  padding: 20px 20px 60px;
`;

function PostViewPage() {
  const { postId } = useParams();
  const post = useProcessSinglePostData(postId.replace(":", ""));
  const comments = useProcessCommentsData(postId.replace(":", ""));
  const setCommentToWho = useSetRecoilState(commentToWhoAtom);
  const setCommentPayloadIds = useSetRecoilState(commentPayloadIdsAtom);
  const commentInput = useRef(null);

  useEffect(() => {
    setCommentPayloadIds((prevState) => {
      return { ...prevState, boardId: post.boardId };
    });

    setCommentToWho({
      postAuthor: post.postData?.userBadgeData.userName,
      commentToWho: post.postData?.userBadgeData.userName,
    });
  }, [post]);

  const onClickReply = (commentId) => {
    commentInput.current.focus();

    setCommentPayloadIds((prevState) => {
      return { ...prevState, commentId: commentId };
    });
  };

  return (
    <>
      <PageWrapper>
        <PageHeader pageTitle="게시글" />
      </PageWrapper>
      {Object.keys(post).length && <FullCard {...post} />}
      {Object.keys(comments).length ? (
        <CommentsWrapper>
          <Comments comments={comments} onClickReply={onClickReply} />
        </CommentsWrapper>
      ) : (
        <BlankComment />
      )}
      <CommentInput inputRef={commentInput} />
    </>
  );
}

export default PostViewPage;

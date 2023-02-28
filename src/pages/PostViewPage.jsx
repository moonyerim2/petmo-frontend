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
import { commentToWhoAtom } from "../store";

const CommentsWrapper = styled.div`
  padding: 20px 20px 60px;
`;

function PostViewPage() {
  const { postId } = useParams();
  const post = useProcessSinglePostData(postId.replace(":", ""));
  const comments = useProcessCommentsData(postId.replace(":", ""));
  const setCommentToWho = useSetRecoilState(commentToWhoAtom);
  const commentInput = useRef(null);

  useEffect(() => {
    setCommentToWho({
      postAuthor: post.postData?.userBadgeData.userName,
      commentToWho: post.postData?.userBadgeData.userName,
    });
  }, [post]);

  const onClickReply = () => {
    commentInput.current.focus();
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

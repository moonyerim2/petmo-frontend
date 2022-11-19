import React from "react";
import PropTypes from "prop-types";
import { UserInfoHeader } from "../../components";
import styled from "styled-components";
import MoreCommentBtn from "./MoreCommentBtn";
import SubComment from "./SubComment";
const MainComment = styled.div`
  height: 93px;
  padding-top: 20px;
`;
const CommentText = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  margin-left: 56px;
  color: #000000;
`;

function Comment({ author, village, content, createdDate, replyComments }) {
  return (
    <>
      <MainComment>
        <UserInfoHeader author={author} village={village} time={createdDate} />
        <CommentText>{content}</CommentText>
        <MoreCommentBtn />
      </MainComment>
      <>
        {replyComments.map((it) => (
          <SubComment key={it.commentId} {...it} />
        ))}
      </>
    </>
  );
}
Comment.propTypes = {
  author: PropTypes.node,
  village: PropTypes.node,
  content: PropTypes.node,
  createdDate: PropTypes.node,
  commentId: PropTypes.node,
  parentId: PropTypes.node,
  replyComments: PropTypes.array,
};
export default Comment;

import React from "react";
import { UserInfoHeader } from "../../components";
import MoreCommentBtn from "./MoreCommentBtn";

function MainComment({ comments }) {
  return (
    <>
      <UserInfoHeader author={author} village={village} time={createdDate} />
      <CommentText>{content}</CommentText>
      <MoreCommentBtn />
    </>
  );
}
MainComment.propTypes = {
  comments: PropTypes.array,
};
export default CommentBox;

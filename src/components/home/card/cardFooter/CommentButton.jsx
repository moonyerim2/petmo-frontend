import React from "react";
import PropTypes from "prop-types";
import CardFooterButton from "./CardFooterButton";

function CommentButton({ commentCount }) {
  return (
    <CardFooterButton
      dataCount={commentCount}
      iconSrc={`${process.env.PUBLIC_URL}/img/comment.svg`}
      iconAlt="댓글"
    />
  );
}

CommentButton.propTypes = {
  commentCount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default CommentButton;

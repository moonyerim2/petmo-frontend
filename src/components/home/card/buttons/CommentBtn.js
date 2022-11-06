import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as CommentIcon } from "../../../../css/icon/CommentIcon.svg";

function CommentBtn({ commentNumber }) {
  return (
    <>
      <CommentIcon />
      <span>{commentNumber}</span>
    </>
  );
}
CommentBtn.propTypes = {
  commentNumber: PropTypes.number,
};
export default CommentBtn;

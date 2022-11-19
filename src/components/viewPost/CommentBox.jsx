import React from "react";
import PropTypes from "prop-types";
import Comment from "./Comment";
import styled from "styled-components";
const Wrapper = styled.div`
  background-color: white;
`;
function CommentBox({ comments }) {
  return (
    <Wrapper>
      {comments.map((it) => (
        <Comment key={it.commentId} {...it} />
      ))}
    </Wrapper>
  );
}
CommentBox.propTypes = {
  comments: PropTypes.array,
};
export default CommentBox;

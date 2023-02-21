import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
`;

const Icon = styled.img`
  margin-right: 2px;
`;

function CommentButton({ viewCount }) {
  return (
    <Wrapper>
      <Icon src={`${process.env.PUBLIC_URL}/img/comment.svg`} alt="댓글" />
      <span>{viewCount}</span>
    </Wrapper>
  );
}

CommentButton.propTypes = {
  viewCount: PropTypes.number,
};

export default CommentButton;

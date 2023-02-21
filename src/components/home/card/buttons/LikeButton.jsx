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

function LikeButton({ likeCount, likeCheck }) {
  return (
    <Wrapper>
      <Icon
        src={
          likeCheck
            ? `${process.env.PUBLIC_URL}/img/like.svg`
            : `${process.env.PUBLIC_URL}/img/liked.svg`
        }
        alt="좋아요"
      />
      <span>{likeCount}</span>
    </Wrapper>
  );
}

LikeButton.propTypes = {
  likeCheck: PropTypes.bool,
  likeCount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default LikeButton;

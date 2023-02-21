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

function LikeButton({ likeNumber, myLike }) {
  return (
    <Wrapper>
      <Icon
        src={
          myLike
            ? `${process.env.PUBLIC_URL}/img/like.svg`
            : `${process.env.PUBLIC_URL}/img/liked.svg`
        }
        alt="좋아요"
      />
      <span>{likeNumber}</span>
    </Wrapper>
  );
}

LikeButton.propTypes = {
  myLike: PropTypes.bool,
  likeNumber: PropTypes.number,
};

export default LikeButton;

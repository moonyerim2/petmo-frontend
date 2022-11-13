import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import EmptyHeartIcon from "../../../../css/icon/HeartIcon.svg";
import FullHeartIcon from "../../../../css/icon/FullHeart.svg";

const Wrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
`;
const Icon = styled.img`
  margin-right: 2px;
`;

function HeartBtn({ likeNumber, myLike }) {
  return (
    <Wrapper>
      <Icon src={myLike ? EmptyHeartIcon : FullHeartIcon} alt="img" />
      <span>{likeNumber}</span>
    </Wrapper>
  );
}
HeartBtn.propTypes = {
  myLike: PropTypes.bool,
  likeNumber: PropTypes.number,
};

export default HeartBtn;

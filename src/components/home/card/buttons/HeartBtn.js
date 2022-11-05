import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import EmptyHeartIcon from "../../../../css/icon/HeartIcon.svg";
import FullHeartIcon from "../../../../css/icon/FullHeart.svg";

const Wrapper = styled.span``;

function HeartBtn({ likeNumber, heartEmpty, onHeart }) {
  return (
    <Wrapper onClick={onHeart}>
      <img src={heartEmpty ? EmptyHeartIcon : FullHeartIcon} alt="img" />
      <span>{likeNumber}</span>
    </Wrapper>
  );
}
HeartBtn.propTypes = {
  heartEmpty: PropTypes.bool,
  likeNumber: PropTypes.number,
  onHeart: PropTypes.func,
};

export default HeartBtn;

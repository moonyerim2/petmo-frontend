import React from "react";
import PropTypes from "prop-types";
import CommentIcon from "../../../../css/icon/CommentIcon.svg";
import styled from "styled-components";

const Wrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
`;
const Icon = styled.img`
  margin-right: 2px;
`;
function CommentBtn({ commentNumber }) {
  return (
    <Wrapper>
      <Icon src={CommentIcon} alt="img" />
      <span>{commentNumber}</span>
    </Wrapper>
  );
}
CommentBtn.propTypes = {
  commentNumber: PropTypes.number,
};
export default CommentBtn;

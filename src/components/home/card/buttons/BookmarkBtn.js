import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import EmptyBookmarkIcon from "../../../../css/icon/EmptyBookmarkIcon.svg";
import FullBookmarkIcon from "../../../../css/icon/FullBookmarkIcon.svg";

const Wrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Icon = styled.img`
  margin-right: 2px;
`;
function BookmarkBtn({ bookmarkNumber, myBookmark }) {
  return (
    <Wrapper>
      <Icon src={myBookmark ? EmptyBookmarkIcon : FullBookmarkIcon} alt="img" />
      <span>{bookmarkNumber}</span>
    </Wrapper>
  );
}
BookmarkBtn.propTypes = {
  myBookmark: PropTypes.bool,
  bookmarkNumber: PropTypes.number,
};

export default BookmarkBtn;

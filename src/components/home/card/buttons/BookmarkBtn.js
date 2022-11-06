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
function BookmarkBtn({ bookmarkNumber, bookmarkEmpty, onBookmark }) {
  return (
    <Wrapper onClick={onBookmark}>
      <Icon
        src={bookmarkEmpty ? EmptyBookmarkIcon : FullBookmarkIcon}
        alt="img"
      />
      <span>{bookmarkNumber}</span>
    </Wrapper>
  );
}
BookmarkBtn.propTypes = {
  bookmarkEmpty: PropTypes.bool,
  bookmarkNumber: PropTypes.number,
  onBookmark: PropTypes.func,
};

export default BookmarkBtn;

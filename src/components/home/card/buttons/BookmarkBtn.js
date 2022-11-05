import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import EmptyBookmarkIcon from "../../../../css/icon/EmptyBookmarkIcon.svg";
import FullBookmarkIcon from "../../../../css/icon/FullBookmarkIcon.svg";

const Wrapper = styled.span``;
function BookmarkBtn({ bookmarkNumber, bookmarkEmpty, onBookmark }) {
  return (
    <Wrapper onClick={onBookmark}>
      <img
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

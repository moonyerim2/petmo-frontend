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

function BookmarkBtn({ bookmarkNumber, myBookmark }) {
  return (
    <Wrapper>
      <Icon
        src={
          myBookmark
            ? `${process.env.PUBLIC_URL}/img/bookmark.svg`
            : `${process.env.PUBLIC_URL}/img/bookmarked.svg`
        }
        alt="북마크"
      />
      <span>{bookmarkNumber}</span>
    </Wrapper>
  );
}

BookmarkBtn.propTypes = {
  myBookmark: PropTypes.bool,
  bookmarkNumber: PropTypes.number,
};

export default BookmarkBtn;

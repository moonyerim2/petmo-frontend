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

function BookmarkBtn({ bookmarkCount, bookmarkCheck }) {
  return (
    <Wrapper>
      <Icon
        src={
          bookmarkCheck
            ? `${process.env.PUBLIC_URL}/img/bookmark.svg`
            : `${process.env.PUBLIC_URL}/img/bookmarked.svg`
        }
        alt="북마크"
      />
      <span>{bookmarkCount}</span>
    </Wrapper>
  );
}

BookmarkBtn.propTypes = {
  bookmarkCheck: PropTypes.bool,
  bookmarkCount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default BookmarkBtn;

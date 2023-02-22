import React from "react";
import PropTypes from "prop-types";
import CardFooterButton from "./CardFooterButton";

function BookmarkBtn({ bookmarkCount, bookmarkCheck }) {
  return (
    <CardFooterButton
      dataCount={bookmarkCount}
      iconSrc={
        bookmarkCheck
          ? `${process.env.PUBLIC_URL}/img/bookmarked.svg`
          : `${process.env.PUBLIC_URL}/img/bookmark.svg`
      }
      iconAlt="북마크"
    />
  );
}

BookmarkBtn.propTypes = {
  bookmarkCheck: PropTypes.bool,
  bookmarkCount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default BookmarkBtn;

import React from "react";
import PropTypes from "prop-types";
import CardFooterButton from "./CardFooterButton";
import { useCardFooterButtonClick } from "../../../../hooks";

function BookmarkBtn({ bookmarkCount, bookmarkCheck }) {
  const { isChecked, count, handleButtonClick } = useCardFooterButtonClick(
    bookmarkCount,
    bookmarkCheck
  );

  return (
    <CardFooterButton
      dataCount={count}
      iconSrc={
        isChecked
          ? `${process.env.PUBLIC_URL}/img/bookmarked.svg`
          : `${process.env.PUBLIC_URL}/img/bookmark.svg`
      }
      iconAlt="북마크"
      onClick={handleButtonClick}
    />
  );
}

BookmarkBtn.propTypes = {
  bookmarkCheck: PropTypes.bool,
  bookmarkCount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default BookmarkBtn;

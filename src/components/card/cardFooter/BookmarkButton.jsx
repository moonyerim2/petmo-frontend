import React from "react";
import PropTypes from "prop-types";
import CardFooterButton from "./CardFooterButton";
import { useCardFooterButtonClick } from "../../../hooks";
import { callBookmarkApi } from "../../../api";

function BookmarkBtn({ boardId, bookmarkCount, bookmarkCheck }) {
  const { isChecked, count, handleButtonClick } = useCardFooterButtonClick(
    () => {
      callBookmarkApi({ post: boardId });
    },
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
  boardId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  bookmarkCheck: PropTypes.bool,
  bookmarkCount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default BookmarkBtn;

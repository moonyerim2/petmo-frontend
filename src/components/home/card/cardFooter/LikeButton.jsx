import React from "react";
import PropTypes from "prop-types";
import CardFooterButton from "./CardFooterButton";
import { useCardFooterButtonClick } from "../../../../hooks";

function LikeButton({ likeCount, likeCheck }) {
  const { isChecked, count, handleButtonClick } = useCardFooterButtonClick(
    likeCount,
    likeCheck
  );

  return (
    <CardFooterButton
      dataCount={count}
      iconSrc={
        isChecked
          ? `${process.env.PUBLIC_URL}/img/liked.svg`
          : `${process.env.PUBLIC_URL}/img/like.svg`
      }
      iconAlt="좋아요"
      onClick={handleButtonClick}
    />
  );
}

LikeButton.propTypes = {
  likeCheck: PropTypes.bool,
  likeCount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default LikeButton;

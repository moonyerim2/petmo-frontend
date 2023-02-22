import React from "react";
import PropTypes from "prop-types";
import CardFooterButton from "./CardFooterButton";

function LikeButton({ likeCount, likeCheck }) {
  return (
    <CardFooterButton
      dataCount={likeCount}
      iconSrc={
        likeCheck
          ? `${process.env.PUBLIC_URL}/img/liked.svg`
          : `${process.env.PUBLIC_URL}/img/like.svg`
      }
      iconAlt="좋아요"
    />
  );
}

LikeButton.propTypes = {
  likeCheck: PropTypes.bool,
  likeCount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default LikeButton;

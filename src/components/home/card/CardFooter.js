import React from "react";
import styled from "styled-components";
import HeartBtn from "./buttons/HeartBtn.js";
import BookmarkBtn from "./buttons/BookmarkBtn.js";
import CommentBtn from "./buttons/CommentBtn.js";
import Watched from "./buttons/Watched.js";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 46px;
  padding: 0px 20px;
  background-color: white;
  border-top: 1px solid #f0f0f6;
  border-bottom: 8px solid #f0f0f6;
`;

const Column_buttons = styled.div`
  display: flex;
`;

const Button = styled.button`
  background-color: white;
  font-family: Pretendard;
  font-weight: Regular;
  font-size: 14px;
  color: #767676;
  opacity: 1;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Collumn_watched = styled.div`
  color: #9a9a9a;
  font-family: Pretendard;
  font-weight: Regular;
  font-size: 14px;
  opacity: 1;
`;

function CardFooter({
  likeNumberProps,
  bookmarkNumberProps,
  commentNumberProps,
  myLike,
  myBookmark,
}) {
  return (
    <Wrapper>
      <Column_buttons>
        <Button>
          <HeartBtn myLike={myLike} likeNumber={likeNumberProps} />
        </Button>
        <Button>
          <BookmarkBtn
            myBookmark={myBookmark}
            bookmarkNumber={bookmarkNumberProps}
          />
        </Button>
        <Button>
          <CommentBtn commentNumber={commentNumberProps} />
        </Button>
      </Column_buttons>

      <Collumn_watched>
        <Watched />
      </Collumn_watched>
    </Wrapper>
  );
}

CardFooter.propTypes = {
  likeNumberProps: PropTypes.number,
  bookmarkNumberProps: PropTypes.number,
  commentNumberProps: PropTypes.number,
  myLike: PropTypes.bool,
  myBookmark: PropTypes.bool,
};

export default CardFooter;

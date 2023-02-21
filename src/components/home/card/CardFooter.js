import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { LikeButton, BookmarkButton, CommentButton } from "./buttons";
import Watched from "./Watched";

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

const ColumnButtons = styled.div`
  display: flex;
`;

const Button = styled.button`
  background-color: white;
  font-family: Pretendard;
  font-weight: Regular;
  font-size: 14px;
  color: #767676;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CollumnWatched = styled.div`
  color: #9a9a9a;
  font-family: Pretendard;
  font-weight: Regular;
  font-size: 14px;
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
      <ColumnButtons>
        <Button>
          <LikeButton myLike={myLike} likeNumber={likeNumberProps} />
        </Button>
        <Button>
          <BookmarkButton
            myBookmark={myBookmark}
            bookmarkNumber={bookmarkNumberProps}
          />
        </Button>
        <Button>
          <CommentButton commentNumber={commentNumberProps} />
        </Button>
      </ColumnButtons>

      <CollumnWatched>
        <Watched />
      </CollumnWatched>
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

import React, { useState } from "react";
import styled from "styled-components";
import HeartBtn from "./HeartBtn.js";
import BookmarkBtn from "./BookmarkBtn.js";
import CommentBtn from "./CommentBtn.js";
import Watched from "./Watched.js";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  box-sizing: border-box;
  background-color: white;
  border-top: 1px solid rgba(241, 241, 245, 1);
  width: 100%;
  height: 40px;
  display: flex;
  position: absolute;
  bottom: 0px;
  justify-content: space-between;
  align-items: center;
  padding-right: 10px;
  padding-left: 10px;
`;
const Column_buttons = styled.div`
  display: flex;
`;
const Button = styled.button`
  background-color: white;
  font-family: Pretendard;
  font-weight: Regular;
  font-size: 14px;
  width: 42px;
  opacity: 1;
  border: none;
  display: flex;
  justify-content: space-between;
`;
const Collumn_watched = styled.div`
  color: #9a9a9a;
  font-family: Pretendard;
  font-weight: Regular;
  font-size: 14px;
  opacity: 1;
`;

function ButtonBox({
  likeNumberProps,
  bookmarkNumberProps,
  commentNumberProps,
}) {
  //HeartBtn 관련//
  const [heartEmpty, setHeartEmpty] = useState(true);
  const [likeNumber, setLikeNumber] = useState({ likeNumberProps });
  const handleHeart = () => {
    if (heartEmpty) {
      setLikeNumber(likeNumber + 1);
    } else {
      setLikeNumber(likeNumber - 1);
    }
    setHeartEmpty(!heartEmpty);
  };
  //BookmarkBtn 관련//
  const [bookmarkEmpty, setBookmarkEmpty] = useState(true);
  const [bookmarkNumber, setBookmarkNumber] = useState({ bookmarkNumberProps });
  const handleBookmark = () => {
    if (bookmarkEmpty) {
      setBookmarkNumber(bookmarkNumber + 1);
    } else {
      setBookmarkNumber(bookmarkNumber - 1);
    }
    setBookmarkEmpty(!bookmarkEmpty);
  };

  return (
    <Wrapper>
      <Column_buttons>
        <Button>
          <HeartBtn
            heartEmptyProps={heartEmpty}
            likeNumber={likeNumberProps}
            onHeart={handleHeart}
          />
        </Button>
        <Button>
          <BookmarkBtn
            bookmarkEmpty={bookmarkEmpty}
            bookmarkNumber={bookmarkNumberProps}
            onBookmark={handleBookmark}
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

ButtonBox.propTypes = {
  likeNumberProps: PropTypes.number,
  bookmarkNumberProps: PropTypes.number,
  commentNumberProps: PropTypes.number,
};

export default ButtonBox;

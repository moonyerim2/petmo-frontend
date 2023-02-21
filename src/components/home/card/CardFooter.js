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
  likeCount,
  likeCheck,
  bookmarkCount,
  bookmarkCheck,
  viewCount,
}) {
  return (
    <Wrapper>
      <ColumnButtons>
        <Button>
          <LikeButton {...{ likeCheck, likeCount }} />
        </Button>
        <Button>
          <BookmarkButton {...{ bookmarkCount, bookmarkCheck }} />
        </Button>
        <Button>
          {/* 댓글수 데이터가 api에서 빠져서 viewCount로 임시 사용 */}
          <CommentButton viewCount={viewCount} />
        </Button>
      </ColumnButtons>

      <CollumnWatched>
        <Watched viewCount={viewCount} />
      </CollumnWatched>
    </Wrapper>
  );
}

CardFooter.propTypes = {
  likeCount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  likeCheck: PropTypes.bool,
  bookmarkCount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  bookmarkCheck: PropTypes.bool,
  viewCount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default CardFooter;

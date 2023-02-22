import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { LikeButton, BookmarkButton, CommentButton } from "../cardFooter";

const Wrapper = styled.div`
  ${({ theme: { color, fontSize, layout, sizes } }) => {
    return css`
      ${{
        ...layout.flex_aCenter_jBetween,
        ...sizes.size2,
        padding: "0px 20px",
        backgroundColor: color.white,
        borderTop: `1px solid ${color.gray200}`,
        borderBottom: `8px solid  ${color.gray200}`,
        color: color.gray700,
        fontSize: fontSize.body2,
      }}
    `;
  }}
`;

const ButtonWrapper = styled.div`
  display: flex;
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
      <ButtonWrapper>
        <LikeButton {...{ likeCheck, likeCount }} />
        <BookmarkButton {...{ bookmarkCount, bookmarkCheck }} />
        {/* 댓글수 데이터가 api에서 빠져서 viewCount로 임시 사용 */}
        <CommentButton commentCount={viewCount} />
      </ButtonWrapper>

      <span>조회수 {viewCount}</span>
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

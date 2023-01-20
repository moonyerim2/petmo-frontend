import React from "react";
import styled, { css } from "styled-components";
import { UserInfoHeader, Tags } from "../../../components";
import Content from "./Content";
import CardFooter from "./CardFooter";
import PropTypes from "prop-types";

const CardContent = styled.div`
  ${({ theme: { colors } }) => css`
    ${{
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      padding: "20px",
      minWidth: "200px",
      backgroundColor: colors.white,
    }}
  `};
`;

function Card({
  id,
  type,
  author,
  village,
  time,
  content,
  likeNumber,
  bookmarkNumber,
  commentNumber,
  myLike,
  myBookmark,
  categoryTag,
  animalTag,
}) {
  return (
    <>
      <CardContent>
        <UserInfoHeader author={author} village={village} time={time} />
        <Tags categoryTag={categoryTag} animalTag={animalTag} />
        <Content type={type} content={content} postId={id} />
      </CardContent>
      <CardFooter
        myLike={myLike}
        myBookmark={myBookmark}
        likeNumberProps={likeNumber}
        bookmarkNumberProps={bookmarkNumber}
        commentNumberProps={commentNumber}
      />
    </>
  );
}

Card.propTypes = {
  id: PropTypes.node,
  type: PropTypes.node,
  author: PropTypes.node,
  village: PropTypes.node,
  time: PropTypes.node,
  content: PropTypes.object,
  likeNumber: PropTypes.number,
  bookmarkNumber: PropTypes.number,
  commentNumber: PropTypes.number,
  myLike: PropTypes.bool,
  myBookmark: PropTypes.bool,
  categoryTag: PropTypes.string,
  animalTag: PropTypes.array,
};

export default Card;

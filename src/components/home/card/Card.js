import React from "react";
import styled from "styled-components";
import CardHeader from "./CardHeader";
import Content from "./Content";
import CardFooter from "./CardFooter";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  box-sizing: border-box;
  background-color: white;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  margin-bottom: 8px;
`;

function Card({
  author,
  village,
  time,
  content,
  likeNumber,
  bookmarkNumber,
  commentNumber,
  myLike,
  myBookmark,
}) {
  return (
    <Wrapper>
      <CardHeader author={author} village={village} time={time} />
      <Content content={content} />
      <CardFooter
        myLike={myLike}
        myBookmark={myBookmark}
        likeNumberProps={likeNumber}
        bookmarkNumberProps={bookmarkNumber}
        commentNumberProps={commentNumber}
      />
    </Wrapper>
  );
}
Card.propTypes = {
  author: PropTypes.node,
  village: PropTypes.node,
  time: PropTypes.node,
  content: PropTypes.object,
  likeNumber: PropTypes.number,
  bookmarkNumber: PropTypes.number,
  commentNumber: PropTypes.number,
  myLike: PropTypes.bool,
  myBookmark: PropTypes.bool,
};

export default Card;

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
  height: 200px;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 8px;
`;

function Card({
  author,
  village,
  content,
  likeNumber,
  bookmarkNumber,
  commentNumber,
}) {
  return (
    <Wrapper>
      <CardHeader author={author} village={village} />
      <Content content={content} />
      <CardFooter
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
  content: PropTypes.node,
  likeNumber: PropTypes.number,
  bookmarkNumber: PropTypes.number,
  commentNumber: PropTypes.number,
};

export default Card;

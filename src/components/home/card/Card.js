import React from "react";
import styled from "styled-components";
import Profile from "./Profile";
import Content from "./Content";
import ButtonBox from "./buttons/ButtonBox";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  box-sizing: border-box;
  background-color: white;
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  position: relative;
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
      <Profile author={author} village={village} />
      <Content content={content} />
      <ButtonBox
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

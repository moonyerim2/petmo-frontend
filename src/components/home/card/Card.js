import React from "react";
import styled from "styled-components";
import { UserInfoHeader, Tags } from "../../../components";
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
  padding-top: 20px;
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
    <Wrapper>
      <UserInfoHeader author={author} village={village} time={time} />
      <Tags categoryTag={categoryTag} animalTag={animalTag} />
      <Content type={type} content={content} postId={id} />
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

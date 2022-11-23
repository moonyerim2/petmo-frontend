import React from "react";
import PropTypes from "prop-types";
import { Tags } from "../common";
import Comment from "./CommentContent";
import PostContent from "./PostContent";
import styled from "styled-components";
const Wrapper = styled.div`
  box-sizing: border-box;
  margin: 0px 20px;
  height: 106px;
  border-bottom: 1px solid #f0f0f6;
`;
const Time = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 140%;
  color: #999999;
`;

function ProfileCommentCard({
  categoryTag,
  animalTag,
  commentContent,
  createdDate,
  postContent,
}) {
  return (
    <Wrapper>
      <Tags categoryTag={categoryTag} animalTag={animalTag} />
      <Comment commentContent={commentContent} />
      <Time>{createdDate}</Time>
      <PostContent postContent={postContent} />
    </Wrapper>
  );
}

export default ProfileCommentCard;

ProfileCommentCard.propTypes = {
  categoryTag: PropTypes.node,
  animalTag: PropTypes.array,
  commentContent: PropTypes.node,
  createdDate: PropTypes.node,
  postContent: PropTypes.node,
};

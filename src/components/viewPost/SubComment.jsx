import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { UserInfoHeader } from "../../components";
const Wrapper = styled.div`
  height: 66px;
  margin-left: 36px;
  padding-top: 12px;
`;
const CommentText = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  margin-left: 56px;
  color: #000000;
`;
function SubComment({ author, village, content, createdDate }) {
  return (
    <Wrapper>
      <UserInfoHeader author={author} village={village} time={createdDate} />
      <CommentText>{content}</CommentText>
    </Wrapper>
  );
}
SubComment.propTypes = {
  author: PropTypes.node,
  village: PropTypes.node,
  content: PropTypes.node,
  createdDate: PropTypes.node,
};
export default SubComment;

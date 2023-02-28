import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const CommentInfo = styled.div`
  position: fixed;
  bottom: 56px;
  left: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 36px;
  background-color: ${({ theme: { color } }) => color.gray100};
`;

const CommentInfoText = styled.div`
  font-size: ${({ theme: { fontSize } }) => fontSize.caption};
  color: ${({ theme: { color } }) => color.gray700};
  margin-left: 20px;
`;

const CommentAuthor = styled.span`
  color: ${({ theme: { color } }) => color.main};
`;

function CommentInputInfomation({ commentToWho }) {
  return (
    <CommentInfo>
      <CommentInfoText>
        <CommentAuthor>{commentToWho}</CommentAuthor>님에게 답글 남기는 중
      </CommentInfoText>
    </CommentInfo>
  );
}

CommentInputInfomation.propTypes = {
  commentToWho: PropTypes.string,
};

export default CommentInputInfomation;

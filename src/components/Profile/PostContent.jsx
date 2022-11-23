import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 40px;
  width: 320px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 140%;
  /* identical to box height, or 17px */

  color: #505050;
`;

function PostContent({ postContent }) {
  const [limit] = useState(25);
  const handleLongText = (str, limit) => {
    return {
      string: str.slice(0, limit),
    };
  };
  if (postContent.length > limit) {
    return (
      <Wrapper>
        {handleLongText(postContent, limit).string}
        <span>...</span>
      </Wrapper>
    );
  } else {
    return <Wrapper>{postContent}</Wrapper>;
  }
}

export default PostContent;

PostContent.propTypes = {
  postContent: PropTypes.node,
};

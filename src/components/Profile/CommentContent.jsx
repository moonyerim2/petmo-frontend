import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 40px;
  width: 320px;
`;

function Comment({ commentContent }) {
  const [limit] = useState(25);
  const handleLongText = (str, limit) => {
    return {
      string: str.slice(0, limit),
    };
  };
  if (commentContent.length > limit) {
    return (
      <Wrapper>
        {handleLongText(commentContent, limit).string}
        <span>...</span>
      </Wrapper>
    );
  } else {
    return <Wrapper>{commentContent}</Wrapper>;
  }
}

export default Comment;

Comment.propTypes = {
  commentContent: PropTypes.node,
};

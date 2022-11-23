import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 40px;
  width: 240px;
`;

function TextContent({ text }) {
  const [limit] = useState(41);
  const handleLongText = (str, limit) => {
    return {
      string: str.slice(0, limit),
    };
  };
  if (text.length > limit) {
    return (
      <Wrapper>
        {handleLongText(text, limit).string}
        <span>...</span>
      </Wrapper>
    );
  } else {
    return <Wrapper>{text}</Wrapper>;
  }
}

export default TextContent;

TextContent.propTypes = {
  text: PropTypes.node,
};

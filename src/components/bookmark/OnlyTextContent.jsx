import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 8px;
  height: 40px;
  line-height: 140%;
`;

function OnlyTextContent({ text }) {
  const [limit] = useState(55);
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

export default OnlyTextContent;

OnlyTextContent.propTypes = {
  text: PropTypes.node,
};

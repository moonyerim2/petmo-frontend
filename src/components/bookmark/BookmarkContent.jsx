import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 40px;
  width: 241px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  color: #111111;
`;

function BookmarkContent({ content }) {
  return <Wrapper>{content.text}</Wrapper>;
}

export default BookmarkContent;

BookmarkContent.propTypes = {
  content: PropTypes.node,
};

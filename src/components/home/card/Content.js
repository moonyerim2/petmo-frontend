import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 10px;
`;

function Content({ content }) {
  return <Wrapper>{content}</Wrapper>;
}
export default Content;

Content.propTypes = {
  content: PropTypes.node,
};

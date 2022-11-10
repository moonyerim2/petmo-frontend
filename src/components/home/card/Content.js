import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
const Wrapper = styled.div`
  display: flex;
  padding-top: 16px;
  padding-right: 20px;
  padding-left: 20px;
`;

function Content({ content }) {
  return <Wrapper>{content}</Wrapper>;
}
export default Content;

Content.propTypes = {
  content: PropTypes.node,
};

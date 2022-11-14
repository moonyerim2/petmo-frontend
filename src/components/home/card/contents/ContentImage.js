import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
const ImageArea = styled.div`
  margin-top: 16px;
`;
function ContentImage({ content_image }) {
  return (
    <ImageArea>
      <img src={content_image} alt="img"></img>
    </ImageArea>
  );
}

export default ContentImage;

ContentImage.propTypes = {
  content_image: PropTypes.node,
};

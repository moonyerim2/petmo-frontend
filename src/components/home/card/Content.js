import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";
import ContentText from "./content/ContentText.js";
import ContentImage from "./content/ContentImage.js";

const Wrapper = styled.div`
  margin: 16px 20px;
`;

function Content({ content }) {
  if (content.text !== null && content.image === null) {
    return (
      <Wrapper>
        <Link to="/post/:postId">
          <ContentText content_text={content.text} />
        </Link>
      </Wrapper>
    );
  }
  if (content.image !== null && content.text === null) {
    return (
      <Wrapper>
        <ContentImage content_image={content.image} />
      </Wrapper>
    );
  }
  if (content.text !== null && content.image !== null) {
    return (
      <Wrapper>
        <Link to="/post/:postId">
          <ContentText content_text={content.text} />
        </Link>
        <ContentImage content_image={content.image} />
      </Wrapper>
    );
  }
}

Content.propTypes = {
  content: PropTypes.object,
};
export default Content;

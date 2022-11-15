import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";
import { ContentText, ContentImage } from "./contents";

const Wrapper = styled.div`
  margin: 16px 20px;
`;

function Content({ content, postId, type }) {
  if (content.text !== null && content.image === null) {
    return (
      <Wrapper>
        <Link to={`/post/${postId}`}>
          <ContentText content_text={content.text} type={type} />
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
        <Link to={`/post/${postId}`}>
          <ContentText content_text={content.text} type={type} />
        </Link>
        <ContentImage content_image={content.image} />
      </Wrapper>
    );
  }
}

Content.propTypes = {
  postId: PropTypes.node,
  type: PropTypes.node,
  content: PropTypes.object,
  content_text: PropTypes.node,
  content_image: PropTypes.array,
};
export default Content;

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useProcessPostsData } from "../../../hooks";
import { Post } from "../feed";

const Posts = styled.ul`
  padding: 20px 0 56px;
  background-color: ${({ theme: { color } }) => color.white};
`;

function PostList({ postList }) {
  const posts = useProcessPostsData(postList);

  return (
    <Posts>
      {posts.map(({ boardId, contentText, postData, postFooterData }) => (
        <Post
          key={boardId}
          {...{ boardId, contentText, postData, postFooterData }}
        />
      ))}
    </Posts>
  );
}

PostList.propTypes = {
  postList: PropTypes.array,
};

export default PostList;

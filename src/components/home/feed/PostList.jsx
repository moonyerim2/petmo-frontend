import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { LargeCard } from "petmo-design-system";
import { useProcessPostsData } from "../../../hooks";
import { Link } from "react-router-dom";

const Posts = styled.ul`
  padding: 20px 20px 56px;
  background-color: ${({ theme: { color } }) => color.white};
`;

function PostList({ postList }) {
  const posts = useProcessPostsData(postList);

  return (
    <Posts>
      {posts.map(({ boardId, contentText, postData }) => (
        <Link key={boardId} to={`post/:${boardId}`}>
          <LargeCard {...postData}>{contentText}</LargeCard>
        </Link>
      ))}
    </Posts>
  );
}

PostList.propTypes = {
  postList: PropTypes.array,
};

export default PostList;

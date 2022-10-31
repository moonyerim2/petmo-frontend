import React from "react";
import { useParams } from "react-router-dom";

function PostViewPage() {
  const { postId } = useParams();

  return <div>게시글 {postId}</div>;
}

export default PostViewPage;

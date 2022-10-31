import React from "react";
import { useParams } from "react-router-dom";

function WritePostPage() {
  const { postId } = useParams();

  return postId ? <div>게시물 {postId}수정</div> : <div>게시물 작성</div>;
}

export default WritePostPage;

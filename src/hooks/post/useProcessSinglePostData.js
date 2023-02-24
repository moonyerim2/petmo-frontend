import { useState, useEffect } from "react";
import { createPost } from "./postFormat";
import { callSinglePostApi } from "../../api";

function useProcessSinglePostData(postId) {
  const [post, setPost] = useState({});

  useEffect(() => {
    (async () => {
      const response = await callSinglePostApi(postId);
      const post = await processSinglePostData(response.data);
      setPost(post);
    })();
  }, []);

  const processSinglePostData = async (singlePost) => {
    const post = await createPost(singlePost);
    return post;
  };

  return post;
}

export default useProcessSinglePostData;

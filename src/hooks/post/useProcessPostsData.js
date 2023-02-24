import { useState, useEffect } from "react";
import { createPost } from "./postFormat";

function useProcessPostsData(postList) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const posts = await processPostsData(postList);
      setPosts(posts);
    })();
  }, [postList]);

  const processPostsDataReducer = async (posts, postData) => {
    const post = await createPost(postData);
    return [...(await posts), post];
  };

  const processPostsData = async (postList) =>
    postList.reduce(processPostsDataReducer, []);

  return posts;
}

export default useProcessPostsData;

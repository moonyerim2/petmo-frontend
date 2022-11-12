import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { postContentAtom, postTagsAtom } from "../store";

const useWritePost = () => {
  const [canSubmitPost, setCanSubmitPost] = useState(false);
  const postTags = useRecoilValue(postTagsAtom);
  const postContent = useRecoilValue(postContentAtom);

  useEffect(() => {
    confirmPost();
  }, [postTags, postContent]);

  const confirmPost = () => {
    const hasTopicTag = postTags.topic !== "";
    const hasPetTag = postTags.pet.length !== 0;
    const hasContent = postContent.text !== "";

    if (hasTopicTag && hasPetTag && hasContent) {
      setCanSubmitPost(true);
    } else {
      setCanSubmitPost(false);
    }
  };

  return { canSubmitPost };
};

export default useWritePost;

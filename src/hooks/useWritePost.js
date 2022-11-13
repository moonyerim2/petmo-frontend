import { useState, useEffect } from "react";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { postTextAtom, postTagsAtom } from "../store";
import { callRegisterPostApi } from "../api";

const useWritePost = () => {
  const [canSubmitPost, setCanSubmitPost] = useState(false);
  const postTags = useRecoilValue(postTagsAtom);
  const postText = useRecoilValue(postTextAtom);
  const formData = new FormData();

  const resetPostTags = useResetRecoilState(postTagsAtom);
  const resetPostText = useResetRecoilState(postTextAtom);

  useEffect(() => {
    return () => {
      resetPostTags();
      resetPostText();
    };
  }, []);

  useEffect(() => {
    confirmPost();
  }, [postTags, postText]);

  const confirmPost = () => {
    const hasTopicTag = postTags.topic !== "";
    const hasPetTag = postTags.pet.length !== 0;
    const hasText = postText !== "";

    if (hasTopicTag && hasPetTag && hasText) {
      setCanSubmitPost(true);
    } else {
      setCanSubmitPost(false);
    }
  };

  const registerPost = async () => {
    formData.set("topic", postTags.topic);
    formData.set("pet", postTags.pet);
    formData.set("text", postText);
    const response = await callRegisterPostApi(formData);
  };

  return { canSubmitPost, registerPost, formData };
};

export default useWritePost;

import { useState, useEffect } from "react";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { postTextAtom, postTagsAtom } from "../store";
import { callRegisterPostApi } from "../api";
import { postImageFilesAtom } from "../store";

const useWritePost = () => {
  const [canSubmitPost, setCanSubmitPost] = useState(false);
  const postTags = useRecoilValue(postTagsAtom);
  const postText = useRecoilValue(postTextAtom);
  const imageFiles = useRecoilValue(postImageFilesAtom);
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
    imageFiles.forEach((image) => formData.append("images", image.file));
    formData.set("topic", postTags.topic);
    formData.set("pet", postTags.pet);
    formData.set("text", postText);
    const response = await callRegisterPostApi(formData);
  };

  return { canSubmitPost, registerPost };
};

export default useWritePost;

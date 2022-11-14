import { useState, useEffect, useRef } from "react";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { postTextAtom, postTagsAtom } from "../store";
import { callRegisterPostApi } from "../api";
import { postImageFilesAtom } from "../store";

const useWritePost = () => {
  const [canSubmitPost, setCanSubmitPost] = useState(false);
  const postTags = useRecoilValue(postTagsAtom);
  const postText = useRecoilValue(postTextAtom);
  const imageFiles = useRecoilValue(postImageFilesAtom);
  const snackbarMessage = useRef("");
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

  const hasTopicTag = postTags.topic !== "";

  const hasPetTag = postTags.pet.length !== 0;

  const hasText = postText !== "";

  const setSnackbarMessage = () => {
    if (!hasTopicTag) return "주제를 입력해주세요!";
    if (!hasPetTag) return "반려동물을 입력해주세요!";
    if (!hasText) return "내용을 입력해주세요!";
  };

  const confirmPost = () => {
    if (hasTopicTag && hasPetTag && hasText) {
      setCanSubmitPost(true);
    } else {
      setCanSubmitPost(false);
    }

    snackbarMessage.current = setSnackbarMessage();
  };

  const registerPost = async () => {
    imageFiles.forEach((image) => formData.append("images", image.file));
    formData.set("topic", postTags.topic);
    formData.set("pet", postTags.pet);
    formData.set("text", postText);
    const response = await callRegisterPostApi(formData);
    console.log(response);
  };

  return {
    canSubmitPost,
    snackbarMessage: snackbarMessage.current,
    registerPost,
  };
};

export default useWritePost;

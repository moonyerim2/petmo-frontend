import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { postTextAtom, postTagsAtom } from "../store";
import { callRegisterPostApi, callUploadImageApi } from "../api";
import { postImageFilesAtom, user } from "../store";

const useWritePost = () => {
  const navigate = useNavigate();
  const [canSubmitPost, setCanSubmitPost] = useState(false);
  const postTags = useRecoilValue(postTagsAtom);
  const postText = useRecoilValue(postTextAtom);
  const imageFiles = useRecoilValue(postImageFilesAtom);
  const snackbarMessage = useRef("");
  const {
    user_address: { regionDepth2 },
  } = useRecoilValue(user);
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

  const registerImages = async () => {
    imageFiles.forEach((image) => formData.append("images", image.file));
    const {
      data: { createImages },
    } = await callUploadImageApi(formData);

    return createImages.map((image) => image.id);
  };

  const registerPost = async () => {
    const payload = {
      content: postText,
      imageIds: imageFiles.length ? await registerImages() : [],
      categoryType: postTags.topic,
      boardAddress: regionDepth2,
      boardAnimalTypes: postTags.pet,
    };

    const response = await callRegisterPostApi(payload);
    navigate(`/post/${response.data}`);
  };

  return {
    canSubmitPost,
    snackbarMessage: snackbarMessage.current,
    registerPost,
  };
};

export default useWritePost;

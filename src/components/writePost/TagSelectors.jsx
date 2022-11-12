import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import {
  TagSelector,
  BottomModal,
  TopicModalContent,
  PetModalContent,
} from "../../components";
import { postTagsSelector } from "../../store";
import { getKeyByValue } from "../../util";
import { tags } from "../../constants";

const CLOSE = -1;
const PET_TAG_MAX_NUM = 3;

const placeholder = {
  topic: "어떤 이야기를 하고 싶나요?",
  pet: "어떤 반려동물에 대해 이야기하나요?",
};

function TagSelectors() {
  const [postTags, setPostInputs] = useRecoilState(postTagsSelector);
  const [modalIndex, setModalIndex] = useState(CLOSE);
  const [isOpen, setIsOpen] = useState(false);

  const isFullySelectedPetTags = postTags.pet.length === PET_TAG_MAX_NUM;

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const modalContent = [
    <TopicModalContent key={0} selectedTag={postTags.topic} />,
    <PetModalContent
      key={1}
      selectedTag={postTags.pet}
      isDisabled={!isFullySelectedPetTags}
    />,
  ];

  const onClickBottomModal = ({ target }) => {
    const tag = target.innerText;
    const tagName = getKeyByValue(tags, tag);
    const isFull = isFullySelectedPetTags && !postTags.pet.includes(tag);

    if (!tagName) return;
    if (tagName === "pet" && isFull) return;
    setPostInputs([tagName, tag]);
  };

  const toggleModal = (isOpen) => {
    setIsOpen(isOpen);
    if (!isOpen) {
      setModalIndex(CLOSE);
    }
  };

  const onClickTagSelector = (index) => () => {
    toggleModal(true);
    setModalIndex(index);
  };

  return (
    <>
      <TagSelector
        selectedTag={postTags.topic}
        placeholder={placeholder.topic}
        onClick={onClickTagSelector(0)}
      />
      <TagSelector
        selectedTag={postTags.pet.join("/")}
        placeholder={placeholder.pet}
        onClick={onClickTagSelector(1)}
      />
      <BottomModal
        content={modalContent}
        index={modalIndex}
        isOpen={isOpen}
        toggleModal={toggleModal}
        onClick={onClickBottomModal}
      />
    </>
  );
}

export default TagSelectors;

import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { postTagsSelector } from "../../store";
import {
  TagSelector,
  BottomModal,
  TopicModalContent,
  PetModalContent,
} from "../../components";
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

  const onClickBottomModal = ({ target }) => {
    const tag = target.innerText;
    const tagName = getKeyByValue(tags, tag);
    const isFull = isFullySelectedPetTags && !postTags.pet.includes(tag);

    if (!tagName) return;
    if (tagName === "pet" && isFull) return;
    setPostInputs([tagName, tag]);
  };

  const toggleModal = (isOpen, index) => {
    setIsOpen(isOpen);
    setModalIndex(index);
  };

  const modalContent = [
    <TopicModalContent key={0} selectedTag={postTags.topic} />,
    <PetModalContent
      key={1}
      selectedTag={postTags.pet}
      isDisabled={!postTags.pet.length}
      onClickCloseButton={() => toggleModal(false, CLOSE)}
    />,
  ];

  return (
    <>
      <TagSelector
        selectedTag={postTags.topic}
        placeholder={placeholder.topic}
        onClick={() => toggleModal(true, 0)}
      />
      <TagSelector
        selectedTag={postTags.pet.join("/")}
        placeholder={placeholder.pet}
        onClick={() => toggleModal(true, 1)}
      />
      <BottomModal
        content={modalContent}
        index={modalIndex}
        isOpen={isOpen}
        onClickDimLayer={() => toggleModal(false, CLOSE)}
        onClickModal={onClickBottomModal}
      />
    </>
  );
}

export default TagSelectors;

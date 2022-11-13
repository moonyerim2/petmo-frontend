import React, { useEffect, useState } from "react";
import {
  TagSelector,
  BottomModal,
  TopicModalContent,
  PetModalContent,
} from "../../components";
import { getKeyByValue } from "../../util";
import { tags } from "../../constants";
import { useTagSelector } from "../../hooks";

const CLOSE = -1;

const placeholder = {
  topic: "어떤 이야기를 하고 싶나요?",
  pet: "어떤 반려동물에 대해 이야기하나요?",
};

function TagSelectors() {
  const [modalIndex, setModalIndex] = useState(CLOSE);
  const { postTags, isOpen, topicTag, petTag, setIsOpen, setTags } =
    useTagSelector();

  useEffect(() => setModalIndex(modalIndex + 1), [topicTag]);

  const onClickBottomModal = (e) => {
    const tag = e.target.innerText;
    const tagName = getKeyByValue(tags, tag);
    if (!tagName) return;
    setTags(tagName, tag);
  };

  const toggleModal = (isOpen, index) => {
    setIsOpen(isOpen);
    setModalIndex(index);
  };

  const modalContent = [
    <TopicModalContent key={0} selectedTag={topicTag} />,
    <PetModalContent
      key={1}
      selectedTag={petTag}
      isDisabled={!petTag.length}
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

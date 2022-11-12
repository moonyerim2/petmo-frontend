import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { postTagsAtom } from "../store";
import { addArrayElement, removeArrayElement } from "../util";

const PET_TAG_MAX_NUM = 3;

const useTagSelector = () => {
  const [postTags, setPostTags] = useRecoilState(postTagsAtom);
  const [isOpen, setIsOpen] = useState(false);
  const [topicTag, setTopicTag] = useState("");
  const [petTag, setPetTag] = useState([]);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      setPostTags({ topic: topicTag, pet: petTag });
    }
  }, [isOpen]);

  const isFullySelectedPetTags = petTag.length === PET_TAG_MAX_NUM;

  const setTags = (tagName, tag) => {
    const isFull = isFullySelectedPetTags && !petTag.includes(tag);
    if (tagName === "pet") {
      if (isFull) return;

      const newPetTag = petTag.includes(tag)
        ? removeArrayElement(petTag, tag)
        : addArrayElement(petTag, tag);

      setPetTag(newPetTag);
    } else {
      setTopicTag(tag);
    }
  };

  return {
    postTags,
    isOpen,
    topicTag,
    petTag,
    setIsOpen,
    setTags,
  };
};

export default useTagSelector;

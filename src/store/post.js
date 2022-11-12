import { atom, selector } from "recoil";
import { addArrayElement, removeArrayElement } from "../util";

export const postTags = atom({
  key: "postTags",
  default: {
    topic: "자유",
    pet: [],
  },
});

export const postTagsSelector = selector({
  key: "postTagsSelector",
  get: ({ get }) => {
    return get(postTags);
  },
  set: ({ set }, tagInput) => {
    const [tagName, tag] = tagInput;

    set(postTags, (prevState) => {
      if (tagName === "pet") {
        const newPetTags = prevState.pet.includes(tag)
          ? removeArrayElement(prevState.pet, tag)
          : addArrayElement(prevState.pet, tag);
        return { ...prevState, ...{ pet: newPetTags } };
      }
      return { ...prevState, ...{ topic: tag } };
    });
  },
});

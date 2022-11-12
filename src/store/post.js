import { atom } from "recoil";

export const postTagsAtom = atom({
  key: "postTags",
  default: {
    topic: "",
    pet: [],
  },
});

export const postContentAtom = atom({
  key: "postContent",
  default: {
    text: "",
    image: [],
  },
});

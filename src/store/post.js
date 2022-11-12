import { atom } from "recoil";

export const postTagsAtom = atom({
  key: "postTags",
  default: {
    topic: "",
    pet: [],
  },
});

export const postTextAtom = atom({
  key: "postText",
  default: "",
});

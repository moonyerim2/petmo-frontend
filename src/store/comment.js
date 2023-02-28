import { atom } from "recoil";

export const commentToWhoAtom = atom({
  key: "commentToWho",
  default: {
    postAuthor: "",
    commentToWho: "",
  },
});

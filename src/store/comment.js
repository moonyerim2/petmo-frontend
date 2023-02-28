import { atom } from "recoil";

export const commentPayloadIdsAtom = atom({
  key: "commentPayloadIds",
  default: {
    boardId: "",
    commentId: "",
  },
});

export const commentToWhoAtom = atom({
  key: "commentToWho",
  default: {
    postAuthor: "",
    commentToWho: "",
  },
});

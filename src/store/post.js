import { atom, selector } from "recoil";

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

export const postImageFilesAtom = atom({
  key: "postImageFiles",
  default: [],
});

export const postImageFilesSelector = selector({
  key: "postImageFilesSelector",
  get: ({ get }) => {
    return get(postImageFilesAtom);
  },
  set: ({ set }, { action, deleteImageSrc, newImagesFiles }) => {
    set(postImageFilesAtom, (prevState) => {
      if (action === "ADD") {
        return [...prevState, ...newImagesFiles];
      }
      if (action === "DELETE") {
        URL.revokeObjectURL(deleteImageSrc);
        const newState = prevState.filter(({ src }) => src !== deleteImageSrc);
        return newState;
      }
    });
  },
});

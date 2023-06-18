import { atom, selector } from "recoil";
import { getCookie } from "../util";

export const authenticated = atom({
  key: "authenticated",
  default: getCookie("SESSION"),
});

export const user = atom({
  key: "user",
  default: {
    email: "",
    user_address: {
      addressName: "",
      regionDepth1: "",
      regionDepth2: "",
    },
    username: "",
    hasPet: null,
    first: null,
  },
});

export const userSelector = selector({
  key: "userSelector",
  get: ({ get }) => {
    return get(user);
  },
  set: ({ set }, userData) => {
    set(user, (prevState) => ({ ...prevState, ...userData }));
  },
});

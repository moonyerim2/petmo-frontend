import { atom, selector } from "recoil";
import { getCookie } from "../util";

export const authenticated = atom({
  key: "authenticated",
  default: getCookie("session"),
});

export const user = atom({
  key: "user",
  default: {
    town: "",
    img: "",
    nickname: "",
    hasPet: null,
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

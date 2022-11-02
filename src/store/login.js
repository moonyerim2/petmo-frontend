import { atom, selector } from "recoil";

export const loginInputs = atom({
  key: "loginInputs",
  default: {
    email: "",
    password: "",
  },
});

export const loginInputsSelector = selector({
  key: "setNewLoginInputs",
  get: ({ get }) => {
    return get(loginInputs);
  },
  set: ({ set }, textFieldInput) => {
    set(loginInputs, (prevState) => ({ ...prevState, ...textFieldInput }));
  },
});

export const loginValidationMessages = atom({
  key: "loginValidationMessages",
  default: [],
});

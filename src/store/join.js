import { atom, selector } from "recoil";
import { validateFieldRules } from "../util";
import { joinInputValidationRules } from "../constants";

export const joinInputs = atom({
  key: "joinInputs",
  default: {
    email: "",
    password: "",
    name: "",
    nickname: "",
  },
});

export const joinInputsSelector = selector({
  key: "joinInputsSelector",
  get: ({ get }) => {
    return get(joinInputs);
  },
  set: ({ set }, textFieldInput) => {
    set(joinInputs, (prevState) => ({ ...prevState, ...textFieldInput }));
  },
});

export const joinValidationMessages = atom({
  key: "joinValidationMessages",
  default: {
    email: "",
    password: "",
    name: "",
    nickname: "",
  },
});

export const joinValidationMessagesSelector = selector({
  key: "joinValidationMessagesSelector",
  get: ({ get }) => {
    return get(joinValidationMessages);
  },
  set: ({ set }, textFieldInput) => {
    const [fieldName, text] = Object.entries(textFieldInput)[0];
    const errorMessage = validateFieldRules(
      joinInputValidationRules[fieldName],
      text
    );
    set(joinValidationMessages, (prevState) => ({
      ...prevState,
      [fieldName]: errorMessage,
    }));
  },
});

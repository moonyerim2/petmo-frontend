import { atom, selector } from "recoil";
import { validateFieldRules } from "../util";
import { joinInputValidationRules } from "../constants";

export const joinInputs = atom({
  key: "joinInputs",
  default: {
    email: "",
    username: "",
    password: "",
    passwordCheck: "",
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
    passwordCheck: "",
    username: "",
  },
});

export const joinValidationMessagesSelector = selector({
  key: "joinValidationMessagesSelector",
  get: ({ get }) => {
    return get(joinValidationMessages);
  },
  set: ({ set }, { textFieldInput, password }) => {
    const [fieldName, text] = Object.entries(textFieldInput)[0];
    const validateParams = {
      validationRules: joinInputValidationRules[fieldName],
      string: text,
      comparisonTarget: fieldName === "passwordCheck" ? password : null,
    };

    const errorMessage = validateFieldRules({ ...validateParams });

    set(joinValidationMessages, (prevState) => ({
      ...prevState,
      [fieldName]: errorMessage,
    }));
  },
});

export const isJoinCompleted = atom({
  key: "isJoinCompleted",
  default: false,
});

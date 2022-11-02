import { textFieldLabels } from "../constants";

export const isEmptyString = (input) => input === "";

export const validateLoginInput = (loginInputs) => {
  return Object.entries(loginInputs).reduce(
    (message, [key, value]) =>
      isEmptyString(value)
        ? `${textFieldLabels[key]}를 입력해 주세요.`
        : message,
    ""
  );
};

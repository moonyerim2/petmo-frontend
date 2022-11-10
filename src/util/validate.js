import { validateErrorMessage } from "../constants";

export const hasNotEmptyStingValue = (object) =>
  Object.values(object).every((value) => value !== "");

export const hasOnlyEmptyStingValue = (object) =>
  Object.values(object).every((value) => value === "");

export const isEmptyString = (input) => input === "";

export const validateLoginInput = (loginInputs) => {
  const { email, password } = loginInputs;
  if (isEmptyString(email)) {
    return {
      errorField: { email: true, password: false },
      errorMessage: validateErrorMessage.wrongEmail,
    };
  }

  if (isEmptyString(password)) {
    return {
      errorField: { email: false, password: true },
      errorMessage: validateErrorMessage.wrongPassword,
    };
  }

  return {
    errorField: { email: false, password: false },
    errorMessage: null,
  };
};

export const validateFieldRules = ({
  validationRules,
  string,
  comparisonTarget,
}) => {
  return validationRules.reduce((errorMessage, validationRule) => {
    const { rule, match, message } = validationRule;
    const result = comparisonTarget
      ? rule.test(comparisonTarget, string)
      : rule.test(string);
    return result !== match ? message : errorMessage;
  }, "");
};

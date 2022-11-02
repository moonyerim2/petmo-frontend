export const isEmptyString = (input) => input === "";

export const validateLoginInput = (loginInputs) => {
  const { email, password } = loginInputs;
  if (isEmptyString(email)) {
    return `이메일을 입력해 주세요.`;
  }

  if (isEmptyString(password)) {
    return `비밀번호를 입력해 주세요.`;
  }
};

export const validateFieldRules = (validationRules, string) => {
  return validationRules.reduce((errorMessage, validationRule) => {
    const { rule, match, message } = validationRule;
    return rule.test(string) !== match ? message : errorMessage;
  }, "");
};

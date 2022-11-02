export const cantContainWhitespace = {
  rule: /\s/,
  match: false,
  message: "공백을 포함할 수 없습니다.",
};

export const minimumLengthLimit = (limit) => ({
  rule: new RegExp(`(.){${limit}}`),
  match: true,
  message: `최소한 ${limit}글자 이상 이어야 합니다.`,
});

export const joinInputValidationRules = {
  email: [cantContainWhitespace],
  password: [minimumLengthLimit(8), cantContainWhitespace],
  name: [minimumLengthLimit(1), cantContainWhitespace],
  nickname: [minimumLengthLimit(2), cantContainWhitespace],
};

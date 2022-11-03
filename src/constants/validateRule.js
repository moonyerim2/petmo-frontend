export const validateErrorMessage = {
  wrongEmail: "이메일을 입력해 주세요.",
  wrongPassword: "비밀번호를 입력해 주세요.",
  loginFailed:
    "아이디(로그인 전용 아이디) 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요.",
};

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

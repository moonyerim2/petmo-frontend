export const textFieldLabels = {
  email: "이메일",
  password: "비밀번호",
  passwordCheck: "비밀번호 재입력",
  name: "이름",
  username: "닉네임",
};

export const emailFieldProps = (authType) => ({
  id: "email",
  label: textFieldLabels.email,
  isLabelHidden: false,
  text: "",
  type: "email",
  name: "email",
  placeholder: authType === "join" ? "예) pmr7348.navaer.com" : "",
});

export const passwordFieldProps = (authType) => ({
  id: "password",
  label: textFieldLabels.password,
  isLabelHidden: false,
  text: "",
  type: "password",
  name: "password",
  placeholder:
    authType === "join" ? "영문, 숫자, 특수문자 조합 8자리 이상" : "",
});

export const passwordCheckFieldProps = {
  id: "passwordCheck",
  label: textFieldLabels.passwordCheck,
  isLabelHidden: false,
  text: "",
  type: "password",
  name: "passwordCheck",
  placeholder: "영문, 숫자, 특수문자 조합 8자리 이상",
};

export const usernameFieldProps = {
  id: "username",
  label: textFieldLabels.username,
  isLabelHidden: false,
  text: "",
  type: "text",
  name: "username",
  placeholder: "최소 2글자 이상",
};

export const addressSearchFieldProps = {
  id: "addressSearch",
  label: "주소 검색",
  isLabelHidden: true,
  text: "",
  type: "text",
  name: "addressSearch",
  placeholder: "구명(시,군)으로 검색 (ex. 구로구)",
};

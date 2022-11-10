export const textFieldLabels = {
  email: "이메일",
  password: "비밀번호",
  name: "이름",
  nickname: "닉네임",
};

export const emailFieldProps = {
  id: "email",
  label: textFieldLabels.email,
  isLabelHidden: false,
  text: "",
  type: "email",
  name: "email",
  placeholder: "",
};

export const passwordFieldProps = {
  id: "password",
  label: textFieldLabels.password,
  isLabelHidden: false,
  text: "",
  type: "password",
  name: "password",
  placeholder: "",
};

export const nameFieldProps = {
  id: "name",
  label: textFieldLabels.name,
  isLabelHidden: false,
  text: "",
  type: "text",
  name: "name",
  placeholder: "",
};

export const nicknameFieldProps = {
  id: "nickname",
  label: textFieldLabels.nickname,
  isLabelHidden: false,
  text: "",
  type: "text",
  name: "nickname",
  placeholder: "",
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

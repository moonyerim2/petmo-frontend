export const loginButtonProps = {
  type: "submit",
  name: "login",
  text: "로그인",
  isDisabled: false,
};

export const joinButtonProps = {
  type: "submit",
  name: "join",
  text: "가입하기",
  isDisabled: true,
};

export const goBackButtonProps = {
  type: "button",
  name: "back",
  img: { src: "/img/back.svg", alt: "뒤로가기" },
  isDisabled: false,
};

export const exitButtonProps = {
  type: "button",
  name: "back",
  img: { src: "/img/exit.svg", alt: "닫기" },
  isDisabled: false,
};

export const submitButtonProps = (text, isDisabled) => {
  return {
    type: "submit",
    name: "submit",
    text: text,
    isDisabled: isDisabled,
  };
};

export const setUpTownButtonProps = {
  type: "submit",
  name: "submit",
  text: "동네 입력하기",
  img: { src: "/img/plus.svg", alt: "동네 추가" },
  isDisabled: false,
};

export const yesButtonProps = {
  type: "button",
  name: "yes",
  text: "예",
  isDisabled: false,
};

export const noButtonProps = {
  type: "button",
  name: "no",
  text: "아니오",
  isDisabled: false,
};

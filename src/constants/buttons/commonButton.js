export const goBackButtonProps = {
  type: "button",
  name: "back",
  img: { src: "/img/back.svg", alt: "뒤로가기" },
  imgLocation: "left",
  isDisabled: false,
};

export const exitButtonProps = {
  type: "button",
  name: "back",
  img: { src: "/img/exit.svg", alt: "닫기" },
  imgLocation: "left",
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

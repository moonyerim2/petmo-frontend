export const localLoginButtonProps = {
  type: "submit",
  name: "login",
  text: "로그인",
  isDisabled: false,
};

export const kakaoLoginButtonProps = {
  type: "submit",
  name: "kakao-login",
  img: { src: "/img/kakao.svg", alt: "카카오 로고" },
  imgLocation: "left",
  gap: 8,
  text: "카카오로 로그인",
  isDisabled: false,
};

export const naverLoginButtonProps = {
  type: "submit",
  name: "naver-login",
  img: { src: "/img/naver.svg", alt: "네이버 로고" },
  imgLocation: "left",
  gap: 8,
  text: "네이버로 로그인",
  isDisabled: false,
};

export const joinButtonProps = {
  type: "submit",
  name: "join",
  text: "가입하기",
  isDisabled: true,
};

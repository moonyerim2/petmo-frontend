export const addressSearchOpenButtonProps = {
  type: "button",
  name: "addressSearchOpen",
  text: "동네 입력하기",
  img: { src: "/img/plus.svg", alt: "동네 추가" },
  imgLocation: "right",
  isDisabled: false,
};

export const findCurrentLocationButtonProps = {
  type: "submit",
  name: "findCurrentLocation",
  text: "현재 위치로 찾기",
  img: { src: "/img/location.svg", alt: "위치" },
  imgLocation: "left",
  isDisabled: false,
};

export const closeSearchTownButtonProps = {
  type: "button",
  name: "claseSearchTown",
  img: { src: "/img/back.svg", alt: "뒤로가기" },
  imgLocation: "left",
  isDisabled: false,
};

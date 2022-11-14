export const registerPostButtonProps = {
  type: "submit",
  name: "registerPost",
  text: "등록",
  isDisabled: false,
};

export const imageUploadButtonProps = (currentNum, maxNum) => ({
  type: "submit",
  name: "image",
  text: `${currentNum}/${maxNum}`,
  img: { src: "/img/image.svg", alt: "사진업로드" },
  imgLocation: "left",
  gap: 8,
  isDisabled: false,
});

export const petModalButtonProps = (text) => {
  return {
    type: "button",
    name: "tag",
    text: text,
    isDisabled: false,
  };
};

export const petModalCloseButtonProps = {
  type: "button",
  text: "확인",
  isDisabled: true,
};

export const addImageFileButtonProps = {
  type: "button",
  text: "",
  img: { src: "/img/file-add.svg", alt: "이미지 파일 추가" },
  imgLocation: "left",
  isDisabled: false,
};

export const deleteImageFileButtonProps = {
  type: "button",
  text: "",
  img: { src: "/img/file-delete.svg", alt: "이미지 파일 삭제" },
  imgLocation: "left",
  isDisabled: false,
};

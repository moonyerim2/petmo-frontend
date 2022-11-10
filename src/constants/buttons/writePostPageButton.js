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
  isDisabled: false,
});

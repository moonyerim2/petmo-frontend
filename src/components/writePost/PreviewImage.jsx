import React, { useRef } from "react";
import PropTypes from "prop-types";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { Button } from "../common";
import { postImageFilesSelector } from "../../store";
import { deleteImageFileButtonProps } from "../../constants";

const Wrapper = styled.span`
  display: inline-flex;
  position: relative;
  width: 102px;
  height: 101px;
  border-radius: 4px;
  overflow: hidden;
`;

const Image = styled.img`
  max-width: 100%;
`;

const deleteImageFileButtonStyle = () => {
  return {
    position: "absolute",
    top: "8px",
    right: "8px",
    width: "16px",
    height: "16px",
  };
};

function PreviewImage({ src }) {
  const setImageFiles = useSetRecoilState(postImageFilesSelector);
  const image = useRef(null);

  const onClickFileDeleteButton = () => {
    setImageFiles({ action: "DELETE", deleteImageSrc: image.current.src });
  };

  return (
    <Wrapper className="preview-image">
      <Image ref={image} src={src} alt="미리보기" />
      <Button
        {...deleteImageFileButtonProps}
        onClick={onClickFileDeleteButton}
        style={deleteImageFileButtonStyle}
      />
    </Wrapper>
  );
}

PreviewImage.propTypes = {
  src: PropTypes.string,
};

export default PreviewImage;

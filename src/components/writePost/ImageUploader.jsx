import React from "react";
import { PropTypes } from "prop-types";
import styled, { css } from "styled-components";
import { useRecoilState } from "recoil";
import { Button } from "../common";
import { imageUploadButtonProps } from "../../constants";
import { postImageFilesSelector } from "../../store";

const MAX_IMAGE_NUM = 5;

const Wrapper = styled.div`
  ${({ theme: { sizes } }) =>
    css`
      ${{
        ...sizes.size1,
        position: "absolute",
        left: 0,
        bottom: 0,
        padding: "14px 20px",
        boxShadow: "0px -4px 12px rgba(0, 0, 0, 0.06)",
      }}
    `}
`;

const imageUploadButtonStyle = ({ layout, colors, lineHeights, fontSizes }) => {
  return {
    ...layout.flexCenter,
    color: colors.fontLight2,
    fontSize: fontSizes.body2,
    lineHeight: lineHeights[150],
  };
};

function ImageUploader({ inputRef }) {
  const [imageFiles, setImageFiles] = useRecoilState(postImageFilesSelector);

  const onClick = (e) => {
    e.preventDefault();
    if (imageFiles.length >= 5) return;
    inputRef.current.click();
  };

  const onChange = ({ target }) => {
    const files = target.files;
    if (imageFiles.length + files.length > 5) return;

    const newImagesFiles = Object.entries(files).reduce(
      (imageFiles, [i, file]) => {
        const src = URL.createObjectURL(file);
        imageFiles[i] = { file, src };
        return imageFiles;
      },
      []
    );

    setImageFiles({
      action: "ADD",
      newImagesFiles,
    });
  };

  return (
    <Wrapper>
      <Button
        {...imageUploadButtonProps(imageFiles.length, MAX_IMAGE_NUM)}
        onClick={onClick}
        style={imageUploadButtonStyle}
      />
      <label htmlFor="img-upload" style={{ display: "none" }}>
        <input
          ref={inputRef}
          type="file"
          id="img-upload"
          name="image"
          accept="image/jpg, image/jpeg, image/png"
          onChange={onChange}
          multiple={true}
        />
      </label>
    </Wrapper>
  );
}

ImageUploader.propTypes = {
  inputRef: PropTypes.object,
};

export default ImageUploader;

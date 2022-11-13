import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { Button } from "../common";
import { imageUploadButtonProps } from "../../constants";

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

function ImageUploader({ formData }) {
  const input = useRef(null);
  const [imageFiles, setImageFiles] = useState([]);

  const onClick = (e) => {
    e.preventDefault();
    if (imageFiles.length >= 5) return;
    input.current.click();
  };

  const onChange = ({ target }) => {
    const files = target.files;
    if (imageFiles.length + files.length > 5) return;

    const images = Object.entries(files).reduce((images, [i, file]) => {
      formData.append("images", file);
      images[i] = file;
      return images;
    }, []);

    setImageFiles([...imageFiles, ...images]);
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
          ref={input}
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
  formData: PropTypes.object,
};

export default ImageUploader;

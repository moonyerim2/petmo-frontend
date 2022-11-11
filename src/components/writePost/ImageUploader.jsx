import React from "react";
import { useRef } from "react";
import { Button } from "../common";
import { imageUploadButtonProps } from "../../constants";
import styled, { css } from "styled-components";

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

function ImageUploader() {
  const input = useRef(null);

  const onClick = () => {
    input.current.click();
  };

  return (
    <Wrapper>
      <Button
        {...imageUploadButtonProps(1, MAX_IMAGE_NUM)}
        onClick={onClick}
        style={imageUploadButtonStyle}
      >
        {`${0}/${MAX_IMAGE_NUM}`}
      </Button>
      <label htmlFor="img-upload" style={{ display: "none" }}>
        <input
          ref={input}
          type="file"
          id="img-upload"
          name="image"
          accept="image/*"
        />
      </label>
    </Wrapper>
  );
}

export default ImageUploader;

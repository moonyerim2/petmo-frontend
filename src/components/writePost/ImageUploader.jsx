import React from "react";
import { useRef } from "react";
import { Button } from "../common";
import { imageUploadButtonProps } from "../../constants";

const MAX_IMAGE_NUM = 5;

function ImageUploader() {
  const input = useRef(null);

  const onClick = () => {
    input.current.click();
  };

  return (
    <>
      <Button {...imageUploadButtonProps(1, MAX_IMAGE_NUM)} onClick={onClick}>
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
    </>
  );
}

export default ImageUploader;

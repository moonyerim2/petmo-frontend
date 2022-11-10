import React from "react";
import { Button } from "../common";

const MAX_PICTURE_NUM = 5;

function PictureUploader() {
  return (
    <div>
      <Button></Button>
      <label htmlFor="img-upload">
        <img src={`${process.env.PUBLIC_URL}/img/image.svg`} alt="" />
        {`${0}/${MAX_PICTURE_NUM}`}
        <input type="file" id="img-upload" name="image" accept="image/*" />
      </label>
    </div>
  );
}

export default PictureUploader;

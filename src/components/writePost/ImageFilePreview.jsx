import React from "react";
import { PropTypes } from "prop-types";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import PreviewImage from "./PreviewImage";
import { Button } from "../common";
import { postImageFilesSelector } from "../../store";
import { addImageFileButtonProps } from "../../constants";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 16px 20px 0;
  width: 100%;

  @media screen and (max-width: 460px) {
    .preview-image: not(: nth-child(3n)) {
      margin: 0 8px 8px 0;
    }
  }

  @media (min-width: 460px) and (max-width: 575px) {
    .preview-image: not(: nth-child(4n)) {
      margin: 0 8px 8px 0;
    }
  }

  @media (min-width: 575px) and (max-width: 670px) {
    .preview-image: not(: nth-child(5n)) {
      margin: 0 8px 8px 0;
    }
  }

  @media (min-width: 670px) {
    .preview-image: not(: nth-child(6n)) {
      margin: 0 8px 8px 0;
    }
  }
`;

const addImageFileButtonStyle = ({ colors }) => {
  return {
    width: "102px",
    height: "101px",
    borderRadius: "4px",
    border: `1px dashed ${colors.lineMedium}`,
  };
};

function ImageFilePreview({ inputRef }) {
  const imageFiles = useRecoilValue(postImageFilesSelector);

  const onClickFileAddButton = () => inputRef.current.click();

  return (
    <Wrapper>
      {imageFiles.map(({ src }) => (
        <PreviewImage key={src} src={src} alt="" />
      ))}
      <Button
        {...addImageFileButtonProps}
        onClick={onClickFileAddButton}
        style={addImageFileButtonStyle}
      />
    </Wrapper>
  );
}

ImageFilePreview.propTypes = {
  inputRef: PropTypes.object,
};

export default ImageFilePreview;

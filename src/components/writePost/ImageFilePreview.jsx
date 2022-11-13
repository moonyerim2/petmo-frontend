import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { postImageFilesAtom } from "../../store";
import PreviewImage from "./PreviewImage";

const Wrapper = styled.div`
  padding: 16px 20px 0;
  width: 100%;

  .preview-image: not(: last-child) {
    margin-right: 8px;
  }
`;

function ImageFilePreview() {
  const imageFiles = useRecoilValue(postImageFilesAtom);

  return (
    <Wrapper>
      {imageFiles.map(({ src }) => (
        <PreviewImage key={src} src={src} alt="" />
      ))}
    </Wrapper>
  );
}

export default ImageFilePreview;

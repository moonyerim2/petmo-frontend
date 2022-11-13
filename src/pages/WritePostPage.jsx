import React, { useRef } from "react";
import {
  PageHeader,
  RegisterPostButton,
  ImageUploader,
  PostTextarea,
  TagSelectors,
  ImageFilePreview,
} from "../components";
import { useWritePost } from "../hooks";
import { PageWrapper } from "../styled";

function WritePostPage() {
  const inputFile = useRef(null);
  const { canSubmitPost, registerPost } = useWritePost();

  const registerPostButton = (
    <RegisterPostButton
      isDisabled={!canSubmitPost}
      onClick={() => registerPost()}
    />
  );

  return (
    <form encType="multipart/form-data">
      <PageWrapper>
        <PageHeader
          leftButtonType="exit"
          pageTitle="게시글"
          rightButton={registerPostButton}
        />
      </PageWrapper>
      <TagSelectors />
      <PostTextarea />
      <ImageFilePreview inputRef={inputFile} />
      <ImageUploader inputRef={inputFile} />
    </form>
  );
}

export default WritePostPage;

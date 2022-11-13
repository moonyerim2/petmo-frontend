import React from "react";
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
      <ImageFilePreview />
      <ImageUploader />
    </form>
  );
}

export default WritePostPage;

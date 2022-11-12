import React from "react";
import {
  PageHeader,
  RegisterPostButton,
  ImageUploader,
  PostTextarea,
  TagSelectors,
} from "../components";
import { useWritePost } from "../hooks";
import { PageWrapper } from "../styled";

function WritePostPage() {
  const { canSubmitPost } = useWritePost();

  const registerPostButton = <RegisterPostButton isDisabled={!canSubmitPost} />;

  return (
    <form>
      <PageWrapper>
        <PageHeader
          leftButtonType="exit"
          pageTitle="게시글"
          rightButton={registerPostButton}
        />
      </PageWrapper>
      <TagSelectors />
      <PostTextarea />
      <ImageUploader />
    </form>
  );
}

export default WritePostPage;

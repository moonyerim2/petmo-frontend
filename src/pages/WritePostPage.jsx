import React from "react";
import {
  PageHeader,
  RegisterPostButton,
  ImageUploader,
  PostTextarea,
  TagSelectors,
} from "../components";
import { PageWrapper } from "../styled";

function WritePostPage() {
  const registerPostButton = <RegisterPostButton isDisabled={false} />;

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

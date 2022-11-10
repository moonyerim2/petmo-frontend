import React from "react";
import {
  PageHeader,
  RegisterPostButton,
  TagSelector,
  ImageUploader,
  PostTextarea,
} from "../components";
import { PageWrapper } from "../styled";

const placeholder = {
  topic: "어떤 이야기를 하고 싶나요?",
  pet: "어떤 반려동물에 대해 이야기하나요?",
};

function WritePostPage() {
  const registerPostButton = <RegisterPostButton />;

  return (
    <form>
      <PageWrapper>
        <PageHeader
          leftButtonType="exit"
          pageTitle={"게시글"}
          rightButton={registerPostButton}
        />
      </PageWrapper>
      <TagSelector placeholder={placeholder.topic} />
      <TagSelector placeholder={placeholder.pet} />
      <PostTextarea />
      <ImageUploader />
    </form>
  );
}

export default WritePostPage;

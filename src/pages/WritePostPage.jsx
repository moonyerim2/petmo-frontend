import React, { useState, useRef } from "react";
import {
  PageHeader,
  RegisterPostButton,
  ImageUploader,
  PostTextarea,
  TagSelectors,
  ImageFilePreview,
  Snackbar,
} from "../components";
import { useWritePost } from "../hooks";
import { PageWrapper } from "../styled";

function WritePostPage() {
  const { canSubmitPost, snackbarMessage, registerPost } = useWritePost();
  const [isOpenSnackbar, setIsOpenSnackbar] = useState(false);
  const inputFile = useRef(null);

  const registerPostButton = (
    <RegisterPostButton
      isDisabled={!canSubmitPost}
      onClickWhenAble={() => registerPost()}
      onClickWhenDisable={() => setIsOpenSnackbar(true)}
    />
  );

  return (
    <form>
      <PageWrapper>
        <PageHeader
          leftButtonType="goback"
          pageTitle="게시글"
          rightButton={registerPostButton}
        />
      </PageWrapper>
      <TagSelectors />
      <PostTextarea />
      <ImageFilePreview inputRef={inputFile} />
      <ImageUploader inputRef={inputFile} />
      <Snackbar
        open={isOpenSnackbar}
        setOpen={setIsOpenSnackbar}
        snackbarMessage={snackbarMessage}
      />
    </form>
  );
}

export default WritePostPage;

import React, { useState, useEffect } from "react";
import {
  PageHeader,
  RegisterPostButton,
  TagSelector,
  ImageUploader,
  PostTextarea,
  BottomModal,
} from "../components";
import { PageWrapper } from "../styled";

const placeholder = {
  topic: "어떤 이야기를 하고 싶나요?",
  pet: "어떤 반려동물에 대해 이야기하나요?",
};

const CLOSE = -1;

const style = {
  border: "1px solid red",
  height: "100px",
};

function WritePostPage() {
  const [modalIndex, setModalIndex] = useState(CLOSE);
  const [isOpen, setIsOpen] = useState(false);

  const registerPostButton = <RegisterPostButton />;
  const modalContent = [
    <div key={0} style={style}>
      1
    </div>,
    <div key={1} style={style}>
      2
    </div>,
  ];

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const toggleModal = (isOpen) => {
    setIsOpen(isOpen);
    if (!isOpen) {
      setModalIndex(CLOSE);
    }
  };

  const onClickTagSelector = (index) => () => {
    toggleModal(true);
    setModalIndex(index);
  };

  return (
    <form>
      <PageWrapper>
        <PageHeader
          leftButtonType="exit"
          pageTitle="게시글"
          rightButton={registerPostButton}
        />
      </PageWrapper>
      <TagSelector
        placeholder={placeholder.topic}
        onClick={onClickTagSelector(0)}
      />
      <TagSelector
        placeholder={placeholder.pet}
        onClick={onClickTagSelector(1)}
      />
      <PostTextarea />
      <ImageUploader />
      <BottomModal
        content={modalContent}
        index={modalIndex}
        isOpen={isOpen}
        toggleModal={toggleModal}
      />
    </form>
  );
}

export default WritePostPage;

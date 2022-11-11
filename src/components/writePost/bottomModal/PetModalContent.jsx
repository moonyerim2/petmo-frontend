import React from "react";
import styled, { css } from "styled-components";
import { BigButton, Button } from "../../common";
import { ModalTitle } from "../../../styled";
import {
  petModalButtonProps,
  petModalCloseButtonProps,
  tag,
} from "../../../constants";

const contentTitle = "어떤 반려동물에 대해 이야기하나요?";

const TitleContainer = styled.div`
  ${({ theme: { layout, colors } }) =>
    css`
      ${{ ...layout.flex_aCenter_jBetween }};

      span {
        color: ${colors.gray700};
      }
    `}
`;

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin: 16px 0;
`;

const tagButtonStyle =
  (isSelected) =>
  ({ colors, borderRadiuses }) => {
    return {
      height: "46px",
      color: isSelected ? colors.main : colors.black,
      border: `1px solid ${isSelected ? colors.main : colors.gray400}`,
      borderRadius: borderRadiuses.small,
    };
  };

function PetModalContent() {
  const selectedTag = ["강아지", "고양이"];

  const isSeleted = (tag) => selectedTag.includes(tag);
  return (
    <>
      <TitleContainer>
        <ModalTitle>{contentTitle}</ModalTitle>
        <span>{`${selectedTag.length}/3`}</span>
      </TitleContainer>
      <ButtonContainer>
        {tag.pet.map((tag) => (
          <Button
            key={tag}
            {...petModalButtonProps(tag)}
            style={tagButtonStyle(isSeleted(tag))}
          />
        ))}
      </ButtonContainer>
      <BigButton buttonProps={petModalCloseButtonProps} isDisabled={false} />
    </>
  );
}

export default PetModalContent;

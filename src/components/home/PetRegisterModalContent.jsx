import React from "react";
import { PropTypes } from "prop-types";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";
import { BigButton } from "../common";
import { SubText } from "../../styled";
import { registerButtonProps, noRegisterButtonProps } from "../../constants";

const mainText = "반려동물\n정보를 등록해보세요!";
const subText = "'프로필'에서 언제든 변경할 수 있어요.";

const Wrapper = styled.div`
  margin-top: 24px;
  text-align: center;
  white-space: pre-wrap;

  button: last-child {
    margin-top: 8px;
  }
`;

const MainText = styled.p`
  ${({ theme: { fontSizes, lineHeights } }) => css`
    ${{
      paddingTop: "20px",
      fontSize: fontSizes.subtitle2,
      lineHeight: lineHeights[140],
      fontWeight: 500,
    }}
  `}
`;

function PetRegisterModalContent({ setIsOpen }) {
  const navigate = useNavigate();

  const onClickRegisterButton = () => {
    navigate("../mypet");
    setIsOpen(false);
  };

  return (
    <Wrapper>
      <img src={`${process.env.PUBLIC_URL}/img/dog.svg`} alt="강아지" />
      <MainText>{mainText}</MainText>
      <SubText>{subText}</SubText>
      <BigButton
        buttonProps={registerButtonProps}
        onClick={onClickRegisterButton}
      />
      <BigButton
        buttonProps={noRegisterButtonProps}
        bgColor={"white"}
        fontColor={"main"}
        onClick={() => setIsOpen(false)}
      />
    </Wrapper>
  );
}

PetRegisterModalContent.propTypes = {
  setIsOpen: PropTypes.func,
};

export default PetRegisterModalContent;

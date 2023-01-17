import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";
import { Button } from "../common";
import { noButtonProps, yesButtonProps } from "../../constants";
import { DimLayer } from "../../styled";

const Popup = styled.div`
  ${({ theme: { colors } }) =>
    css`
      ${{
        position: "absolute",
        zIndex: "999",
        top: "50%",
        left: "50%",
        width: "272px",
        height: "136px",
        padding: "16px",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
        backgroundColor: colors.white,
        borderRadius: "16px",
      }}
    `}
`;

const PopupText = styled.p`
  ${({ theme: { fontSizes, lineHeights } }) =>
    css`
      ${{
        margin: "26px 0 16px",
        fontWeight: "500",
        fontSize: fontSizes.body1,
        lineHeight: lineHeights[140],
      }}
    `}
`;

const popupButtonStyle =
  (fontColor) =>
  ({ colors, fontSizes, borderRadiuses }) => {
    return {
      width: "84px",
      height: "40px",
      borderRadius: borderRadiuses.small,
      fontSize: fontSizes.body1,
      color: colors[fontColor],
    };
  };

function JoinCancelPopup({ setIsGoBack }) {
  const navigate = useNavigate();
  const onClickYesButton = () => {
    navigate("../login");
  };

  const onClickNoButton = () => {
    setIsGoBack(false);
  };

  return (
    <>
      <DimLayer isOpen={true} />
      <Popup>
        <PopupText>회원가입을 종료하시겠습니까?</PopupText>
        <Button
          {...yesButtonProps}
          style={popupButtonStyle("main")}
          onClick={onClickYesButton}
        />
        <Button
          {...noButtonProps}
          style={popupButtonStyle("body1")}
          onClick={onClickNoButton}
        />
      </Popup>
    </>
  );
}

JoinCancelPopup.propTypes = {
  setIsGoBack: PropTypes.func,
};

export default JoinCancelPopup;

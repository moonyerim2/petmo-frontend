import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { Button } from "../common";
import { noButtonProps, yesButtonProps } from "../../constants";

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
      <div>회원가입을 종료하시겠습니까?</div>
      <Button {...yesButtonProps} onClick={onClickYesButton} />
      <Button {...noButtonProps} onClick={onClickNoButton} />
    </>
  );
}

JoinCancelPopup.propTypes = {
  setIsGoBack: PropTypes.func,
};

export default JoinCancelPopup;

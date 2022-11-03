import React from "react";
import PropTypes from "prop-types";
import { Button } from "../common";
import { backButtonProps } from "../../constants";

function JoinHeader({ setIsGoBack }) {
  const onClickBackButton = () => {
    setIsGoBack(true);
  };

  return (
    <>
      <Button {...backButtonProps} onClick={onClickBackButton} />
      <span>회원가입</span>
    </>
  );
}

JoinHeader.propTypes = {
  setIsGoBack: PropTypes.func,
};

export default JoinHeader;

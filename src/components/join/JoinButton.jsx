import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import PropTypes from "prop-types";
import { BottomButton } from "../common";
import { isJoinCompleted, joinInputsSelector } from "../../store";
import { callJoinApi } from "../../api";
import { joinButtonProps as defaultJoinButtonProps } from "../../constants";

function JoinButton({ isDisabled }) {
  const joinInputs = useRecoilValue(joinInputsSelector);
  const setIsCompleted = useSetRecoilState(isJoinCompleted);

  const onClickJoinButton = async () => {
    const response = await callJoinApi(joinInputs);
    if (response.status === 201) {
      setIsCompleted(true);
    }
  };

  return (
    <BottomButton
      buttonProps={defaultJoinButtonProps}
      onClick={onClickJoinButton}
      isDisabled={isDisabled}
    />
  );
}

JoinButton.propTypes = {
  isDisabled: PropTypes.bool,
};

export default JoinButton;

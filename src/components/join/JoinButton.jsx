import React from "react";
import PropTypes from "prop-types";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { BottomButton } from "../common";
import { isJoinCompleted, joinInputsSelector } from "../../store";
import { callJoinApi } from "../../api";
import { joinButtonProps as defaultJoinButtonProps } from "../../constants";

function JoinButton({ isDisabled, failToJoin }) {
  const joinInputs = useRecoilValue(joinInputsSelector);
  const setIsCompleted = useSetRecoilState(isJoinCompleted);

  const payload = Object.entries(joinInputs).reduce(
    (payload, [fieldName, input]) =>
      fieldName !== "passwordCheck"
        ? { ...payload, [fieldName]: input }
        : payload,
    {}
  );

  const onClickJoinButton = async (e) => {
    e.preventDefault();
    const response = await callJoinApi(payload);
    if (response.status === 201) {
      setIsCompleted(true);
    } else if (response.status === 400) {
      const message = response.data.message;
      failToJoin(message);
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
  failToJoin: PropTypes.func,
};

export default JoinButton;

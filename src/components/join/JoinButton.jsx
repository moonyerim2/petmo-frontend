import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import PropTypes from "prop-types";
import { Button } from "../common";
import { isJoinCompleted, joinInputsSelector } from "../../store";
import { callJoinApi } from "../../api";
import { joinButtonProps as defaultJoinButtonProps } from "../../constants";

function JoinButton({ isDisabled }) {
  const joinInputs = useRecoilValue(joinInputsSelector);
  const setIsCompleted = useSetRecoilState(isJoinCompleted);

  const joinButtonProps = () => {
    if (!isDisabled) {
      return {
        ...defaultJoinButtonProps,
        isDisabled: false,
      };
    }

    return defaultJoinButtonProps;
  };

  const onClickJoinButton = async (e) => {
    e.preventDefault();
    const status = await callJoinApi(joinInputs);
    if (status === 201) {
      setIsCompleted(true);
    }
  };

  return <Button {...joinButtonProps()} onClick={onClickJoinButton} />;
}

JoinButton.propTypes = {
  isDisabled: PropTypes.bool,
};

export default JoinButton;

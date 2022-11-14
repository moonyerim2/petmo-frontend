import React from "react";
import PropTypes from "prop-types";
import { Button, buttonColors } from "../button";

const bottomButtonStyle =
  (isDisabled) =>
  ({ fontSizes, sizes, colors }) => {
    return {
      ...sizes.size1,
      ...buttonColors(isDisabled)({ colors }),
      position: "absolute",
      left: 0,
      bottom: 0,
      fontSize: fontSizes.body1,
      fontWeight: 500,
    };
  };

function BottomButton({ buttonProps, isDisabled }) {
  const bottomButtonProps = () => {
    return {
      ...buttonProps,
      isDisabled: isDisabled,
    };
  };

  const onClickBottomButton = (e) => {
    e.preventDefault();
  };

  return (
    <Button
      {...bottomButtonProps()}
      onClick={onClickBottomButton}
      style={bottomButtonStyle(isDisabled)}
    />
  );
}

BottomButton.propTypes = {
  buttonProps: PropTypes.object,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default BottomButton;

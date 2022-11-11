import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import { buttonColors } from "./buttonStyle";

const bigButtonStyle =
  (isDisabled, fontColor, bgColor) =>
  ({ fontSizes, sizes, colors, borderRadiuses, layout, lineHeights }) => {
    return {
      ...layout.flexCenter,
      ...sizes.size1,
      ...buttonColors(isDisabled, fontColor, bgColor)({ colors }),
      fontSize: fontSizes.body1,
      fontWeight: 500,
      lineHeight: lineHeights[150],
      borderRadius: borderRadiuses.small,
    };
  };

function BigButton({ buttonProps, isDisabled, fontColor, bgColor, onClick }) {
  return (
    <Button
      {...buttonProps}
      style={bigButtonStyle(isDisabled, fontColor, bgColor)}
      onClick={onClick}
    />
  );
}

BigButton.propTypes = {
  buttonProps: PropTypes.object,
  isDisabled: PropTypes.bool,
  fontColor: PropTypes.string,
  bgColor: PropTypes.string,
  onClick: PropTypes.func,
};

export default BigButton;

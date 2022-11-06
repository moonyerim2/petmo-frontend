import React from "react";
import { Button } from "../../components";
import { setUpTownButtonProps } from "../../constants";

const setUpTownButtonStyle = ({ colors, common, borderRadius }) => {
  return {
    ...common.flex_aCenter_jBetween,
    ...common.buttonSize,
    padding: "16px 16px 16px 12px",
    border: `1px solid ${colors.gray400}`,
    borderRadius: borderRadius.small,
    color: colors.gray600,
  };
};

function SetUpTownButton() {
  return <Button {...setUpTownButtonProps} style={setUpTownButtonStyle} />;
}

export default SetUpTownButton;

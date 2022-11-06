import React from "react";
import Button from "./Button";
import { exitButtonProps } from "../../../constants";

const exitButtonStyle = () => {
  return {
    width: "24px",
    height: "24px",
  };
};

function ExitButton() {
  return <Button {...exitButtonProps} style={exitButtonStyle} />;
}

export default ExitButton;

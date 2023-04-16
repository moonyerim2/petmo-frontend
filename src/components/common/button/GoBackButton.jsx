import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { goBackButtonProps } from "../../../constants";

const goBackButtonStyle = () => {
  return {
    width: "24px",
    height: "24px",
  };
};

function GoBackButton() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(-1);
  };

  return (
    <Button
      {...goBackButtonProps}
      onClick={onClick}
      style={goBackButtonStyle}
    />
  );
}

export default GoBackButton;

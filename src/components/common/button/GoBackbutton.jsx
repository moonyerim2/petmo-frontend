import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { goBackButtonProps } from "../../../constants";

function GoBackButton() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(-1);
  };

  return <Button {...goBackButtonProps} onClick={onClick} />;
}

export default GoBackButton;

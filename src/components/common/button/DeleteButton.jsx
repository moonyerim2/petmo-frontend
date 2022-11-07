import React from "react";
import Button from "./Button";
import { deleteButtonProps } from "../../../constants";

const deleteButtonStyle = () => {
  return {
    width: "24px",
    height: "24px",
  };
};

function DeleteButton() {
  return <Button {...deleteButtonProps} style={deleteButtonStyle} />;
}

export default DeleteButton;

import React from "react";
import { Button } from "../common";
import { registerPostButtonProps } from "../../constants";

function RegisterPostButton() {
  return <Button {...registerPostButtonProps} />;
}

export default RegisterPostButton;

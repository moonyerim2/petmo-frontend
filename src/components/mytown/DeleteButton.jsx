import React from "react";
import Button from "../common/button/Button";
import { callDeleteMyTownApi } from "../../api";
import { deleteButtonProps } from "../../constants";
import { useUser } from "../../hooks";

const deleteButtonStyle = () => {
  return {
    width: "24px",
    height: "24px",
  };
};

function DeleteButton() {
  const { updateUserData } = useUser();

  const onClick = async () => {
    const response = await callDeleteMyTownApi();
    if (response.status === 200) updateUserData();
  };

  return (
    <Button
      {...deleteButtonProps}
      onClick={onClick}
      style={deleteButtonStyle}
    />
  );
}

export default DeleteButton;

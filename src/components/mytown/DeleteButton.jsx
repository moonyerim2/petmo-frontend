import React from "react";
import Button from "../common/button/Button";
import { useRecoilState } from "recoil";
import { callDeleteMyTownApi } from "../../api";
import { user } from "../../store";
import { deleteButtonProps } from "../../constants";

const deleteButtonStyle = () => {
  return {
    width: "24px",
    height: "24px",
  };
};

function DeleteButton() {
  const [{ userId }, setUser] = useRecoilState(user);

  const onClick = () => {
    const data = callDeleteMyTownApi(userId);
    setUser(data);
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

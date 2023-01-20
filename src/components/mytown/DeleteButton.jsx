import React from "react";
import { useSetRecoilState } from "recoil";
import Button from "../common/button/Button";
import { callDeleteMyTownApi, callGetUserApi } from "../../api";
import { deleteButtonProps } from "../../constants";
import { userSelector } from "../../store";

const deleteButtonStyle = () => {
  return {
    width: "24px",
    height: "24px",
  };
};

function DeleteButton() {
  const setUser = useSetRecoilState(userSelector);

  const onClick = async () => {
    callDeleteMyTownApi();
    const response = await callGetUserApi();
    await setUser(response.data);
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

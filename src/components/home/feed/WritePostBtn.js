import React from "react";
import styled from "styled-components";
import Fab from "@mui/material/Fab";
import PostIcon from "../../../css/icon/PostIcon.svg";
import { Link } from "react-router-dom";

const WritePostIcon = styled.img``;
const WritePostButton = styled(Fab)`
  &&.MuiButtonBase-root {
    background-color: #fa3c89;
    position: fixed;
    right: 20px;
    bottom: 73px;
  }
`;

export default function FloatingActionButtons() {
  return (
    <WritePostButton component={Link} to={"/write"}>
      <WritePostIcon src={PostIcon} />
    </WritePostButton>
  );
}

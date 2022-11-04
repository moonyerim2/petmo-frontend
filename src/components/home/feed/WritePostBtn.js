import React from "react";
import styled from "styled-components";
import Fab from "@mui/material/Fab";
import PostIcon from "../../../css/icon/PostIcon.svg";
import { Link } from "react-router-dom";

const WritePostButton = styled(Fab)`
  &&.MuiButtonBase-root {
    background-color: ${({ theme: { colors } }) => colors.main};
    position: fixed;
    z-index: 998;
    right: 20px;
    bottom: 73px;
  }
`;

export default function FloatingActionButtons() {
  return (
    <WritePostButton component={Link} to={"/write"}>
      <img src={PostIcon} alt="게시글 작성" />
    </WritePostButton>
  );
}

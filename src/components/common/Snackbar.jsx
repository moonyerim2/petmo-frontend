import React from "react";
import { PropTypes } from "prop-types";
import styled, { css } from "styled-components";
import { default as MuiSnackbar } from "@mui/material/Snackbar";

const StyledSnackbar = styled(MuiSnackbar)`
  &.MuiSnackbar-root {
    left: 20px;
    right: 20px;
    bottom: calc(56px + 16px);
  }

  .MuiPaper-root {
    display: flex;
    align-items: center;

    ${({ theme: { lineHeights, colors, fontSizes, sizes } }) =>
      css`
        ${{
          ...sizes.size4,
          lineHeight: lineHeights[140],
          fontSize: fontSizes.body2,
          color: colors.white,
          backgroundColor: colors.black,
        }}
      `}
  }

  .MuiSnackbarContent-message {
    padding: 0;
  }
`;

function Snackbar({ open, setOpen, snackbarMessage }) {
  const handleClose = (open, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <StyledSnackbar
      open={open}
      autoHideDuration={2000}
      onClose={handleClose}
      message={snackbarMessage}
    />
  );
}

Snackbar.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  snackbarMessage: PropTypes.string,
};

export default Snackbar;

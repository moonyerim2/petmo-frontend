import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "styled-components";

function CommentSubmitButton({ isDisabled }) {
  const { color } = useTheme();

  return (
    <button type="submit">
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="36"
          height="36"
          rx="18"
          fill={isDisabled ? color.disable : color.main}
        />
        <path
          d="M12.4004 16.4L18.1591 10L23.6004 16.0397"
          stroke={isDisabled ? color.gray300 : color.white}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.1523 10V26"
          stroke={isDisabled ? color.gray300 : color.white}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

CommentSubmitButton.propTypes = {
  isDisabled: PropTypes.bool,
};

export default CommentSubmitButton;

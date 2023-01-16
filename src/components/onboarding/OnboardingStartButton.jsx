import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { BigButton } from "../common";

const ButtonWrapper = styled.div`
  position: absolute;
  width: calc(100% - 40px);
  bottom: 24px;
  opacity: ${({ loading }) => (loading ? 1 : 0)};
  transition: all 300ms;
`;

function OnboardingStartButton({ loading, buttonProps, fontColor, bgColor }) {
  const navigate = useNavigate();

  return (
    <ButtonWrapper loading={loading}>
      <BigButton
        buttonProps={buttonProps}
        fontColor={fontColor}
        bgColor={bgColor}
        onClick={() => navigate("./login")}
      />
    </ButtonWrapper>
  );
}

OnboardingStartButton.propTypes = {
  loading: PropTypes.bool,
  buttonProps: PropTypes.object,
  fontColor: PropTypes.string,
  bgColor: PropTypes.string,
};

export default OnboardingStartButton;

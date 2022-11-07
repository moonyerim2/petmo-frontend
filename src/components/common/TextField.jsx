import React, { useState } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const StyledLabel = styled.label`
  ${({ theme, isLabelHidden }) => css`
    ${isLabelHidden ? { ...theme.a11yHidden } : null}
  `}
`;

const StyledInput = styled.input`
  ${({ theme, style }) => css`
    ${{ ...style(theme) }}
  `}
`;

function TextField({
  id,
  label,
  isLabelHidden,
  text,
  type,
  name,
  placeholder,
  onChange,
  onBlur,
  style,
}) {
  const [input, setInput] = useState(text);

  return (
    <>
      <StyledLabel isLabelHidden={isLabelHidden} htmlFor={id}>
        {label}
      </StyledLabel>
      <StyledInput
        type={type}
        id={id}
        name={name}
        defaultValue={input}
        placeholder={placeholder}
        onBlur={(e) => {
          setInput(e.target.value);
          if (onBlur) onBlur(e);
        }}
        onChange={onChange}
        style={style}
      />
    </>
  );
}

TextField.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  isLabelHidden: PropTypes.bool,
  text: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  pageInputs: PropTypes.object,
  setPageInputs: PropTypes.func,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  style: PropTypes.func,
};

export default TextField;

import React, { useState } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const StyledLabel = styled.label`
  ${({ theme, isLabelHidden, labelStyle }) => css`
    ${[isLabelHidden, labelStyle].reduce((style, prop, i) => {
      if (i === 0 && prop === true) {
        return { ...style, ...theme.a11yHidden };
      } else if (prop instanceof Function) {
        return { ...style, ...prop(theme) };
      } else {
        return { ...style };
      }
    }, {})}
  `}
`;

const StyledInput = styled.input`
  ${({ theme, inputStyle, isFocus }) => css`
    ${inputStyle instanceof Function && { ...inputStyle(theme, isFocus) }}
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
  onFocus,
  labelStyle,
  inputStyle,
}) {
  const [input, setInput] = useState(text);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <>
      <StyledLabel
        isLabelHidden={isLabelHidden}
        htmlFor={id}
        labelStyle={labelStyle}
      >
        {label}
      </StyledLabel>
      <StyledInput
        type={type}
        id={id}
        name={name}
        defaultValue={input}
        placeholder={placeholder}
        isFocus={isFocus}
        onFocus={(e) => {
          setIsFocus(true);
          if (onFocus) onFocus(e);
        }}
        onBlur={(e) => {
          setInput(e.target.value);
          setIsFocus(false);
          if (onBlur) onBlur(e);
        }}
        onChange={onChange}
        inputStyle={inputStyle}
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
  onFocus: PropTypes.func,
  labelStyle: PropTypes.func,
  inputStyle: PropTypes.func,
};

export default TextField;

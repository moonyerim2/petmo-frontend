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
  ${({ theme, inputStyle }) => css`
    ${inputStyle instanceof Function && { ...inputStyle(theme) }}
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
  labelStyle,
  inputStyle,
}) {
  const [input, setInput] = useState(text);

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
        onBlur={(e) => {
          setInput(e.target.value);
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
  labelStyle: PropTypes.func,
  inputStyle: PropTypes.func,
};

export default TextField;

import React, { useState } from "react";
import PropTypes from "prop-types";

function TextField({
  id,
  label,
  text,
  type,
  name,
  placeholder,
  onChange,
  onBlur,
}) {
  const [input, setInput] = useState(text);

  return (
    <label htmlFor={id}>
      {label}
      <input
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
      />
    </label>
  );
}

TextField.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  pageInputs: PropTypes.object,
  setPageInputs: PropTypes.func,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};

export default TextField;

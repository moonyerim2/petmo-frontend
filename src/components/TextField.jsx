import React, { useState } from "react";
import PropTypes from "prop-types";

function TextField({
  id,
  label,
  text,
  type,
  name,
  placeholder,
  setPageInputs,
}) {
  const [input, setInput] = useState(text);

  const onBlur = (e) => {
    const { value, name } = e.target;
    setPageInputs({ [name]: value });
    setInput(value);
  };

  return (
    <label htmlFor={id}>
      {label}
      <input
        type={type}
        id={id}
        name={name}
        defaultValue={input}
        placeholder={placeholder}
        onBlur={onBlur}
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
};

export default TextField;

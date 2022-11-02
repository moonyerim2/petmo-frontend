import React, { useState } from "react";
import PropTypes from "prop-types";

function TextField({
  id,
  label,
  text,
  type,
  name,
  placeholder,
  pageInputs,
  setPageInputs,
  onChange,
}) {
  const [input, setInput] = useState(text);

  const onBlur = (e) => {
    const { value, name } = e.target;
    const newInputs = { ...pageInputs, [name]: value };
    setPageInputs(newInputs);
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
};

export default TextField;

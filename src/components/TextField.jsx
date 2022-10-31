import React, { useState } from "react";

function TextField({
  id,
  label,
  text,
  type,
  name,
  placeholder,
  pageInputs,
  setPageInputs,
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
      />
    </label>
  );
}

export default TextField;

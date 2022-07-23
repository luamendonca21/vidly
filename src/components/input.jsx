import React from "react";

const Input = ({ name, label, value, onChange }) => {
  let type = name == "username" ? "text" : "password";
  return (
    <div className=" col form-group">
      <label htmlFor={name} style={{ fontWeight: "bold", color: "#495057" }}>
        {label}
      </label>
      <input
        name={name}
        autoFocus
        value={value}
        onChange={onChange}
        id={name}
        type={type}
        className="form-control"
        placeholder={`Enter your ${name}`}
      />
    </div>
  );
};

export default Input;

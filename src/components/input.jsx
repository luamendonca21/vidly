import React from "react";
import App from "./../App";

const Input = ({ type, name, label, value, error, onChange }) => {
  let autoFocus = name === "username" ? "autofocus" : "";
  return (
    <div className=" col form-group">
      <label
        htmlFor={name}
        style={{ marginLeft: "20%", fontWeight: "bold", color: "#495057" }}
      >
        {label}
      </label>
      <input
        autoFocus={autoFocus}
        value={value}
        onChange={onChange}
        style={{ borderRadius: 20 }}
        type={type}
        name={name}
        id={name}
        className="form-control"
        placeholder={`Enter your ${name}`}
      />
      {error && (
        <div style={{ marginTop: 5 }} className="alert alert-danger">
          {error}
        </div>
      )}
    </div>
  );
};

export default Input;

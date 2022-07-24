import React from "react";
import App from "./../App";

const Input = ({ name, label, error, ...rest }) => {
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
        {...rest}
        name={name}
        style={{ borderRadius: 20 }}
        id={name}
        placeholder={`Enter your ${name}`}
        autoFocus={autoFocus}
        className="form-control"
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

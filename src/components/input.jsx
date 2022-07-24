import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  let autoFocus = name === "username" || name === "title" ? "autofocus" : "";
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
        autoFocus={autoFocus}
        className=" shadow form-control"
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

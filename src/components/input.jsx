import React from "react";

const Input = ({ type, name, label, value, error, onChange }) => {
  return (
    <div className=" col form-group">
      <label
        htmlFor={name}
        style={{ marginLeft: "20%", fontWeight: "bold", color: "#495057" }}
      >
        {label}
      </label>
      <input
        style={{ borderRadius: 20 }}
        name={name}
        autoFocus
        value={value}
        onChange={onChange}
        id={name}
        type={type}
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

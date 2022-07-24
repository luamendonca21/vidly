import React from "react";

const Select = ({ name, label, options, error, ...rest }) => {
  return (
    <div className=" col form-group">
      <label
        htmlFor={name}
        style={{ marginLeft: "20%", fontWeight: "bold", color: "#495057" }}
      >
        {label}
      </label>
      <select
        {...rest}
        name={name}
        id={name}
        style={{ borderRadius: 20 }}
        className="shadow form-control"
      >
        <option>Select the genre</option>
        {options.map((option) => (
          <option key={option._id} value={option._id}>
            {option.name}
          </option>
        ))}
      </select>
      {error && (
        <div style={{ marginTop: 5 }} className="alert alert-danger">
          {error}
        </div>
      )}
    </div>
  );
};

export default Select;

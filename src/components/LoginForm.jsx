import React, { Component } from "react";
import Input from "./input";
import Joi from "joi-browser";
import Form from "./common/form";
class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    console.log("Submitted");
  };
  render() {
    const { data, errors } = this.state;
    return (
      <div>
        <h2 style={{ textAlign: "center", color: "#495057" }}>Login</h2>
        <div>
          <form
            onSubmit={this.handleSubmit}
            className="col"
            style={{ marginTop: 30 }}
          >
            <Input
              error={errors.username}
              onChange={this.handleChange}
              value={data.username}
              label="Username"
              name="username"
            />
            <Input
              error={errors.password}
              onChange={this.handleChange}
              value={data.password}
              label="Password"
              name="password"
            />
            <div
              className="col"
              style={{
                marginTop: 40,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <button
                disabled={this.validate()}
                style={{ borderRadius: 30 }}
                className=" btn btn-danger btn-lg"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;

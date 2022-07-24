import React, { Component } from "react";
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
    return (
      <div>
        <h2 style={{ textAlign: "center", color: "#495057" }}>Login</h2>
        <div>
          <form
            onSubmit={this.handleSubmit}
            className="col"
            style={{ marginTop: 30 }}
          >
            {this.renderInput("username", "Username")}
            {this.renderInput("password", "Password", "password")}
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

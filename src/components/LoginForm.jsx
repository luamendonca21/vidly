import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import AnimatedPage from "./AnimatedPage";
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
      <AnimatedPage>
        <div>
          <h2 style={{ textAlign: "center", color: "#495057" }}>Login</h2>
          <div>
            <form
              onSubmit={this.handleSubmit}
              className="col"
              style={{ marginTop: 30 }}
            >
              {this.renderInput("username", "Username")}
              {this.renderInput("password", "Password", "", "password")}
              <div
                className="col"
                style={{
                  marginTop: 40,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {this.renderButton("Login")}
              </div>
            </form>
          </div>
        </div>
      </AnimatedPage>
    );
  }
}

export default LoginForm;

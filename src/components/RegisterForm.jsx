import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import AnimatedPage from "./animations/AnimatedPage";
class RegisterForm extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().min(5).label("Password"),
    name: Joi.string().required().label("Name"),
  };

  doSubmit = () => {
    console.log("Registered");
  };
  render() {
    return (
      <AnimatedPage>
        <div>
          <h2 style={{ textAlign: "center", color: "#495057" }}>Register</h2>
          <div>
            <form
              onSubmit={this.handleSubmit}
              className="col"
              style={{ marginTop: 30 }}
            >
              {this.renderInput("username", "Username")}
              {this.renderInput(
                "password",
                "Password",
                "At least 5 characters",
                "password"
              )}
              {this.renderInput("name", "Name")}
              <div
                className="col"
                style={{
                  marginTop: 40,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {this.renderButton("Register")}
              </div>
            </form>
          </div>
        </div>
      </AnimatedPage>
    );
  }
}

export default RegisterForm;

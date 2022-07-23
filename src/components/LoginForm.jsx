import React, { Component } from "react";
import Input from "./input";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {},
  };

  validate = () => {
    const errors = {};

    const { account } = this.state;

    if (account.username.trim() === "")
      errors.username = "Username is required";

    if (account.password.trim() === "")
      errors.password = "Password is required";

    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    console.log(errors);
    this.setState({ errors: errors || {} });
    if (errors) return;

    console.log("Submitted");
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
  };

  validateProperty = ({ name, value }) => {
    if (name === "username") {
      if (value.trim() === "") return "Username is required.";
    }
    if (name === "password") {
      if (value.trim() === "") return "Password is required.";
    }
  };
  render() {
    const { username, password } = this.state.account;
    const { errors } = this.state;
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
              value={username}
              label="Username"
              name="username"
            />
            <Input
              error={errors.password}
              onChange={this.handleChange}
              value={password}
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

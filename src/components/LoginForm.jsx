import React, { Component } from "react";
import Input from "./input";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };
  render() {
    const { username, password } = this.state.account;
    return (
      <div>
        <h2 style={{ textAlign: "center", color: "#495057" }}>Login</h2>
        <form
          onSubmit={this.handleSubmit}
          className="col"
          style={{ marginTop: 30 }}
        >
          <Input
            onChange={this.handleChange}
            value={username}
            label="Username"
            name="username"
          />
          <Input
            onChange={this.handleChange}
            value={password}
            label="Password"
            name="password"
          />
          <div
            className="col"
            style={{ marginTop: 30, display: "flex", justifyContent: "center" }}
          >
            <button className=" btn btn-danger btn-lg">Login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;

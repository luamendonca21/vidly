import React, { Component } from "react";

class LoginForm extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center", color: "#495057" }}>Login</h1>
        <form style={{ marginTop: 30 }}>
          <div className="form-group">
            <label
              htmlFor="username"
              style={{ fontWeight: "bold", color: "#495057" }}
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              className="form-control"
              placeholder="Enter your username"
            />
          </div>

          <div className="form-group">
            <label
              htmlFor="password"
              style={{ fontWeight: "bold", color: "#495057" }}
            >
              Password
            </label>
            <input
              id="password"
              type="text"
              className="form-control"
              placeholder="Enter your password"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;

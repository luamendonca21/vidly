import React, { Component } from "react";

class LoginForm extends Component {
  state = {};
  render() {
    return (
      <div>
        <h2 style={{ textAlign: "center", color: "#495057" }}>Login</h2>
        <form className="col" style={{ marginTop: 30 }}>
          <div className=" col form-group">
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

          <div className="col form-group">
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
          <div className="col" style={{ marginTop: 30 }}>
            <button className=" col-12 btn btn-danger btn-lg">Login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;

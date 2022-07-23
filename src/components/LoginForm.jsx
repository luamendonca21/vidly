import React, { Component } from "react";

class LoginForm extends Component {
  state = {
    account: { password: "" },
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
    return (
      <div>
        <h2 style={{ textAlign: "center", color: "#495057" }}>Login</h2>
        <form
          onSubmit={this.handleSubmit}
          className="col"
          style={{ marginTop: 30 }}
        >
          <div className=" col form-group">
            <label
              htmlFor="username"
              style={{ fontWeight: "bold", color: "#495057" }}
            >
              Username
            </label>
            <input
              name="username"
              autoFocus
              value={this.state.account.username}
              onChange={this.handleChange}
              id="username"
              type="text"
              className="form-control"
              placeholder="Enter your username"
            />
          </div>

          <div className="col form-group ">
            <label
              htmlFor="password"
              style={{ fontWeight: "bold", color: "#495057" }}
            >
              Password
            </label>
            <input
              name="password"
              onChange={this.handleChange}
              value={this.state.account.password}
              id="password"
              type="password"
              className="form-control"
              placeholder="Enter your password"
            />
          </div>
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

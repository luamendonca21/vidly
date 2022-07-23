import React, { Component } from "react";

class LoginForm extends Component {
  username = React.createRef();
  password = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();

    // Call the server
    const username = this.username.current.value;
    console.log(username);

    const password = this.password.current.value;
    console.log(password);
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
              autoFocus
              ref={this.username}
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
              ref={this.password}
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

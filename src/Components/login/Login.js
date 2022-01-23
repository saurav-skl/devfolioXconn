import React, { useState } from "react";
import "./login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <form className="form-1" onSubmit={onSubmit}>
        <h1>Login</h1>
        <label htmlFor="email">Email  </label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={onChange}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={onChange}
          minLength="6"
          required
        />
        <span>Forgot Password</span>
        <button value="Login">Login</button>
      </form>
    </div>
  );
};

export default Login;

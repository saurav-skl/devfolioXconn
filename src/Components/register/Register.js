import React, { useState } from "react";
import "./Register.css";
import PropTypes from "prop-types";
import { setAlert } from "../../actions/alert.js";
import { connect } from "react-redux";
import { register } from "../../actions/auth";

const Register = ({ setAlert, register }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords not match", "error");
    } else {
      register({name, email, password});
    }
  };

  return (
    <div className="container">
      <form className="form-1" onSubmit={onSubmit}>
        <h1>Register/SignUp</h1>
        <label htmlFor="name">Name</label>
        <input
          type="name"
          id="text"
          name="name"
          value={name}
          onChange={onChange}
          
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={onChange}
        
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={onChange}
         
          
        />
        <label htmlFor="password">Confirm Password</label>
        <input
          type="password"
          name="password2"
          id="password2"
          value={password2}
          onChange={onChange}
          minLength="6"
          
        />
        <button>Register</button>
      </form>
    </div>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired
};

export default connect(null, { setAlert, register })(Register);

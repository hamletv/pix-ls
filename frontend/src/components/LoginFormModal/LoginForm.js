import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import './LoginFormModal.css';

const LoginForm = () => {
    const dispatch = useDispatch();
    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
      e.preventDefault();
      setErrors([]);
      return dispatch(sessionActions.login({ credential, password })).catch(
        async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        }
      );
    };

    return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form-style">
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <ul>
          <label>
            Username/Email
            <input
              className="field-style field-full align-none"
              type="text"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              required placeholder="Enter username or email"
            />
          </label>
          <label>
            Password
            <input
              className="field-style field-full align-none"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required placeholder="Password"
            />
          </label>
        </ul>
        <button className="sign-up" type="submit">Log In</button>
        <button className="sign-up" type="submit">Demo</button>
      </form>
    </div>
    );
  }

  export default LoginForm;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../store/actions/auth";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [email, setEmail] = useState("johndoe@gmail.com");
  const [password, setPassword] = useState("secret");

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(login({email, password}, navigate))
  };

  return (
    <div>
      <div>
        <div>
          <img src={""} alt="Login" />
        </div>
        <div>
          <h2>Welcome back!</h2>
          <form onSubmit={submitForm}>
            <div>
              <input
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="text"
                required
              />
            </div>
            <div>
              <input
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                required
              />
            </div>
            <button type="submit">LOGIN</button>
          </form>
          <p>
            Don't have an account yet? Register <Link to="/register">here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AuthService } from "../../services/authService";

export const Login = () => {
  const [email, setEmail] = useState('johndoe@gmail.com');
  const [password, setPassword] = useState('secret');

  const submitLoginForm = (e) =>{
    e.preventDefault()
    AuthService.login({email, password}).then(res => console.log(res))
  }

  return (
    <div>
      <div>
        <div>
          <img src={""} alt="Login" />
        </div>
        <div>
          <h2>Welcome back!</h2>
          <form onSubmit={submitLoginForm}>
            <div>
              <input
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type='text'
                required
              />
            </div>
            <div>
              <input
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type='password'
                required
              />
            </div>
            <button type="submit" >LOGIN</button>
          </form>
          <p>
            Don't have an account yet? Register <Link to="/register">here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

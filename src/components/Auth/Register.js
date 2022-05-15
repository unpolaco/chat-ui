import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../store/actions/auth";

export const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("male");
  const [password, setPassword] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(register({firstName, lastName, email, gender, password}, navigate))
  };

  return (
    <div>
      <div>
        <div>
          <img src={""} alt="Register" />
        </div>
        <div>
          <h2>Create an account</h2>
          <form onSubmit={submitForm}>
            <div>
              <input
                placeholder="First name"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                type="text"
                required
              />
            </div>
            <div>
              <input
                placeholder="Last name"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                type="text"
                required
              />
            </div>
            <div>
              <select
                onChange={(e) => setGender(e.target.value)}
                value={gender}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
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
            <button type="submit">REGISTER</button>
          </form>
          <p>
            Already have an account? Login <Link to="/login">here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

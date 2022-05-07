import React from "react";
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <div>
      <div>
        <div>
          <img src={""} alt="Register" />
        </div>
        <div>
          <h2>Create an account</h2>
          <form>
            <div>
              <input placeholder="First name" />
            </div>
            <div>
              <input placeholder="Last name" />
            </div>
            <div>
              <select>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div>
              <input placeholder="Email" />
            </div>
            <div>
              <input placeholder="Password" />
            </div>
            <button type="submit">REGISTER</button>
          </form>
          <p>Already have an account? Login <Link to="/login">here</Link></p>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {updateProfile} from '../../store/actions/auth'

export const Modal = ({ setShowProfileModal }) => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.authReducer.user);

  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [gender, setGender] = useState(user.gender);
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    const form = { firstName, lastName, email, gender, avatar };
    if (password.length > 0) form.password = password
    const formData = new FormData();
    for (const key in form) {
      formData.append(key, form[key]);
    }
    dispatch(updateProfile(formData)).then(() => setShowProfileModal(false))
  };

  const closeModal = (e) => {
    e.stopPropagation();
    return setShowProfileModal(false);
  };

  return (
    <div>
      <div>
        <h3> Update Profile</h3>
      </div>
      <div>
        <form onSubmit={submitForm}>
          <div>
            <input
              placeholder="First name"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              type="text"
            />
          </div>
          <div>
            <input
              placeholder="Last name"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              type="text"
            />
          </div>
          <div>
            <select onChange={(e) => setGender(e.target.value)} value={gender}>
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
            />
          </div>
          <div>
            <input
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
            />
          </div>
          <div>
            <input onChange={(e) => setAvatar(e.target.files[0])} type="file" />
          </div>
          <button type="submit" onClick={submitForm} >UPDATE</button>
        </form>
      </div>
      <div>
        Modal Footer
        <button onClick={(e) => closeModal(e)}>CLOSE</button>
      </div>
    </div>
  );
};

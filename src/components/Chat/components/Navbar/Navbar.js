import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../../../store/actions/auth";
import { Modal } from "../../../Modal/Modal";

export const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);
  const [showProfileOptions, setShowProfileOptions] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(true);

  return (
    <div>
      <div onClick={() => setShowProfileOptions(!showProfileOptions)}>
        <img src="" alt="Avatar" />
        <p>
          {user.firstName} {user.lastName}
        </p>
        {showProfileOptions && (
          <div>
            <p onClick={()=> setShowProfileModal(true)}>Update profile</p>
            <p onClick={() => dispatch(logout())}>Logout</p>
          </div>
        )}

        {showProfileModal && <Modal onClose={()=> setShowProfileModal(false)}/>}
      </div>
    </div>
  );
};

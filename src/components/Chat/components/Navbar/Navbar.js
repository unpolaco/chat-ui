import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../../../store/actions/auth";

export const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);
  const [showProfileOptions, setShowProfileOptions] = useState(false);

  return (
    <div>
      <div onClick={() => setShowProfileOptions(!showProfileOptions)}>
        <img src="" alt="Avatar" />
        <p>
          {user.firstName} {user.lastName}
        </p>
        {showProfileOptions && (
          <div>
            <p>Update profile</p>
            <p onClick={() => dispatch(logout())}>Logout</p>
          </div>
        )}
      </div>
    </div>
  );
};

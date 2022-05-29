import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../../../store/actions/auth";
import { Modal } from "../../../Modal/Modal";
import {
  AppBar,
  Avatar,
  Box,
  Container,
  Divider,
  ListItemIcon,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Logout from "@mui/icons-material/Logout";
import { navbarProfileBtn } from "./Navbar.styles";

export const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);
  const [showProfileOptions, setShowProfileOptions] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [menuRef, setMenuRef] = useState(null);

  const handleClickMenu = (e) => {
    setShowProfileOptions(!showProfileOptions);
    setMenuRef(e.currentTarget);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Container maxWidth="xl" sx={{ flexGrow: 1 }}>
          <Toolbar disableGutters>
            <Typography component="h1" variant='h6' align="left" sx={{ flexGrow: 1 }}>Let's chat!</Typography>
            <div
              onClick={handleClickMenu}
              className={navbarProfileBtn}
            >
              <Typography component="h5" variant='h7' align="left" sx={{ marginRight: "15px" }}>
                {user.firstName} {user.lastName}
              </Typography>
    
              <Avatar src={user.avatar} />
              <ArrowDropDownIcon style={{ marginLeft: "10px" }} />
            </div>
            <Menu
              anchorEl={menuRef}
              id="account-menu"
              open={showProfileOptions}
              onClose={() => setShowProfileOptions(false)}
              sx={{ top: 10, right: 100 }}
            >
              <MenuItem
                onClick={() => {
                  setShowProfileModal(true);
                  setShowProfileOptions(false);
                }}
              >
                <Avatar /> Edit profile
              </MenuItem>
              <Divider />
              <MenuItem onClick={() => dispatch(logout())}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>

            {showProfileModal && (
              <Modal
                setShowProfileModal={(boolean) => setShowProfileModal(boolean)}
              />
             )} 
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

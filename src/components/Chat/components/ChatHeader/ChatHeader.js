import React, { useState } from "react";
import {
  Avatar,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { userStatus } from "../../../../utils/helpers";
import { StyledBadge } from "../Friend/Friend.styles";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Logout, Delete, PersonAddAlt } from "@mui/icons-material";

export const ChatHeader = ({ chat }) => {
  const [showChatOptions, setShowChatOptions] = useState(false);
  const [menuOptionsRef, setMenuOptionsRef] = useState(null);

  const [showAddFriendModal, setShowAddFriendModal] = useState(false);
  const [showLeaveChatModal, setShowLeaveChatModal] = useState(false);
  const [showDeleteChatModal, setShowDeleteChatModal] = useState(false);

  const handleClickChatOptions = (e) => {
    setShowChatOptions(!showChatOptions);
    setMenuOptionsRef(e.currentTarget);
  };
  return (
    <div>
      {chat.Users.map((user) => {
        return (
          <div key={user.id}>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
              userstatus={userStatus(user)}
            >
              <Avatar
                src={user.avatar}
                alt="User avatar"
                sx={{ width: "30px", height: "30px" }}
              />
            </StyledBadge>

            <Typography component="subtitle2" sx={{ margin: "10px" }}>
              {user.firstName} {user.lastName}
            </Typography>
          </div>
        );
      })}
      <IconButton onClick={handleClickChatOptions}>
        <MoreVertIcon />
      </IconButton>

      <Menu
        anchorEl={menuOptionsRef}
        open={showChatOptions}
        onClose={() => setShowChatOptions(false)}
      >
        <MenuItem>
          <ListItemIcon>
            <PersonAddAlt fontSize="small" />
          </ListItemIcon>
          Add user to chat
        </MenuItem>
        {chat.type === "group" && (
          <MenuItem>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Leave chat
          </MenuItem>
        )}

        <MenuItem>
          <ListItemIcon>
            <Delete fontSize="small" />
          </ListItemIcon>
          Delete Chat
        </MenuItem>
      </Menu>
    </div>
  );
};

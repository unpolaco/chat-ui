import React from "react";
import { Avatar, IconButton, Typography } from "@mui/material";
import { userStatus } from "../../../../utils/helpers";
import { StyledBadge } from "../Friend/Friend.styles";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export const ChatHeader = ({ chat }) => {
  return (
    <div>
      {chat.Users.map((user) => {
        return (
          <div>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
              userStatus={userStatus(user)}
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
      <IconButton>
        <MoreVertIcon />
      </IconButton>
    </div>
  );
};

import { Button, Divider, Paper, Typography } from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Friend } from "../Friend/Friend";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { addContactBtn, friendListWrapper } from "./FriendList.styles";
import { setCurrentChat } from "../../../../store/actions/chat";

export const FriendList = () => {
  const dispatch = useDispatch();
  const chats = useSelector((state) => state.chatReducer.chats);
  const openChat = (chat) => {
    console.log(chat);
    dispatch(setCurrentChat(chat));
  };
  return (
    <Paper className={friendListWrapper}>
      <div className={addContactBtn}>
        <Typography variant="subtitle1" sx={{ margin: "10px" }}>
          Friends
        </Typography>
        <Button>
          Add new <PersonAddIcon sx={{ marginLeft: "10px" }} />
        </Button>
      </div>
      <Divider />
      <div>
        {chats.length > 0 ? (
          chats.map((chat) => {
            return (
              <Friend click={() => openChat(chat)} chat={chat} key={chat.id} />
            );
          })
        ) : (
          <p>No friends added</p>
        )}
      </div>
    </Paper>
  );
};

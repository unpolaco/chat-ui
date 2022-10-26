import React, { FC } from "react";
import { Button, Divider, Paper, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { Friend } from "../Friend/Friend";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { addContactBtn, friendListWrapper } from "./FriendList.styles";
import { Chat } from "../../../../types/chat.types";
import { ChatState } from "../../../../store/reducers/chat.types";
import { setCurrentChat } from "../../../../store/reducers/chats";

export const FriendList: FC = () => {
  const dispatch = useDispatch();
  const chats = useSelector((state: ChatState) => state.chats);
  const openChat = (chat: Chat) => {
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
          chats.map((chat: Chat) => {
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

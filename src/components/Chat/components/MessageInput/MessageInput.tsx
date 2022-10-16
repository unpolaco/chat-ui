import React, { FC, useState } from "react";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import { IconButton, InputAdornment, OutlinedInput } from "@mui/material";
import { useSelector } from "react-redux";
import { Chat } from "../../../../types/chat.types";

interface MessageInputProps {
  chat: Chat;
}

interface ReceiverProps {
  chatId: string;
  fromUser: any;
  toUserId: string[];
  typing?: boolean;
}

export const MessageInput: FC<MessageInputProps> = ({ chat }) => {
  //@ts-ignore
  const user = useSelector((state) => state.authReducer.user);
  //@ts-ignore
  const socket = useSelector((state) => state.chatReducer.socket);

  const [message, setMessage] = useState("");
  const [image, setImage] = useState("");
  //@ts-ignore
  const handleMessage = (e) => {
    const value = e.target.value;
    setMessage(value);
    
    const receiver: ReceiverProps = {
      chatId: chat.id,
      fromUser: user,
      toUserId: chat.Users.map((user) => user.id),
    };

    if (value.length === 1) {
      receiver.typing = true;
      socket.emit("typing", receiver);
    }

    if (value.length === 0) {
      receiver.typing = false;
      socket.emit("typing", receiver);
    }
  };
  //@ts-ignore
  const handleKeyDown = (e, imageUpload) => {
    if (e.key === "Enter") sendMessage(imageUpload);
  };
  //@ts-ignore
  const sendMessage = (imageUpload) => {
    if (message.length < 1 && !imageUpload) return;
    console.log(user);
    const msg = {
      type: imageUpload ? "image" : "text",
      fromUserId: user.id,
      toUserId: chat.Users.map((user) => user.id),
      chatId: chat.id,
      message: imageUpload ? image : message,
    };

    setMessage("");
    setImage("");

    socket.emit("message", msg);
  };

  return (
    <div>
      <OutlinedInput
        value={message}
        onChange={(e) => handleMessage(e)}
        onKeyDown={(e) => handleKeyDown(e, false)}
        endAdornment={
          <InputAdornment position="end">
            <IconButton onClick={() => {}} onMouseDown={() => {}} edge="end">
              <SentimentSatisfiedAltIcon />
            </IconButton>
          </InputAdornment>
        }
      />
    </div>
  );
};

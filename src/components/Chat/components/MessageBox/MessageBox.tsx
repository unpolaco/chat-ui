import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Chat } from "../../../../types/chat.types";
import { MessageComponent } from "../MessageComponent/MessageComponent";

interface MessageBoxProps {
  chat: Chat;
}

export const MessageBox: FC<MessageBoxProps> = ({ chat }) => {
  //@ts-ignore
  const user = useSelector((state) => state.authReducer.user);

  return (
    <div>
      {chat.Messages.map((message, index) => {
        return (
          <MessageComponent
            user={user}
            chat={chat}
            message={message}
            index={index}
            key={message.id}
          />
        );
      })}
    </div>
  );
};

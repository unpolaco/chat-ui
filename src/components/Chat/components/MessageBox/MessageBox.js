import React from 'react'
import { useSelector } from 'react-redux'
import { Message } from '../Message/Message'

export const MessageBox = ({chat}) => {
    const user = useSelector(state => state.authReducer.user)
  return (
    <div>
        {
            chat.Messages.map((message, index) => {
                return <Message
                user={user}
                chat={chat}
                message={message}
                index={index}
                key={message.id}
                />
            })
        }

    </div>
  )
}

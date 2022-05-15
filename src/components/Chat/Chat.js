import React from 'react'
import {useSelector} from 'react-redux'

export const Chat = () => {
  const user = useSelector(state => state.authReducer.user)
  
  return (
    <div>
    <h1>Chat App</h1>
    <p>Welcome {user.firstName}</p>
    </div>
  )
}

import {combineReducers} from 'redux'
import { authReducer } from './auth'
import { chatReducer } from './chats'

export default combineReducers({authReducer, chatReducer})
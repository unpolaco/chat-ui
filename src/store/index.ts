import { reducer } from './reducers/index';
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

export const store = configureStore({reducer, middleware: [thunk] as const})
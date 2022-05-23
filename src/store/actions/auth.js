import { AuthService } from "../../services/authService"
import {LOGIN, REGISTER, LOGOUT, UPDATE_PROFILE} from "../types/types"

export const login = (params, navigate) => dispatch => {
    return AuthService.login(params)
    .then(data => {
            dispatch({type: LOGIN, payload: data})
            navigate('/')
        }).catch(err => {
            console.log("Error", err);
        })
}

export const register = (params, navigate) => dispatch => {
    return AuthService.register(params)
    .then(data => {
        dispatch({type: REGISTER, payload: data})
        navigate('/')
    }).catch(err => {
        console.log("Error", err);
    })
}

export const logout = () => dispatch => {
    AuthService.logout()
    dispatch({type: LOGOUT})
}

export const updateProfile = (params) => dispatch => {
    return AuthService.updateProfile(params)
    .then(data => {
        dispatch({type: UPDATE_PROFILE, payload: data})
    }).catch(err => {
        throw err
    })
}
import { createAction, props } from "@ngrx/store";
import { User } from "../models/user.model";
import { RequestError } from "../models/error.model";

export enum AuthActionType {
    SIGNUP = '[ Auth ] Signup',
    SIGNUP_SUCCESS = '[ Auth ] Signup Success',
    SIGNUP_FAIL = '[ Auth ] Signup Fail',

    LOGIN = '[ Auth ] Login',
    LOGIN_SUCCESS = '[ Auth ] Login Success',
    LOGIN_FAIL = '[ Auth ] Login Fail',

    LOGOUT = '[ Auth ] Logout',
    LOGOUT_SUCCESS = '[ Auth ] Logout Success',
    LOGOUT_FAIL = '[ Auth ] Logout Fail'
}

export const signup = createAction(AuthActionType.SIGNUP,props<{user: User}>())

export const signupSuccess = createAction(AuthActionType.SIGNUP_SUCCESS,props<{user: User}>())

export const signupFail = createAction(AuthActionType.SIGNUP_FAIL,props<{error: RequestError}>())

export const login = createAction(AuthActionType.LOGIN,props<{credentials: any}>())

export const loginSuccess = createAction(AuthActionType.LOGIN_SUCCESS,props<{user: User}>())

export const loginFail = createAction(AuthActionType.LOGIN_FAIL,props<{error: RequestError}>())

export const logout = createAction(AuthActionType.LOGOUT)

export const logoutSuccess = createAction(AuthActionType.LOGOUT_SUCCESS,props<{loggedOut: boolean}>())

export const logoutFail = createAction(AuthActionType.LOGOUT_FAIL,props<{error: RequestError}>())
import { createReducer, on } from '@ngrx/store';
import { RequestError } from '../models/error.model';
import { User } from '../models/user.model';
import {
  login,
  loginFail,
  loginSuccess,
  logout,
  logoutFail,
  logoutSuccess,
  signup,
  signupFail,
  signupSuccess,
} from '../actions/auth.action';

export interface AuthState {
  signingup: boolean;
  signedup: boolean;
  signupError?: RequestError;
  authenticating: boolean;
  authenticated: boolean;
  authenticationError?: RequestError;
  user?: User;

  loggingOut: boolean;
  loggedOut: boolean;
  logoutError?: RequestError;
}

const initialState: AuthState = {
  signingup: false,
  signedup: false,
  authenticating: false,
  authenticated: false,
  loggingOut: false,
  loggedOut: false,
};

export const authReducer = createReducer(
  initialState,
  on(signup, (state) => ({
    ...state,
    signingup: true,
  })),
  on(signupSuccess, (state, { user }) => ({
    ...state,
    signingup: false,
    signedup: true,
    user,
  })),
  on(signupFail, (state, { error }) => ({
    ...state,
    signingup: false,
    signedup: true,
    signupError: error,
  })),
  on(login, (state) => ({
    ...state,
    authenticating: true,
    authenticated: false,
  })),
  on(loginSuccess, (state, { user }) => ({
    ...state,
    authenticating: false,
    authenticated: true,
    user,
  })),
  on(loginFail, (state, { error }) => ({
    ...state,
    authenticating: false,
    authenticated: false,
    authenticationError: error,
  })),
  on(logout, (state) => ({
    ...state,
    loggingOut: true,
    loggedOut: false,
    logoutError: undefined,
  })),
  on(logoutSuccess, (state, { loggedOut }) => ({
    ...state,
    loggingOut: false,
    loggedOut,
    logoutError: undefined,
    user: undefined,
    authenticated: false
  })),
  on(logoutFail, (state, { error }) => ({
    ...state,
    loggingOut: false,
    loggedOut: false,
    logoutError: error,
  }))
);

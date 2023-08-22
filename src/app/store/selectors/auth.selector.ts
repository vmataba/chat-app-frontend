import { createSelector } from "@ngrx/store";
import { getAuthState } from ".";

export const getAuthenticating = createSelector(getAuthState,state => state.authenticating)

export const getAuthenticated = createSelector(getAuthState,state => state.authenticated)

export const getAuthenticationError = createSelector(getAuthState,state => state.authenticationError)

export const getSigningup = createSelector(getAuthState,state => state.signingup)

export const getSignedup = createSelector(getAuthState,state => state.signedup)

export const getSignupError = createSelector(getAuthState,state => state.signupError)

export const getUser = createSelector(getAuthState,state => state.user)
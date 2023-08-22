import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "../reducers";

export const getAppState =  createFeatureSelector<AppState>('app')

export const getAuthState = createSelector(getAppState,state => state.authState)

export const getChatState = createSelector(getAppState,state => state.chatState) 
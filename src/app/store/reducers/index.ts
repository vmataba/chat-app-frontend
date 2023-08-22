import { combineReducers } from "@ngrx/store";
import { AuthState, authReducer } from "./auth.reducer";
import { ChatState, chatReducer } from "./chat.reducer";

export interface AppState{
    authState: AuthState
    chatState: ChatState
}

export const reducers = combineReducers<AppState>({
    authState: authReducer,
    chatState: chatReducer
})
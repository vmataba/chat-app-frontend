import { createAction, props } from "@ngrx/store";
import { Friend } from "../models/friend.model";
import { RequestError } from "../models/error.model";
import { Message } from "../models/message.model";
import { User } from "../models/user.model";

export enum ChatActionType{

    LOAD_SUGGESTED_FRIENDS = '[ Chat ] Load Suggested Friends',
    LOAD_SUGGESTED_FRIENDS_SUCCESS = '[ Chat ] Load Suggested Friends Success',
    LOAD_SUGGESTED_FRIENDS_FAIL = '[ Chat ] Load Suggested Friends Fail',

    LOAD_FRIEND_REQUESTS = '[ Chat ] Load Friend Requests',
    LOAD_FRIEND_REQUESTS_SUCCESS = '[ Chat ] Load Friend Requests Success',
    LOAD_FRIEND_REQUESTS_FAIL = '[ Chat ] Load Friend Requests Fail',

    CANCEL_FRIEND_REQUEST = '[ Chat ] Cancel Friend Request',
    CANCEL_FRIEND_REQUEST_SUCCESS = '[ Chat ] Cancel Friend Request Success',
    CANCEL_FRIEND_REQUEST_FAIL = '[ Chat ] Cancel Friend Request Fail',

    LOAD_FRIENDS = '[ Chat ] Load Friends',
    LOAD_FRIENDS_SUCCESS = '[ Chat ] Load Friends Success',
    LOAD_FRIENDS_FAIL = '[ Chat ] Load Friends Fail',

    ADD_FRIEND = '[ Chat ] Add Friend',
    ADD_FRIEND_SUCCESS = '[ Chat ] Add Friend Success',
    ADD_FRIEND_FAIL = '[ Chat ] Add Friend Fail',

    ACCEPT_FRIEND = '[ Chat ] Accept Friend',
    ACCEPT_FRIEND_SUCCESS = '[ Chat ] Accept Friend Success',
    ACCEPT_FRIEND_FAIL = '[ Chat ] Accept Friend Fail',

    REMOVE_FRIEND = '[ Chat ] Remove Friend',
    REMOVE_FRIEND_SUCCESS = '[ Chat ] Remove Friend Success',
    REMOVE_FRIEND_FAIL = '[ Chat ] Remove Friend Fail',

    OPEN_CHAT = '[ Chat ] Open Chat',

    SEND_MESSAGE = '[ Chat ] Send Message',
    SEND_MESSAGE_SUCCESS = '[ Chat ] Send Message Success',
    SEND_MESSAGE_FAIL = '[ Chat ] Send Message Fail',

    LOAD_MESSAGES = '[ Chat ] Load Messages',
    LOAD_MESSAGES_SUCCESS = '[ Chat ] Load Messages Success',
    LOAD_MESSAGES_FAIL = '[ Chat ] Load Messages Fail',

    TOGGLE_FRIENDS_PANEL = '[ Chat ] Toggle Friends Panel'
}

export const loadSuggestedFriends = createAction(ChatActionType.LOAD_SUGGESTED_FRIENDS,props<{id?: number}>())

export const loadSuggestedFriendsSuccess = createAction(ChatActionType.LOAD_SUGGESTED_FRIENDS_SUCCESS,props<{friends: User[]}>())

export const loadSuggestedFriendsFail = createAction(ChatActionType.LOAD_SUGGESTED_FRIENDS_FAIL,props<{error: RequestError}>())

export const loadFriendRequests = createAction(ChatActionType.LOAD_FRIEND_REQUESTS,props<{id?: number}>())

export const loadFriendRequestsSuccess = createAction(ChatActionType.LOAD_FRIEND_REQUESTS_SUCCESS,props<{friends: Friend[]}>())

export const loadFriendRequestsFail = createAction(ChatActionType.LOAD_FRIEND_REQUESTS_FAIL,props<{error: RequestError}>())

export const loadFriends = createAction(ChatActionType.LOAD_FRIENDS,props<{id?: number}>())

export const loadFriendsSuccess = createAction(ChatActionType.LOAD_FRIENDS_SUCCESS,props<{friends: Friend[]}>())

export const loadFriendsFail = createAction(ChatActionType.LOAD_FRIENDS_FAIL,props<{error: RequestError}>())

export const addFriend = createAction(ChatActionType.ADD_FRIEND,props<{friend: Friend}>())

export const addFriendSuccess = createAction(ChatActionType.ADD_FRIEND_SUCCESS,props<{friend: Friend}>())

export const addFriendFail = createAction(ChatActionType.ADD_FRIEND_FAIL,props<{error: RequestError}>())

export const acceptFriend = createAction(ChatActionType.ACCEPT_FRIEND,props<{friend: Friend}>())

export const acceptFriendSuccess = createAction(ChatActionType.ACCEPT_FRIEND_SUCCESS,props<{friend: Friend}>())

export const acceptFriendFail = createAction(ChatActionType.ACCEPT_FRIEND_FAIL,props<{error: RequestError}>())

export const removeFriend = createAction(ChatActionType.REMOVE_FRIEND,props<{friend: Friend}>())

export const removeFriendSuccess = createAction(ChatActionType.REMOVE_FRIEND_SUCCESS,props<{id: number}>())

export const removeFriendFail = createAction(ChatActionType.REMOVE_FRIEND_FAIL,props<{error: RequestError}>())

export const cancelFriendRequest = createAction(ChatActionType.CANCEL_FRIEND_REQUEST,props<{friend: Friend}>())

export const cancelFriendRequestSuccess = createAction(ChatActionType.CANCEL_FRIEND_REQUEST_SUCCESS,props<{id: number}>())

export const cancelFriendRequestFail = createAction(ChatActionType.CANCEL_FRIEND_REQUEST_FAIL,props<{error: RequestError | undefined}>())

export const sendMessage = createAction(ChatActionType.SEND_MESSAGE,props<{message: Message}>())

export const sendMessageSuccess = createAction(ChatActionType.SEND_MESSAGE_SUCCESS,props<{message: Message}>())

export const sendMessageFail = createAction(ChatActionType.SEND_MESSAGE_FAIL,props<{error: RequestError}>())

export const openChat = createAction(ChatActionType.OPEN_CHAT,props<{id: number,userId: number | undefined}>())

export const loadMessages = createAction(ChatActionType.LOAD_MESSAGES,props<{userId:number, friendId: number}>())

export const loadMessagesSuccess = createAction(ChatActionType.LOAD_MESSAGES_SUCCESS,props<{messages: Message[]}>())

export const loadMessagesFail = createAction(ChatActionType.LOAD_MESSAGES_FAIL,props<{error: RequestError}>())

export const toggleFriendsPanel = createAction(ChatActionType.TOGGLE_FRIENDS_PANEL,props<{show?: boolean}>())
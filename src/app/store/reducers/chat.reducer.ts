import { createReducer, on } from '@ngrx/store';
import { RequestError } from '../models/error.model';
import { Message } from '../models/message.model';
import {
  acceptFriend,
  acceptFriendFail,
  acceptFriendSuccess,
  addFriend,
  addFriendFail,
  addFriendSuccess,
  cancelFriendRequest,
  cancelFriendRequestFail,
  cancelFriendRequestSuccess,
  loadFriendRequests,
  loadFriendRequestsFail,
  loadFriendRequestsSuccess,
  loadFriends,
  loadFriendsSuccess,
  loadMessages,
  loadMessagesFail,
  loadMessagesSuccess,
  loadSuggestedFriends,
  loadSuggestedFriendsFail,
  loadSuggestedFriendsSuccess,
  openChat,
  removeFriend,
  removeFriendFail,
  removeFriendSuccess,
  sendMessage,
  sendMessageFail,
  sendMessageSuccess,
  toggleFriendsPanel,
} from '../actions/chat.action';

import { User } from '../models/user.model';
import { first, sample } from 'rxjs';
import { Friend } from '../models/friend.model';

export interface ChatState {
  loadingSuggestedFriends: boolean;
  loadedSuggestedFriends: boolean;
  suggestedFriendsError?: RequestError;
  suggestedFriends: User[];

  loadingFriends: boolean;
  loadedFriends: boolean;
  loadFriendsError?: RequestError;
  addingFriend: boolean;
  addedFriend: boolean;
  addFriendError?: RequestError;
  friends: Friend[];

  loadingFriendRequests: boolean,
  loadedFriendRequests: boolean
  loadFriendRequestsError?: RequestError
  friendRequests: Friend[]

  sendingMessage: boolean;
  sentMessage: boolean;

  loadingMessages: boolean;
  loadedMessages: boolean;
  loadMessagesError?: RequestError;
  messages: Message[];

  sendMessageError?: RequestError;
  acceptingFriend: boolean;
  acceptedFriend: boolean;
  acceptFriendError?: RequestError;

  removingFriend?: boolean;
  removedFriend?: boolean;
  removeFriendError?: RequestError;

  cancellingFriendRequest: boolean,
  cancelledFriendRequest: boolean,
  cancelFriendRequestError?: RequestError


  chatWith?: User;
  showFriendsPanel: boolean;
}

const initialState: ChatState = {
  addingFriend: false,
  addedFriend: false,
  friends: [],
  sendingMessage: false,
  sentMessage: false,
  messages: [],
  acceptedFriend: false,
  acceptingFriend: false,
  loadingSuggestedFriends: false,
  loadedSuggestedFriends: false,
  suggestedFriends: [],
  loadedFriends: false,
  loadingFriends: false,
  loadingMessages: false,
  loadedMessages: false,
  showFriendsPanel: true,
  loadingFriendRequests: false,
  loadedFriendRequests: false,
  friendRequests: [],
  cancellingFriendRequest: false,
  cancelledFriendRequest: false
};

export const chatReducer = createReducer(
  initialState,

  on(loadSuggestedFriends, (state) => ({
    ...state,
    loadingSuggestedFriends: true,
    loadedSuggestedFriends: false,
    addFriendError: undefined,
  })),

  on(loadSuggestedFriendsSuccess, (state, { friends }) => ({
    ...state,
    loadingSuggestedFriends: false,
    loadedSuggestedFriends: true,
    addFriendError: undefined,
    suggestedFriends: friends,
  })),

  on(loadSuggestedFriendsFail, (state, { error }) => ({
    ...state,
    loadingSuggestedFriends: false,
    loadedSuggestedFriends: false,
    suggestedFriendsError: error,
  })),

  on(loadFriends, (state) => ({
    ...state,
    loadingFriends: true,
    loadedFriends: false,
  })),

  on(loadFriendsSuccess, (state, { friends }) => ({
    ...state,
    loadingFriends: false,
    loadedFriends: true,
    friends,
  })),

  on(addFriend, (state) => ({
    ...state,
    addingFriend: true,
    addedFriend: false,
    addFriendError: undefined,
  })),
  on(addFriendSuccess, (state, { friend }) => ({
    ...state,
    addingFriend: true,
    addedFriend: false,
    addFriendError: undefined,
    friendRequests: [...state.friendRequests, friend],
    suggestedFriends: state.suggestedFriends.filter((f) => f.id != friend.friends_with.id),
  })),
  on(addFriendFail, (state, { error }) => ({
    ...state,
    addingFriend: false,
    addedFriend: false,
    addFriendError: error,
  })),
  on(sendMessage, (state) => ({
    ...state,
    sendingMessage: true,
    sentMessage: false,
    sendMessageError: undefined,
  })),
  on(sendMessageSuccess, (state, { message }) => ({
    ...state,
    sendingMessage: false,
    sentMessage: true,
    sendMessageError: undefined,
    messages: [...state.messages, message],
  })),
  on(sendMessageFail, (state, { error }) => ({
    ...state,
    sendingMessage: false,
    sentMessage: false,
    sendMessageError: error,
  })),
  on(acceptFriend, (state) => ({
    ...state,
    acceptedFriend: false,
    acceptingFriend: true,
  })),
  on(acceptFriendSuccess, (state, { friend }) => ({
    ...state,
    acceptedFriend: true,
    acceptingFriend: false,
    acceptFriendError: undefined,
    friends: [...state.friends, friend],
    suggestedFriends: state.suggestedFriends.filter((f) => f.id != friend.id),
  })),
  on(acceptFriendFail, (state, { error }) => ({
    ...state,
    acceptedFriend: false,
    acceptingFriend: false,
    acceptFriendError: error,
  })),
  on(removeFriend, (state) => ({
    ...state,
    removingFriend: true,
    removedFriend: false,
  })),

  on(removeFriendSuccess, (state,{id}) => {
    let chatWith = state.chatWith;
    if (chatWith?.id == id) {
      chatWith = undefined;
    }
    return {
      ...state,
      friends: state.friends.filter((friend) => friend.id != id),
      suggestedFriends: [
        ...state.suggestedFriends,
        state.friends.filter((friend) => friend.id == id).map(f => f.friends_with)[0],
      ],
      chatWith,
    };
  }),
  on(removeFriendFail, (state, { error }) => ({
    ...state,
    removeFriendError: error,
  })),

  on(cancelFriendRequest,(state) => ({
    ...state,
    cancellingFriendRequest: true,
    cancelledFriendRequest:false
  })),
  on(cancelFriendRequestSuccess,(state,{id}) => ({
    ...state,
    cancellingFriendRequest: false,
    cancelledFriendRequest:true,
    friendRequests: state.friendRequests.filter(request => request.id != id),
    suggestedFriends: [
      ...state.suggestedFriends,
      state.friendRequests.filter(request => request.id == id)
      .map(f => f.friends_with)[0]
    ]
  })),
on(cancelFriendRequestFail,(state,{error}) => ({
  ...state,
  cancellingFriendRequest: false,
  cancelledFriendRequest: false,
  cancelFriendRequestError: error
})),
  on(openChat, (state, { id,userId }) =>  {
    const friend = state.friends.find(f => f.id == id)
    let chatWith = friend?.friends_with;
    if (friend?.friends_with.id == userId){
      chatWith = friend?.user
    }
    return {
      ...state,
      chatWith
    }
  }),

  on(loadMessages, (state) => ({
    ...state,
    loadingMessages: true,
    loadedMessages: false,
  })),
  on(loadMessagesSuccess, (state, { messages }) => ({
    ...state,
    loadingMessages: true,
    loadedMessages: false,
    messages,
  })),
  on(loadMessagesFail, (state, { error }) => ({
    ...state,
    loadingMessages: false,
    loadedMessages: false,
    loadMessagesError: error,
  })),
  on(toggleFriendsPanel, (state, { show }) => ({
    ...state,
    showFriendsPanel: show != undefined ? show : !state.showFriendsPanel,
  })),
  on(loadFriendRequests,(state) => ({
    ...state,
    loadingFriendRequests: true,
    loadedFriendRequests: false,
    loadFriendRequestsError: undefined
  })),
  on(loadFriendRequestsSuccess,(state,{friends}) => ({
    ...state,
    loadingFriendRequests: false,
    loadedFriendRequests: true,
    friendRequests: friends,
    loadFriendRequestsError: undefined
  })),
  on(loadFriendRequestsFail,(state,{error}) => ({
    ...state,
    loadingFriendRequests: false,
    loadedFriendRequests: false,
    loadFriendRequestsError: error
  }))
);

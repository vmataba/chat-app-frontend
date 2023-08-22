import { createFeatureSelector, createSelector } from "@ngrx/store";
import { getChatState } from ".";

export const getAddingFriend = createSelector(getChatState,state => state.addingFriend)

export const getAddedFriend = createSelector(getChatState,state => state.addedFriend)

export const getAddFriendError = createSelector(getChatState,state => state.addFriendError)

export const getSendingMessage = createSelector(getChatState,state => state.sendingMessage)

export const getSentMessage = createSelector(getChatState,state => state.sentMessage)

export const getSendMessageError = createSelector(getChatState,state => state.sendMessageError)

export const getAcceptingFriend = createSelector(getChatState,state => state.acceptingFriend)

export const getAcceptedFriend = createSelector(getChatState,state => state.acceptedFriend)

export const getAcceptFriendError = createSelector(getChatState,state => state.acceptFriendError)

export const getLoadingFriends = createSelector(getChatState,state => state.loadingFriends)

export const getLoadedFriends = createSelector(getChatState,state => state.loadedFriends)

export const getFriends = createSelector(getChatState,state => state.friends)

export const getLoadingSuggestedFriends = createSelector(getChatState,state => state.loadingSuggestedFriends)

export const getLoadedSuggestedFriends = createSelector(getChatState,state => state.loadedSuggestedFriends)

export const getHasFriends = createSelector(getFriends, friends => friends.length>0)

export const getLoadFriendsError = createSelector(getChatState,state => state.loadFriendsError)

export const getSuggestedFriends = createSelector(getChatState,state => state.suggestedFriends)

export const getHasSuggestedFriends = createSelector(getSuggestedFriends, suggestedFriends => suggestedFriends.length > 0)

export const getLoadSuggestedFriendsError = createSelector(getChatState,state => state.suggestedFriendsError)

export const getSuggestedFriendsError = createSelector(getChatState,state => state.suggestedFriendsError)

export const getChatWith = createSelector(getChatState,state => state.chatWith)

export const getLoadingMessages = createSelector(getChatState,state => state.loadingMessages)

export const getLoadedMessages = createSelector(getChatState,state => state.loadedMessages)

export const getLoadMessagesError = createSelector(getChatState,state => state.loadMessagesError)

export const getMessages = createSelector(getChatState,state => state.messages)

export const getHasMessages = createSelector(getMessages, messages => messages.length > 0)

export const getShowFriendsPanel = createSelector(getChatState,state => state.showFriendsPanel)

export const getLoadingFriendRequests = createSelector(getChatState, state => state.loadingFriendRequests)

export const getLoadedFriendRequests = createSelector(getChatState,state => state.loadedFriendRequests)

export const getFriendRequests = createSelector(getChatState,state => state.friendRequests)

export const getFriendRequestsError = createSelector(getChatState,state => state.loadFriendRequestsError)

export const getHasFriendRequests = createSelector(getFriendRequests, requests => requests.length>0)
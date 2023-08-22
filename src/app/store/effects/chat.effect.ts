import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  ChatActionType,
  acceptFriendFail,
  acceptFriendSuccess,
  addFriendFail,
  addFriendSuccess,
  cancelFriendRequestFail,
  cancelFriendRequestSuccess,
  loadFriendRequestsFail,
  loadFriendRequestsSuccess,
  loadFriendsFail,
  loadFriendsSuccess,
  loadMessagesFail,
  loadMessagesSuccess,
  loadSuggestedFriendsFail,
  loadSuggestedFriendsSuccess,
  removeFriendFail,
  removeFriendSuccess,
  sendMessageFail,
  sendMessageSuccess,
} from '../actions/chat.action';
import { catchError, map, mergeMap, of } from 'rxjs';
import { ChatService } from 'src/app/services/chat.service';

@Injectable()
export class ChatEffect {
  constructor(private actions$: Actions, private chatService: ChatService) {}

  addFriend$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ChatActionType.ADD_FRIEND),
      mergeMap((action: any) =>
        this.chatService
          .addFriend(action.friend.user?.id, action.friend.friends_with)
          .pipe(
            map((friend) => addFriendSuccess({ friend })),
            catchError((response) => {
              return of(addFriendFail({ error: response }));
            })
          )
      )
    )
  );

  acceptFriend$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ChatActionType.ACCEPT_FRIEND),
      mergeMap((action: any) =>
        this.chatService
          .acceptFriend(
           action.friend
          )
          .pipe(
            map((friend) => acceptFriendSuccess({ friend })),
            catchError((response) => {
              return of(acceptFriendFail({ error: response }));
            })
          )
      )
    )
  );

  sendMessage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ChatActionType.SEND_MESSAGE),
      mergeMap((action: any) =>
        this.chatService.sendMessage(action.message).pipe(
          map((message) => sendMessageSuccess({ message })),
          catchError((response) => {
            return of(sendMessageFail({ error: response }));
          })
        )
      )
    )
  );

  loadSuggestedFriends$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ChatActionType.LOAD_SUGGESTED_FRIENDS),
      mergeMap((action: any) => {
        return this.chatService.loadSuggestedFriends(action.id).pipe(
          map((friends) => loadSuggestedFriendsSuccess({ friends })),
          catchError((response) => {
            const { error } = response;
            return of(
              loadSuggestedFriendsFail({ error: error ? error : response })
            );
          })
        )}
      )
    )
  );

  loadFriends$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ChatActionType.LOAD_FRIENDS),
      mergeMap((action: any) =>
        this.chatService.loadFriends(action.id).pipe(
          map((friends) => loadFriendsSuccess({ friends })),
          catchError((response) => {
            const { error } = response;
            return of(loadFriendsFail({ error: error ? error : response }));
          })
        )
      )
    )
  );


  removeFriend$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ChatActionType.REMOVE_FRIEND),
      mergeMap((action: any) =>
        this.chatService.removeFriend(action.friend.user.id,action.friend.friends_with.id).pipe(
          map((id) => removeFriendSuccess({ id })),
          catchError((response) => {
            const { error } = response;
            return of(removeFriendFail({ error: error ? error : response }));
          })
        )
      )
    )
  );


  cancelFriendRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ChatActionType.CANCEL_FRIEND_REQUEST),
      mergeMap((action: any) =>
        this.chatService.removeFriend(action.friend.user.id,action.friend.friends_with.id).pipe(
          map((id) => cancelFriendRequestSuccess({ id })),
          catchError((response) => {
            const { error } = response;
            return of(cancelFriendRequestFail({ error: error ? error : response }));
          })
        )
      )
    )
  );


  loadMessages$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ChatActionType.LOAD_MESSAGES),
      mergeMap((action: any) =>
        this.chatService.loadMessages(action.userId, action.friendId).pipe(
          map((messages) => loadMessagesSuccess({ messages })),
          catchError((response) => {
            const { error } = response;
            return of(loadMessagesFail({ error: error ? error : response }));
          })
        )
      )
    )
  );

  loadFriendRequests$ = createEffect(() =>
  this.actions$.pipe(
    ofType(ChatActionType.LOAD_FRIEND_REQUESTS),
    mergeMap((action: any) =>
      this.chatService.loadFriendRequests(action.id).pipe(
        map((friends) => loadFriendRequestsSuccess({ friends })),
        catchError((response) => {
          const { error } = response;
          return of(loadFriendRequestsFail({ error: error ? error : response }));
        })
      )
    )
  )
);

}

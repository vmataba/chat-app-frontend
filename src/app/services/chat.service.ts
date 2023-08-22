import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { headers } from "../helpers/http.helper";
import { User } from "../store/models/user.model";
import { Message } from "../store/models/message.model";
import { Friend } from "../store/models/friend.model";
import { map, of } from "rxjs";

@Injectable({providedIn: 'root'})
export class ChatService{

    constructor(private http: HttpClient){

    }

    loadSuggestedFriends(userId: number){
        return this.http.get<User[]>(`/api/chat/load-suggested-friends/${userId}`,{headers}) 
    }

    loadFriendRequests(userId: number){
        return this.http.get<Friend[]>(`/api/chat/load-friend-requests/${userId}`,{headers})
    }

    loadFriends(userId: number){
        return this.http.get<Friend[]>(`/api/chat/load-friends/${userId}`,{headers}) 
    }

    addFriend(userId:number,friend: User){
       return this.http.post<Friend>(`/api/chat/add-friend/${userId}`,friend,{headers})
    }

    acceptFriend(friend:Friend){
        console.log(friend)
        return this.http.post<Friend>(`/api/chat/accept-friend/${friend.user.id}/${friend.friends_with.id}`,friend,{headers})
    }

    removeFriend(userId:number,friendId:number){
        return this.http.get<number>(`/api/chat/remove-friend/${userId}/${friendId}`,{headers})
    }

    sendMessage(message:Message){
        const {from,to} = message;
        return this.http.post<Message>(`/api/chat/send-message/${from.id}/${to.id}`,{content:message.content},{headers})
    }

    replyMessage(messageId: number, message:any){
        return this.http.post<Message>(`/api/chat/reply-message/${messageId}`,{message},{headers})
    }

    updateMessage(messageId: number, message:any){
        return this.http.put<Message>(`/api/chat/update-message/${messageId}`,{message},{headers})
    }

    readMessage(messageId:number){
        return this.http.put<boolean>(`/api/chat/read-message/${messageId}`,{},{headers})
    }

    loadMessages(userId: number, friendId: number){
        return this.http.get<Message[]>(`/api/chat/load-messages/${userId}/${friendId}`,{headers}) 
    }
}
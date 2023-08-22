import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { LogoComponent } from './components/logo/logo.component';
import { FriendsComponent } from './components/friends/friends.component';
import { LastChatComponent } from './components/last-chat/last-chat.component';
import { FriendComponent } from './components/friend/friend.component';
import { ChatBoxComponent } from './components/chat-box/chat-box.component';
import { ChatRoomComponent } from './components/chat-room/chat-room.component';
import { MessageComponent } from './components/message/message.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './components/login/login.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './store/reducers';
import { AuthEffect } from './store/effects/auth.effect';
import { ChatEffect } from './store/effects/chat.effect';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ModalComponent } from './components/modal/modal.component';
import { UserProfileFormComponent } from './components/user-profile-form/user-profile-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    TopbarComponent,
    LogoComponent,
    FriendsComponent,
    LastChatComponent,
    FriendComponent,
    ChatBoxComponent,
    ChatRoomComponent,
    MessageComponent,
    SearchBoxComponent,
    FilterPipe,
    ModalComponent,
    UserProfileFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({app: reducers}),
    EffectsModule.forRoot([
      AuthEffect,
      ChatEffect
    ]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}

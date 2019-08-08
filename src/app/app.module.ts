import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import { AllMessageComponent } from './all-message/all-message.component';
import { GroupchatComponent } from './groupview/groupchat.component';
import { HeaderComponent } from './header/header.component';
import { NewMessageComponent } from './new-message/new-message.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { LogInComponent } from './log-in/log-in.component';
import { GroupviewComponent } from './groupview/groupview.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    AllMessageComponent,
    GroupchatComponent,
    HeaderComponent,
    NewMessageComponent,
    UserComponent,
    UserListComponent,
    LogInComponent,
    GroupviewComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

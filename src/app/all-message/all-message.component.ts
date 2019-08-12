import {Component, OnInit} from '@angular/core';
import {MessageService} from '../service/message.service';
import {IMessage} from '../model/message';
import {UserService} from '../service/user.service';
import {IUser} from '../model/user';
import * as $ from 'jquery';


@Component({
  selector: 'app-all-message',
  templateUrl: './all-message.component.html',
  styleUrls: ['./all-message.component.scss']
})
export class AllMessageComponent implements OnInit {
  messageList: IMessage[];
  loginUser: IUser;

  constructor(private messageService: MessageService, private userService: UserService) {
    this.messageList = this.messageService.messageList;
    this.loginUser = this.userService.loginUser;
  }

  public ngOnInit() {
    this.messageService.scrollAllMessage();
  }

}

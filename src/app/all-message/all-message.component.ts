import { Component, OnInit } from '@angular/core';
import {IMessage} from '../model/message';
import {MessageService} from '../service/message.service';

@Component({
  selector: 'app-all-message',
  templateUrl: './all-message.component.html',
  styleUrls: ['./all-message.component.scss']
})
export class AllMessageComponent implements OnInit {
  messageList: IMessage[];

  constructor(private messageService: MessageService) {
    this.messageList = this.messageService.messageList;
  }

  ngOnInit() {
  }

}

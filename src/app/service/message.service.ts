import {Injectable} from '@angular/core';
import {IMessage} from '../model/message';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messageList: IMessage[] = [
    {username: 'admin', content: 'I have seen that, that cool'},
    {username: 'admin1', content: 'hello'},
    {username: 'admin2', content: 'good morning'},
    {username: 'admin3', content: 'how do you like the weather?'},
    {username: 'admin4', content: 'I dont like cats, i like doggies'},
    {username: 'admin5', content: 'yes, its raining dogs, and cats'},
  ];

  addMessage(message: IMessage) {
    this.messageList.push(message);
  }

  scrollAllMessage() {
    $(document).ready(() => {
      const scrollHeight = document.getElementById('all-message').scrollHeight;
      $('#all-message').scrollTop(scrollHeight);
      console.log(scrollHeight);
    });
  }

  constructor() {
  }
}

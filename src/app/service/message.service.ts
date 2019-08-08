import {Injectable} from '@angular/core';
import {IMessage} from '../model/message';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messageList: IMessage[] = [
    {username: 'Ng Vn Aw', content: 'I have seen that, that cool'},
    {username: 'Dao Dy Mon', content: 'hello'},
    {username: 'Do Hy Bin', content: 'good morning'},
    {username: 'Ho Tran Hiu', content: 'how do you like the weather?'},
    {username: 'Ma Vn Tai', content: 'good night'},
    {username: 'Ng Low Bom', content: 'yes, its raining dogs, and cats'},
    {username: 'La Thi Bay', content: 'I dont like cats, i like doggies'}
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

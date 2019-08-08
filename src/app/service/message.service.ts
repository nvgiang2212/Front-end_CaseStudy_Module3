import {Injectable} from '@angular/core';
import {IMessage} from '../model/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messageList: IMessage[] = [
    {username: 'Ng Vn Aw', status: 'online', content: 'xin chao'},
    {username: 'Dao Dy Mon', status: 'online', content: 'hello'},
    {username: 'Do Hy Bin', status: 'offline', content: 'good morning'},
    {username: 'Ho Tran Hiu', status: 'offline', content: 'good afternoon'},
    {username: 'Ma Vn Tai', status: 'online', content: 'good night'},
    {username: 'Ng Low Bom', status: 'offline', content: 'good morning'},
    {username: 'La Thi Bay', status: 'online', content: 'tight tight'}
  ];

  constructor() {
  }
}

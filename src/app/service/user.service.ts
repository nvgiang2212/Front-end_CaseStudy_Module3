import {Injectable} from '@angular/core';
import {IUser} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  static STATUS_ONLINE = 'online';
  static STATUS_OFFLINE = 'offline';
  userList: IUser[] = [
    {username: 'admin', nickname: 'Andre Gomes', password: 'admin', status: 'online'},
    {username: 'admin1', nickname: 'Christiano Ronaldo', password: 'admin1', status: 'online'},
    {username: 'admin2', nickname: 'Ashley Young', password: 'admin2', status: 'online'},
    {username: 'admin3', nickname: 'Nicholas PePe', password: 'admin3', status: 'offline'},
    {username: 'admin4', nickname: 'Arturo Vidal', password: 'admin4', status: 'offline'},
    {username: 'admin5', nickname: 'Jordan Anderson', password: 'admin5', status: 'offline'},
  ];
  loginUser: IUser = {
    username: 'admin',
    password: 'admin',
    nickname: 'Andre Gomes',
    status: 'online'
  }; // Test login user

  addtoUserList(user: IUser) {
    this.userList.push(user);
  }

  login(user: IUser): boolean {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.userList.length; i++) {
      if ((this.userList[i].username === user.username) && (this.userList[i].password === user.password)) {
        this.userList[i].status = UserService.STATUS_ONLINE;
        this.loginUser = this.userList[i];
        return true;
      }
    }
    return false;
  }

  constructor() {
  }
}

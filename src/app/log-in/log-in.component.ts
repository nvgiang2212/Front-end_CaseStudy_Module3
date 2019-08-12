import {Component, OnInit} from '@angular/core';
import {IUser} from '../model/user';
import {FormControl, FormGroup} from '@angular/forms';
import {UserService} from '../service/user.service';
import {Router} from '@angular/router';
import {Validators} from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  user: IUser;
  loginStatus: boolean;
  loginAttempt: boolean;
  loginUserForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(4)]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)]),
  });

  onSubmit(): void {
    this.loginAttempt = true;
    this.user = {
      username: this.loginUserForm.value.username,
      password: this.loginUserForm.value.password,
      nickname: this.loginUserForm.value.nickname,
      status: 'offline',
    };
    console.log(this.loginUserForm);
    if (this.userService.login(this.user)) {
      this.router.navigateByUrl('chat');
      this.loginStatus = true;
    } else {
      this.loginStatus = false;
    }
  }

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
  }

}

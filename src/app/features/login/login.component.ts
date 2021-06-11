import { Component, OnInit } from '@angular/core';

import { UserService } from '../../service/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user: any = {
    email: null,
    password: null,
  };

  errorMessage: string = null;

  constructor(private UserService: UserService) {}

  ngOnInit(): void {}

  handleLogin() {
    this.errorMessage = null;
    this.UserService.login(this.user)
      .then((result) => {})
      .catch((err) => {
        this.errorMessage = err.message;
      });
  }
}

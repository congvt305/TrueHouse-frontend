import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../service/user.service';
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider,
  SocialUser
} from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm;
  userId;
  IdLogin = sessionStorage.getItem('token');

  ERROR_MESSAGE = {
    email: [
      {type: 'email', message: 'Email invalid.'},
      {type: 'minlength', message: 'Username has min length : 6'}
    ],
    password: [
      {type: 'required', message: 'Password is required.'},
      {type: 'minlength', message: 'Password has min length: 6'}
    ]
  };
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.email, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.authService.authState.subscribe(user => {
      this.userService.updateUser(user);
      this.userService.updateLoggedIn(true);
    });
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.router.navigate(['/']);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.router.navigate(['/']);
  }

  onLogout() {
    if (confirm('Are you sure you want to log out ?')) {
      this.userService.logout();
    }
  }

  login(data) {
    const user = {
      email: data.email,
      password: data.password
    };
    this.userService.login(user).subscribe(next => {
      if (data.email === '' || data.password === '') {
        alert('Ban chua nhap email hoac password');
      } else {
        if (next.message === 'success') {
          this.userId = next.data['id'];
          sessionStorage.setItem('isLogin', 'true');
          sessionStorage.setItem('token', this.userId);
          this.userService.updateUser(next);
          // this.router.navigate(['room/create']);
          location.reload();
        } else {
          alert('Sai thông tin đăng nhập');
        }
      }
    });
  }
}

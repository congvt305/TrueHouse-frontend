import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "../../../service/user.service";
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider,
  SocialUser
} from "angularx-social-login";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})

export class LoginComponent implements OnInit {
  loginForm;
  userId;
  IdLogin = sessionStorage.getItem('token')

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [],
      password: []
    });

    this.authService.authState.subscribe(user => {
      this.userService.updateUser(user);
      this.userService.updateLoggedIn(true);
    });
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.router.navigate(["/"]);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.router.navigate(["/"]);
  }

  logout(){
    localStorage.removeItem("token");
    this.router.navigate(['home']);
  }

  login(data) {
    const user = {
      email: data.email,
      password: data.password
    };
    this.userService.login(user).subscribe(next => {
      if (next.message === "success") {
        console.log(next['data']['id']);
        this.userId = next['data']['id'];
        sessionStorage.setItem("isLogin", "true");
        sessionStorage.setItem("token", this.userId);
        this.userService.updateUser(next);
        this.router.navigate(['home']);
      } else {
        alert("Sai thông tin đăng nhập");
      }
    });
  }
}

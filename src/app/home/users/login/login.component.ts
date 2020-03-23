import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../../service/user.service';
import {IUser} from '../../../interface/i-user';
import {AuthService, FacebookLoginProvider, GoogleLoginProvider, SocialUser} from 'angularx-social-login';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm;

    constructor(
        private fb: FormBuilder,
        private userService: UserService,
        private router: Router,
        private authService: AuthService
    ) {
    }

    ngOnInit(): void {
        this.loginForm = this.fb.group({
            email: [],
            password: [],
        });
        this.authService.authState.subscribe((user) => {
            console.log(user);
            this.userService.updateUser(user);
            this.userService.updateLoggedIn(true);
        });
    }

    signInWithGoogle(): void {
        this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
        this.router.navigate(['/room']);
    }

    signInWithFB(): void {
        this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
        this.router.navigate(['/home']);
    }

    login(data) {
        const user = {
            email: data.email,
            password: data.password,
        };
        this.userService.login(user).subscribe(next => {
            if (next.message === 'success') {
                this.userService.updateUser(next);
                this.router.navigate(['room']);
            } else {
                alert('Sai thông tin đăng nhập');
            }
        });
    }

}

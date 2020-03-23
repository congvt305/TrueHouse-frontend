import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from "../../../service/user.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    formLogin;
    ERROR_MESSAGE = {
        email: [
            {type: 'email', message: 'Email invalid.'},
            {type: 'minlength', message: 'Username has min length : 6'}
        ],
        password: [
            {type: 'required', message: 'Password is required.'},
            {type: 'minlength', message: 'Password has min length: 4'}
        ]
    };

    user: any;


    constructor(
        private fb: FormBuilder,
        private userService: UserService,
        private router: Router
    ) {
    }

    ngOnInit(): void {
        this.formLogin = this.fb.group({
            email: ['', [Validators.email, Validators.minLength(6)]],
            password: ['', [Validators.required, Validators.minLength(4)]],
        });
    }

    onSubmit(data) {
        const user = {
            email: data.email,
            password: data.password
        };
        this.userService.log_in(user).subscribe(result => {
            this.router.navigate(['']);
        });
    }
}

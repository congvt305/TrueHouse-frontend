import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../../service/user.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {
    registerForm;
    userId;
    IdLogin = sessionStorage.getItem('token');

    ERROR_MESSAGE = {
        name: [
            {type: 'required', message: 'Name is required'},
            {type: 'minlength', massage: 'Your Name has min length : 6'}
        ],
        email: [
            {type: 'email', message: 'Email invalid.'},
            {type: 'minlength', message: 'Username has min length : 4'}
        ],
        password: [
            {type: 'required', message: 'Password is required.'},
            {type: 'minlength', message: 'Password has min length: 6'}
        ],
        confirmPassword: [
            {type: 'required', message: 'Password is required.'},
            {type: 'minlength', message: 'Password has min length: 6'}
        ],
        phone: [
            {type: 'required', message: 'Phone is required.'},
            {type: 'minlength', message: 'Phone has min length: 9'}
        ]
    };

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private userService: UserService,
    ) {
    }

    ngOnInit(): void {
        this.registerForm = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(4)]],
            email: ['', [Validators.email, Validators.minLength(6)]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
            phone: ['', [Validators.required, Validators.minLength(9)]]
        });
    }

    register(data) {
        if (data.password !== data.confirmPassword) { alert('Password khong trung nhau'); } else {
            const user = {
                name: data.name,
                email: data.email,
                password: data.password,
                phone: data.phone
            };
            this.userService.register(user).subscribe();
            this.userService.login(user).subscribe(next => {

                if (next.message === 'success') {
                    // @ts-ignore
                    this.userId = next.data.id;
                    sessionStorage.setItem('isLogin', 'true');
                    sessionStorage.setItem('token', this.userId);
                    this.userService.updateUser(next);
                    this.router.navigate(['']);
                }
            });
        }
    }

    findById() {
        this.userService.findById(1).subscribe(next => {
            console.log(next);
        });
    }
}

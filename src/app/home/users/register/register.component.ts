import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../../service/user.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {
    registerForm;

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private userService: UserService,
    ) {
    }

    ngOnInit(): void {
        this.registerForm = this.fb.group({
            name: [],
            email: [],
            password: [],
            phone: []
        });
    }

    register(data) {
        const user = {
            name: data.name,
            email: data.email,
            password: data.password,
            phone: data.phone
        };
        this.userService.register(user).subscribe(next => {
            this.router.navigate(['']);
        });
    }

    findById() {
        this.userService.findById(1).subscribe(next => {
            console.log(next);
        });
    }
}

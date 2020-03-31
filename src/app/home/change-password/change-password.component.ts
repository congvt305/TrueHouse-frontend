import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'angularx-social-login';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm;
  IdLogin;
  data;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.IdLogin = this.route.snapshot.paramMap.get('id');
    this.userService.findById(this.IdLogin).subscribe(next => {
      this.data = next.data;
    });

    this.changePasswordForm = this.fb.group({
      currentPassword: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  changePassword(data) {
    const user = this.data;
    user.password = data.password;
    if (data.password !== data.confirmPassword) {
      alert('Mat khau khong trungnhau');
    } else {
      this.userService.changePassword(user, this.IdLogin).subscribe();
    }
    alert('Thay doi mat khau thanh cong');
    this.router.navigate(['']);
  }
}

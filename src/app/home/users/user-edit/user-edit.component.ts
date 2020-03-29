import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../service/user.service';
import {IUser} from '../../../interface/i-user';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
    editUserForm;
    dataUser;
    idLogin;
    file;
  currentAvatar;

  constructor(
      private fb: FormBuilder,
      private router: Router,
      private route: ActivatedRoute,
      private userService: UserService,
  ) {}

  ngOnInit(): void {
    this.idLogin = this.route.snapshot.paramMap.get('id') ;
    this.userService.findById(this.idLogin).subscribe(next => {
      this.dataUser = next.data;
      console.log(next.data);
      this.editUserForm.patchValue({name: this.dataUser.name, email: this.dataUser.email, phone: this.dataUser.phone});
    });
    this.editUserForm = this.fb.group({
      name: [''],
      email: ['', ],
      phone: ['', ],
      avatar: [''],
      dob: ['']
    });
  }

  onSubmit(data) {
    this.dataUser.name = data.name;
    this.dataUser.email = data.email;
    this.dataUser.phone = data.phone;
    this.dataUser.dob = data.dob;
    this.dataUser.avatar = data.avatar;
    if (this.userService.changePassword(this.dataUser, this.idLogin).subscribe()) {
      alert('Cap nhat thanh cong');

    }
  }

  get name() {
    return this.editUserForm.get('name');
  }

  get email() {
    return this.editUserForm.get('email');
  }

  get phone() {
    return this.editUserForm.get('phone');
  }

  get dob() {
    return this.editUserForm.get('dob');
  }

  getFile(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = e => this.currentAvatar = reader.result;
      this.file = event.target.files[0];
      reader.readAsDataURL(this.file);
    }
  }


}

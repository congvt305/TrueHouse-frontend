import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  id = sessionStorage.getItem('token');

  constructor(
      private userService: UserService,
      private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onLogout() {
    if (confirm('Are you sure you want to log out ?')) {
      this.userService.logout();
      this.router.navigate(["home"]);
    
    }
  }
}

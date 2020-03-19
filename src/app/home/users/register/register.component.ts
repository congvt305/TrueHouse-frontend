import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    loading: any;
  model: any;

  constructor() { }

  ngOnInit(): void {
  }

  register() {
    return false;
  }
}

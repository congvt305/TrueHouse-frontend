import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { AppRoutingModule } from '../app-routing.module';
import { RoomComponent } from './room/room.component';
import { CreateComponent } from './room/create/create.component';
import { EditComponent } from './room/edit/edit.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [HomeComponent, HeaderComponent, FooterComponent, SearchComponent, RoomComponent, CreateComponent, EditComponent, NavbarComponent, LoginComponent, RegisterComponent, UserEditComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ]
})
export class HomeModule { }

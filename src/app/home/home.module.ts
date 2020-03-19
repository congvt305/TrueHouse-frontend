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
import { CKEditorModule } from 'ngx-ckeditor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [HomeComponent, HeaderComponent, FooterComponent, SearchComponent, RoomComponent, CreateComponent, EditComponent, NavbarComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    CKEditorModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }

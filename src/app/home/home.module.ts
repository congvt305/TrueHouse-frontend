import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { AppRoutingModule } from '../app-routing.module';
import { RoomComponent } from './room/room.component';
import { FileUploadModule } from 'ng2-file-upload';
import { CreateComponent } from './room/create/create.component';
import { EditComponent } from './room/edit/edit.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CKEditorModule } from 'ngx-ckeditor';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [HomeComponent, HeaderComponent, FooterComponent, SearchComponent, RoomComponent, CreateComponent, EditComponent, NavbarComponent],
  imports: [
    FileUploadModule,
    CommonModule,
    RouterModule,
    AppRoutingModule,
    CKEditorModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class HomeModule { }

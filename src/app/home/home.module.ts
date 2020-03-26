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
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { CKEditorModule } from 'ngx-ckeditor';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {AuthServiceConfig, SocialLoginModule} from 'angularx-social-login';
import {GoogleLoginProvider, FacebookLoginProvider} from 'angularx-social-login';
import {ChangePasswordComponent} from './change-password/change-password.component';


const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('869356032587-g8rjgkmorue87kilsucqit1k1csm3mbm.apps.googleusercontent.com')
  },
  // {
  //   id: FacebookLoginProvider.PROVIDER_ID,
  //   provider: new FacebookLoginProvider('511993239711990')
  // }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent, 
    SearchComponent, 
    RoomComponent, 
    CreateComponent, 
    EditComponent, 
    NavbarComponent, 
    LoginComponent, 
    RegisterComponent, 
    UserEditComponent,
    ChangePasswordComponent],
  imports: [
    FileUploadModule,
    CommonModule,
    RouterModule,
    AppRoutingModule,
    CKEditorModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ]
})
export class HomeModule { }

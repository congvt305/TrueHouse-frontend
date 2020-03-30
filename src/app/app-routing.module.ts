import {HomeComponent} from './home/home.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RoomComponent} from './home/room/room.component';
import {CreateComponent} from './home/room/create/create.component';
import {EditComponent} from './home/room/edit/edit.component';
import {LoginComponent} from './home/users/login/login.component';
import {RegisterComponent} from './home/users/register/register.component';
import { UserEditComponent } from './home/users/user-edit/user-edit.component';
import {ChangePasswordComponent} from './home/change-password/change-password.component';
import { HistoryComponent } from './home/history/history.component';

function EditUserComponent() {

}

const routes: Routes = [

    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', children: [
            {path: '', component: HomeComponent},
            {path: 'changePassword/:id', component: ChangePasswordComponent},
            {path: 'edit/:id', component: UserEditComponent},

        ]
        },
    {
        path: 'room',
        children: [
            { path: ':id/post', component: RoomComponent },
            {path: 'edit/:id', component: EditComponent},
            {path: 'create', component: CreateComponent},
        ]
    },
    {
        path: 'user',
        children: [
            {path: 'register', component: RegisterComponent},
            {path: 'login', component: LoginComponent}
        ]
    },
    { path: 'history', component: HistoryComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

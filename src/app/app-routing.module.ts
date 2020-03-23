import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoomComponent } from './home/room/room.component';
import { CreateComponent } from './home/room/create/create.component';
import { EditComponent } from './home/room/edit/edit.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'room',
    children: [
      { path: ':id/post', component: RoomComponent },
      { path: 'edit/:id', component: EditComponent },
      { path: 'create', component: CreateComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

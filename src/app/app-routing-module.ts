import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Home } from './components/home/home';
import { UsersList } from './components/users-list/users-list';
import { UserDetail } from './components/user-detail/user-detail';
import { UserCreate } from './components/user-create/user-create';
import { UserEdit } from './components/user-edit/user-edit';

const routes: Routes = [
  { path: '', component: Home },
  { path: 'users', component: UsersList },
  { path: 'users/create', component: UserCreate },
  { path: 'users/edit/:id', component: UserEdit }, // 👈 ANTES
  { path: 'users/:id', component: UserDetail },     // 👈 DESPUÉS
  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

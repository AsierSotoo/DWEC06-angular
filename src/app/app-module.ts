import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbar } from './components/navbar/navbar';
import { Home } from './components/home/home';
import { UsersList } from './components/users-list/users-list';
import { UserDetail } from './components/user-detail/user-detail';
import { UserCreate } from './components/user-create/user-create';
import { UserEdit } from './components/user-edit/user-edit';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    Navbar,
    Home,
    UsersList,
    UserDetail,
    UserCreate,
    UserEdit
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }

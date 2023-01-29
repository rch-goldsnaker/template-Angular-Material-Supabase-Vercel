import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Material Angular
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { ReactiveFormsModule } from '@angular/forms';

import { AuthComponent } from './components/auth/auth.component';
import { AccountComponent } from './components/account/account.component';
import { AvatarComponent } from './components/avatar/avatar.component';

@NgModule({
  declarations: [AppComponent, AuthComponent, AccountComponent, AvatarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

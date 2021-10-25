import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { MenuprincipalComponent } from './menu/menuprincipal/menuprincipal.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuprincipalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

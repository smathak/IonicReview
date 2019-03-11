import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import {FormsModule} from '@angular/forms'; // for using [(ngModel)]

// this component is very important
@NgModule({
  declarations: [
    // add new component automatically
    AppComponent,
    HelloComponent    // this is added automatically
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  // bootstratp is start point
  bootstrap: [AppComponent]
})
export class AppModule { }

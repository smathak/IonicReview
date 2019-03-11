import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule, AngularFireDatabase} from 'angularfire2/database';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddPage } from '../pages/add/add';
import { EditPage } from '../pages/edit/edit';

 const  firebaseConfig = {
    apiKey: "AIzaSyBv3RDz1hfCfAj5YRh5rIgp1aaV9cv0Lq8",
    authDomain: "mobile-51036.firebaseapp.com",
    databaseURL: "https://mobile-51036.firebaseio.com",
    projectId: "mobile-51036",
    storageBucket: "mobile-51036.appspot.com",
    messagingSenderId: "140872944372"
  };  // JSON Object

@NgModule({
  declarations: [ // include Page
    MyApp,
    HomePage,
    AddPage,
    EditPage
  ],
  imports: [  // Imports usually includes Modules 
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule, // Add this!
    AngularFireModule.initializeApp(firebaseConfig),  // Add this!
  ],
  bootstrap: [IonicApp],
  entryComponents: [ // include Page
    MyApp,
    HomePage,
    AddPage,
    EditPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';

// import { HomePage } from '../pages/home/home';

  // apiKey: "AIzaSyBc6aJBaajIG3KCeAyLHxKrnhKe32QE0hQ",
  // authDomain: "mjchar-b3037.firebaseapp.com",
  // databaseURL: "https://mjchar-b3037.firebaseio.com",
  // projectId: "mjchar-b3037",
  // storageBucket: "mjchar-b3037.appspot.com",
  // messagingSenderId: "401347143333"

const config =  {
  apiKey: "AIzaSyDoIcQYk9gSpgBAwQwKvK_NiiezrgUTJjk",
  authDomain: "mjchat-68467.firebaseapp.com",
  databaseURL: "https://mjchat-68467.firebaseio.com",
  projectId: "mjchat-68467",
  storageBucket: "mjchat-68467.appspot.com",
  messagingSenderId: "275306437948"
};

@NgModule({
  declarations: [
    MyApp
    // HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(config),
    AngularFireModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
    // HomePage
  ],
  providers: [
    AngularFireDatabase,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

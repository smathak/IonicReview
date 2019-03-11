import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import {AngularFireAuthModule} from 'angularfire2/auth';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    AngularFireAuthModule,
    IonicPageModule.forChild(LoginPage),
  ],
})
export class LoginPageModule {}

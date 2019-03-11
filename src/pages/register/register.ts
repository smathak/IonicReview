import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import {Profile} from '../../model/profile.interface';
import { AngularFireDatabase } from 'angularfire2/database';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  password: string;
  profile = {avatar: 'assets/imgs/avatar.jpg'} as Profile;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private toastCtrl:ToastController) {
      //this.profile.avatar = 'asset/imgs/avatar.png';

      this.toastCtrl.create({
        message: "This is Register Page",
        duration: 2000,
        position: 'bottom',
        //dismissOnPageChange: true
      }).present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  async register() {
    try {
      // get user id when registration succeeds
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(this.profile.email, this.password);
      console.log(result);

      try {
        await this.db.object(`profiles/${result.uid}`).set(this.profile);
        this.db.object(`profiles/${result.uid}`).update({key: result.uid});
        console.log("Adding a profile succeeded.");
      }
      catch(e) {
        console.log(e);
      }

      this.navCtrl.pop();
    }
    catch(e) {
      console.log(e);
      this.toastCtrl.create({
        message: e.message,
        duration: 3000,
        position: 'bottom',
        dismissOnPageChange: true
      }).present();
    }
  }
}

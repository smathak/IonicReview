import { AngularFireAuth } from 'angularfire2/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  email: string;
  password: string;
  pop=false;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private afAuth: AngularFireAuth,
    private toastCtrl: ToastController,
    private db: AngularFireDatabase
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  ionViewDidEnter(){
    console.log("ionViewDidEnter HomePage");
    if(this.pop == true){

      this.toastCtrl.create({
        message: "This is Login Page",
        duration: 3000,
        position: 'top'
        //dismissOnPageChange: true
      }).present();
      this.pop = false;
    }
  }

  nav2Register() {
    this.navCtrl.push('RegisterPage');
    this.pop = true;
  }

  async login() {
    try {
      // get user id when sign in 
      const result = await this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password);

      // update profile as online
      this.db.object(`profiles/${result.uid}`).update( { isOnline: true });

      this.navCtrl.setRoot('TabsPage', {uid: result.uid, auth: this.afAuth});   // uid 와 auth 를 TabsPage의 navParams에 전달
    }
    catch(e) {
      console.log(e);
      this.toastCtrl.create({
        message: e.message,
        duration: 3000,
        position: 'bottom',
        //dismissOnPageChange: true
      }).present();
    }
  }

}

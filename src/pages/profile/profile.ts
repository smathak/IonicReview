import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { Profile } from './../../model/profile.interface';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  profile: Profile;
  uid: string;
  auth: AngularFireAuth;
  subscription:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
     private db: AngularFireDatabase, private app: App) {
      this.uid = this.navParams.data.uid;
      this.auth = navParams.data.auth;
      console.log("profile this.uid: "+this.uid);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    this.subscription = this.db.object(`profiles/${this.uid}`).valueChanges().subscribe((result:Profile) => this.profile = result);

  }


  async logout(){
    this.db.object(`profiles/${this.uid}`).update( { isOnline: false });
    this.subscription.unsubscribe();
    await this.auth.auth.signOut();
    this.app.getRootNav().setRoot('LoginPage');
    // this.navCtrl.setRoot('LoginPage'); 로 하면 Tab page 에서 setRoot 을 하기 때문에 Tab이 사라지지 않는다. 
  }
}

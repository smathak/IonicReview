import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Profile } from './../../model/profile.interface';
import { Observable } from 'rxjs/Observable';
/**
 * Generated class for the ProfilelistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profilelist',
  templateUrl: 'profilelist.html',
})
export class ProfilelistPage {
  profilelist: Observable<any[]>;
  profile: Profile;

  firstName: string;
  myid: string;

  toggle: boolean;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private db: AngularFireDatabase) {
    this.profile = this.navParams.get('profile');   // * My profile
    this.firstName = this.profile.firstName;
    this.myid = this.profile.key;
    this.profilelist = this.db.list('profiles').valueChanges();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilelistPage');
  }

  notify(){
    console.log("ProfileListPage toggle test: " + this.toggle);
  }

  selectProfile(profile:Profile){   // * Friend profile
    this.navCtrl.push('MessagePage', { "profile" : profile , "myid" : this.myid});
  }

}

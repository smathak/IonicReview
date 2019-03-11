import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MESSAGE_LIST } from './../../mockup/messages';
import { Message } from './../../model/message.interface';
import { AngularFireAuth } from 'angularfire2/auth'
import { AngularFireDatabase } from 'angularfire2/database';
import { Profile } from '../../model/profile.interface';

/**
 * Generated class for the InboxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inbox',
  templateUrl: 'inbox.html',
})
export class InboxPage {
  email: string;
  password: string;
  messageList: Message[] = MESSAGE_LIST;
  uid: string;
  subscription:any;
  profile: Profile;

  constructor(public navCtrl: NavController, public navParams: NavParams, private db: AngularFireDatabase) {
    this.uid = this.navParams.data.uid;
    console.log("inbox uid: "+this.uid);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InboxPage');
    this.subscription = this.db.object(`profiles/${this.uid}`).valueChanges().subscribe((result:Profile) => this.profile = result);
    
  }

  nav2Profiles(){
    this.navCtrl.push('ProfilelistPage', {profile: this.profile});  // My profile
  }

}

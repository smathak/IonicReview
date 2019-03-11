import { AngularFireAuth } from 'angularfire2/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { Profile } from '../../model/profile.interface';

@IonicPage()
@Component({
  selector: 'page-channel-chat',
  templateUrl: 'channel-chat.html',
})
export class ChannelChatPage {
  channel: any;
  messageList: Observable<{content:string}[]>;
  content: string;
  profile: Profile;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private db: AngularFireDatabase, private afAuth:AngularFireAuth) {
      this.channel = this.navParams.get('channel');
      this.profile = this.navParams.get('profile');
  }

  ionViewDidLoad() {
    // get the db of channels/this.channel.key(custom key) key of each channel like 'hello'
    this.messageList = this.db.list(`channels/${this.channel.key}`).valueChanges();
    console.log(this.afAuth.auth.currentUser.uid); // uid를 가져오는 또 다른 방법
  }
  send() {
    // send input message to channels/this.channel.key and save it
    // this.db.list(`channels/${this.channel.key}`).push({content: this.content, firstName: this.profile.firstName});
    // this.content = "";

    // Ansynchronous method is very important in javaScript and web
    // Both upper method and this method can be possible.
    this.db.object(`profiles/${this.afAuth.auth.currentUser.uid}`).valueChanges().subscribe((result:Profile)=>
    {
      this.db.list(`channels/${this.channel.key}`).push({content: this.content, firstName: result.firstName});
      this.content = "";
    });
  }

}

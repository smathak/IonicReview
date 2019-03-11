import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { Profile } from '../../model/profile.interface';


@IonicPage()
@Component({
  selector: 'page-channels',
  templateUrl: 'channels.html',
})
export class ChannelsPage {
  channelList: Observable<any[]>;
  profile: Profile;
  uid: string;
  subscription:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private alertCtrl: AlertController, private db: AngularFireDatabase) {
      this.uid = this.navParams.data.uid;
      console.log("channels this.uid: "+this.uid);
  }

  ionViewWillLoad() {
    // get channel names from db
    this.channelList = this.db.list('channel-names').valueChanges();
  }

  ionViewDidLoad() {
    this.subscription = this.db.object(`profiles/${this.uid}`).valueChanges().subscribe((result:Profile) => this.profile = result);
  }

  showAddChannelAlert() {
    this.alertCtrl.create( {
      title: 'Channel Name',
      inputs: [ { name: 'channelName', placeholder: 'Channel Name'}
      ],
      buttons: [
        { 
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Add',
          handler: data => { this.addChannel(data.channelName) }
        }
      ]
    }).present();
  }

  addChannel( channelName ) {
    // add new channel name to channel-names in DB 
    let key = this.db.list('channel-names').push({name: channelName}).key;
    // update with custom key(not random key)
    this.db.object(`channel-names/${key}`).update({key: key});
  }

  selectChannel( channel ) {
    this.navCtrl.push('ChannelChatPage', {channel: channel, profile: this.profile});
  }

  remove(key:string) {
    console.log(`remove():key=${key}`);
  }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Profile } from './../../model/profile.interface';
import { Message } from '../../model/message.interface';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/map';


// 있어도 되고 없어도 됨.
interface MessageKey {
  msgkey: string,
  content: string,
  name: string,
  firstName: string
}

interface ChatMessage {
  fromID: string,
  toID: string,
  content: string
}

@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})

export class MessagePage {
  friendprofile: Profile;

  myid: string;
  myprofile: Profile;
  subscription:any;

  peerid: string;

  message: Message;
  content: string;
  messageList: Observable<any[]>;
  // friendmessageList: Observable<Message[]>;
  fullname: string;
  date: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private db: AngularFireDatabase) {
    this.friendprofile = this.navParams.get('profile');   // Friend profile
        // this.myid = '6WKphaN5q5McsQGAGZ0xvE6dZ8p1'; //this.navParams.get('myid'); (hard coding)
    this.myid = this.navParams.get('myid');
    this.peerid = this.friendprofile.key;
  }

  ionViewWillLoad() {
    this.subscription = this.db.object(`profiles/${this.myid}`).valueChanges().subscribe((result:Profile) => this.myprofile = result);

    this.messageList = this.db.list(`messages-by-user/${this.myid}/${this.peerid}`).valueChanges().
    map((msgs) => {
        msgs.map( (mkey: MessageKey) => {
          this.db.object(`messages/${mkey.msgkey}`).valueChanges().subscribe( (x: ChatMessage) => {
              mkey.content = x.content;
              this.db.object(`profiles/${x.fromID}`).valueChanges().subscribe((y:Profile) => {
                mkey.firstName = y.firstName;
                mkey.name = y.firstName + " " + y.lastName;
              });
          }) ;
        });
        return msgs;
    });
  }

  ionViewDidLoad(){}
  
  async sendMessage() {
    this.message = {
      fromID: this.myid, // me
      toID: this.peerid, // friend;
      fromName: this.myprofile.firstName,
      toName: this.friendprofile.firstName,
      content: this.content,
      when: new Date().toDateString() + new Date().toTimeString()
    };

    // add data to "messages"
    // firebase, web 통신과 관련된 건 다 async 처리 async가 있으면 무조건 await도 있어야 함
    let key = await this.db.list(`messages`).push(this.message).key;

    // add data to "messages-by-user"
    await this.db.list(`messages-by-user/${this.myid}/${this.friendprofile.key}`).push({msgkey:key});
    await this.db.list(`messages-by-user/${this.friendprofile.key}/${this.myid}`).push({msgkey:key});

  }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1page = 'InboxPage';
  tab2page = 'ChannelsPage';
  tab3page = 'ProfilePage';

  tab3params: NavParams;  // for naviate to 'ProfilePage'


  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.tab3params = navParams;    // LoingPage의 uid, auth를 Profile에 저장 로그인한 유저의 정보를 유지 및 저장
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

  ionViewDidEnter(){
    console.log('ionViewEndterLoad TabsPage');
  }
}

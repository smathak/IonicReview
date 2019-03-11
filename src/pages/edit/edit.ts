import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
/**
 * Generated class for the EditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {
  item = {} as {name:string, amount:number, key:string};
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public db: AngularFireDatabase) {
    this.item = this.navParams.get('item');
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPage');
  }

  editClicked(){
    this.db.list('shoppinglist').update(this.item.key, this.item);
    this.navCtrl.pop();
  }

}

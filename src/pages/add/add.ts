import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {

  item = {} as {name:string, amount:number, key:string};
  shoppinglist: Observable<any[]>

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public db: AngularFireDatabase) {
    this.shoppinglist = this.db.list('shoppinglist').valueChanges();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }
  AddItem(){
    console.log(this.item);
    var newkey = this.db.list('shoppinglist').push(this.item).key;  // First step: get the key!!
    // Create new item by using this key!! (This fact is import for updating later)
    this.db.list('shoppinglist').update(newkey, {name:this.item.name, amount:this.item.amount, key:newkey});
    this.item = {} as {name:string, amount:number, key:string};
    this.navCtrl.pop();
  }
}

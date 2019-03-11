import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController } from 'ionic-angular';
import {AngularFireDatabase } from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import { AddPage } from '../add/add';
import { EditPage } from '../edit/edit';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  shoppinglist: Observable<any[]>;
  constructor(public navCtrl: NavController, public NavParams: NavController,
  public db:AngularFireDatabase,
  public as:ActionSheetController) {
    this.shoppinglist = this.db.list('shoppinglist').valueChanges();
    this.shoppinglist.subscribe(x=>console.log(x));
  } 
  gotoAdd(){
    this.navCtrl.push(AddPage);
  }

  removeItem(key){
    console.log(key);
    this.db.list('shoppinglist').remove(key);
  }

  editItem(edititem){
    this.navCtrl.push(EditPage, {item: edititem});
  }

  selected(item){
    console.log(item);

    this.as.create({
      title: "shopping item",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          handler: ()=>{}
        },
        {
          text: "Delete",
          role: "destructive",
          handler: ()=>{this.removeItem(item.key)}
        },
        {
          text: "Edit",
          handler: ()=>{this.editItem(item)}
        }
      ]
    }).present();
  }
}

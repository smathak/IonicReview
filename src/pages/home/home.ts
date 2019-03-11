import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
//import { AboutPage } from './../about/about';
import {ToastController} from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  movies: any[];

  constructor(public navCtrl: NavController, 
  public toast: ToastController,
  public http: Http ) {

  }

  nav2About(){
    //this.toast.create({message: "Happy Birthday", duration:3000}).present();
   // this.navCtrl.push(AboutPage, {msg: "from home page"});

   // make http query
   this.http.get("https://netflixroulette.net/api/api.php?actor=Cruise")
   .map(res=>res.json()).subscribe(data=>{
     console.log(data);
     this.movies = data;
   });

  }
}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  // one space bar is necessary
  @Input() fruits: string;

  who: string;
  presidents: string[] = ['Obama', 'Trump', 'Clington'];

  constructor() {
    this.who = '';
    this.presidents.push('Bush');
    console.log(this.presidents.shift()); // this return value is obama
    this.presidents.pop();
    // this.presidents.clear();
    this.presidents.push('Obama');

    // this.presidents = [];
    this.presidents.sort();

  }

  ngOnInit() {
  }

// one space bar () { }
  sayHello() {
    alert('Hello world');
  }

  log(event) {
    console.log(event);     // object is displayed
    console.log(event.key); // only character displayed
  }


}

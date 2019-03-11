import { Component } from '@angular/core';


// AppComponent Decorator
@Component({
  // check out at index.html
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// class inlude variables(like title) and method
export class AppComponent {
  fruits: String[] = ['apple', 'strawberyy', 'pear'];
  myfruit = 'apple';
  title = 'MyIonicApp';

  say() {
    console.log('say');
  }
}

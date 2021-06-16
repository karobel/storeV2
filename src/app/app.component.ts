import { Component } from '@angular/core';

declare const myExtObject: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'storeV2';
  onClick() {
    myExtObject();
  }
}



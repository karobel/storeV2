import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';


// declare const myTest: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit{
  title = 'storeV2';

  // onClick(){
  //   myTest();
  // }

  ngOnInit() {
    $(window).ready(function () {
      // alert('JQuery est installé');
      $('#myB').click(function () {
        alert('ca marche');
      })
    });
    // $(document).ready(function () {
    //   $('select').niceSelect();
    // });


  }
}



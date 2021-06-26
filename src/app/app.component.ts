import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
import {CatalogueService} from "./catalogue.service";


// declare const myTest: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit{
  title = 'Anailis';

  constructor(private catService:CatalogueService) {
  }

  ngOnInit() {




    //jquery plugins
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



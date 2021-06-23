import { Component, OnInit } from '@angular/core';

declare const myTest: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  title="bigTitle";

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    myTest();
  };
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  clickMessage; 
  name: string;
  email: string;
  message: string;
 

  constructor() { }

  ngOnInit() {
  }
  onClickMe(){
  this.clickMessage = `Your name is ${this.name}. Your  email is ${this.email}. Your  message is ${this.message}`;
    }
}
11
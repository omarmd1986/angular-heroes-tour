import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {

  public value: string;

  constructor() {
    this.value = '';
   }

  ngOnInit() {
  }

  update(v:string): void{
    this.value += v + " | ";
  }

}

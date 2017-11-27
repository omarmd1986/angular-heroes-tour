import { Component, OnInit } from '@angular/core';
import { SuperHero, Powers } from '../../models/super-hero';

@Component({
  selector: 'app-forms-input',
  templateUrl: './forms-input.component.html',
  styleUrls: ['./forms-input.component.css']
})

export class FormsInputComponent implements OnInit {

  public model = new SuperHero(1,'Dr IQ', Powers[2], 'Chuck Overstret');

  public submitted: boolean = false;

  public powers = Powers;

  constructor() { }

  ngOnInit() {}

  onSubmit(): void {this.submitted = true;}

  diagnostic(obj: any): string { return JSON.stringify(obj); }

  newHero() {
    this.model = new SuperHero(42, '', '');
  }
}

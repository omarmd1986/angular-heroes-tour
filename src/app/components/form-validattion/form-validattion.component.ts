import { Component, OnInit } from '@angular/core';
import { SuperHero, Powers } from '../../models/super-hero';

@Component({
  selector: 'app-form-validattion',
  templateUrl: './form-validattion.component.html',
  styleUrls: ['./form-validattion.component.css']
})

export class FormValidattionComponent implements OnInit {

  public hero: SuperHero;
  public powers = Powers;

  constructor() {
    this.hero = new SuperHero(1,'Batman', Powers[4]);
  }

  ngOnInit() {
  }

  onSubmit(): void {

  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
    special: string;
    help: string;
    heroImageUrl: string;
    isSpecial: boolean;
    a: string;
    clicked: any;

  constructor() {
      this.a = '15';
      this.isSpecial = false;
      this.heroImageUrl = 'https://www.ascompany.gr/wp-content/uploads/New-logo-AS-Company-Toys-Industry-Thessaloniki-Greece-EU-NEW-1.png';
      this.help = 'Hola mundo'
      this.special = 'special'
  }
  
  onSave(): void{
      alert('on save')
  }
  
  

  ngOnInit() {
  }

}

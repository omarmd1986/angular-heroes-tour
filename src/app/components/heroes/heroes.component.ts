import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/hero'
import { HeroService } from '../../services/hero.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes : Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
      this.getHeroes();
  }
  
    getHeroes(): void {
        this.heroService.getHeroes()
            .subscribe(heroes => this.heroes = heroes);
    }
    
    // This code is not user anymore.
    // Now the detail is reached by app-routing
    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
    
    add(name: string): void {
        name = name.trim();
        if(!name) {
            return;
        }
        const hero = new Hero();
        hero.name = name;
        this.heroService.addHero(hero)
                .subscribe(_ => this.getHeroes());
    }
   
}

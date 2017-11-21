import { Component, OnInit } from '@angular/core';

/**
 * The ActivatedRoute holds information about the route to this instance of the HeroDetailComponent. 
 * This component is interested in the route's bag of parameters extracted from the URL. 
 * The "id" parameter is the id of the hero to display.
 */
import { ActivatedRoute } from '@angular/router';
/**
 * The location is an Angular service for interacting with the browser. 
 * You'll use it later to navigate back to the view that navigated here.
 */
import { Location } from '@angular/common';

//Heroes service
import { HeroService } from '../../services/hero.service';
import { Hero } from '../../models/hero';

@Component({
  selector: 'app-hero-remove',
  templateUrl: './hero-remove.component.html',
  styleUrls: ['./hero-remove.component.css']
})
export class HeroRemoveComponent implements OnInit {
    hero: Hero;
    
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit() {
        this.getHero();
    }
    
    getHero():void{
        const id = +this.route.snapshot.paramMap.get('id');
        this.heroService.getHero(id)
                .subscribe(hero => this.hero = hero);
    }
    
    goBack(): void {
        this.location.back();
    }
    
    delete(): void {
        this.heroService.deleteHero(this.hero)
                .subscribe(_ => this.goBack());
    }
}

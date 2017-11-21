import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../../models/hero';

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

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
    
    hero: Hero;
    
    constructor(
      private route: ActivatedRoute,
      private heroService: HeroService,
      private location: Location
    ) {}

    ngOnInit() {
        this.getHero();
    }
    
    getHero():void{
        const id = +this.route.snapshot.paramMap.get('id');
        this.heroService.getHero(id)
                .subscribe(hero => this.hero = hero);
    }
    
    save(): void{
        this.heroService.updateHero(this.hero)
                .subscribe(() => this.goBack());
    }
    
    goBack(): void{
        this.location.back();
    }

}

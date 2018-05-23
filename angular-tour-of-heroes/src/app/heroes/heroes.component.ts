import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
// import { HEROES } from '../mock-heroes';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  // heroes = HEROES;
  
  selectedHero: Hero;
 
  heroes: Hero[];
  // last inserted^. Don't 'replace' anything, and this will work

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  // last inserted^

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}

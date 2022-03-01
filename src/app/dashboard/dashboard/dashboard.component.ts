import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { Hero } from 'src/app/hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
heroes: Hero[] = []
  constructor(private heroService:HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }
  getHeroes() {
    this.heroService.getHeroes().subscribe(x=>this.heroes = x.slice(1,5))  };

}

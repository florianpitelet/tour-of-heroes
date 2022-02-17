import { Component, OnInit } from '@angular/core';
import { IHero } from '../ihero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  

  tabHeroes: IHero[] = [];
 
  constructor(private heroService:HeroService, private messageService:MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes():void{
    this.heroService.getHeroes()
    .subscribe(x => this.tabHeroes = x);
  }

  add(name:string):void{
    name = name.trim();
    if(!name){ return; }
    
    this.heroService.addHero( {name} as IHero)
      .subscribe(hero => {
        this.tabHeroes.push(hero);
      })
  }

  delete(hero: IHero): void {
    this.tabHeroes = this.tabHeroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

}

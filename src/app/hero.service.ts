import { Injectable } from '@angular/core';
import { IHero } from './ihero';
import { HEROES } from './mhero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHero(id: number): Observable<IHero> {
   const fetchedHeroID = HEROES.find(e => e.id === id)!;
   this.messageService.add(`We selected the hero with the id ${id}`);
   return of(fetchedHeroID);
  }

  
  constructor(private messageService:MessageService) { }

  getHeroes():Observable<IHero[]>{

    const fetchedHeroes = of(HEROES);
    this.messageService.add('Heroes fetched!');
    return fetchedHeroes;
  }
}

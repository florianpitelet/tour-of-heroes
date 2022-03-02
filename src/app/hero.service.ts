import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Hero } from './hero';
import { environment } from 'src/environments/environment';
import { MessageService } from './message.service';


@Injectable({
    providedIn: 'root'
})

export class HeroService{

    private apiServerUrl = environment.apiUrl;

    constructor(private http: HttpClient, private messageService: MessageService){

    }

    public getHero(heroId: number): Observable<Hero>{
        this.messageService.add(`Heros récupéré`);
        return this.http.get<Hero>(`${this.apiServerUrl}/hero/find/${heroId}`);
    }

    public getHeroes(): Observable<Hero[]>{
        this.messageService.add(`Heros récupérés`);
        return this.http.get<Hero[]>(`${this.apiServerUrl}/hero/all`);
    }
    public addHero(hero: Hero): Observable<Hero>{
        this.messageService.add(`Heros ajouté`);
        return this.http.post<Hero>(`${this.apiServerUrl}/hero/add`, hero);
    }
    public updateHero(hero: Hero): Observable<Hero>{
        this.messageService.add(`Heros mis à jour`);
        return this.http.put<Hero>(`${this.apiServerUrl}/hero/update`, hero);
        
    }
    public deleteHero(heroId: number): Observable<void>{
        this.messageService.add(`Heros supprimé`);
        return this.http.delete<void>(`${this.apiServerUrl}/hero/delete/${heroId}`);
    }
}
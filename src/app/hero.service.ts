import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Hero } from './hero';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})

export class HeroService{

    private apiServerUrl = environment.apiUrl;

    constructor(private http: HttpClient){

    }
    public getHero(heroId: number): Observable<Hero>{
        return this.http.get<Hero>(`${this.apiServerUrl}/hero/find/${heroId}`);
    }

    public getHeroes(): Observable<Hero[]>{
        return this.http.get<Hero[]>(`${this.apiServerUrl}/hero/all`);
    }
    public addHero(hero: Hero): Observable<Hero>{
        return this.http.post<Hero>(`${this.apiServerUrl}/hero/add`, hero);
    }
    public updateHero(hero: Hero): Observable<Hero>{
        return this.http.put<Hero>(`${this.apiServerUrl}/hero/update`, hero);
        
    }
    public deleteHero(heroId: number): Observable<void>{
        return this.http.delete<void>(`${this.apiServerUrl}/hero/delete/${heroId}`);
    }
}
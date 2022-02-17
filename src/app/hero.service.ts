import { Injectable } from '@angular/core';
import { IHero } from './ihero';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesURL = 'api/heroes';

  constructor(private messageService: MessageService, private http: HttpClient) {
  }
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  getHeroes(): Observable<IHero[]> {

    return this.http.get<IHero[]>(this.heroesURL).pipe(
      tap(_ => this.log('fetched heroes')),
      catchError(this.handleError<IHero[]>('getHeroes', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T){
    return (error:any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }


  getHero(id: number): Observable<IHero> {
   const url = `${this.heroesURL}/${id}`;
   return this.http.get<IHero>(url).pipe(
     tap(_ => this.log(`Fetched hero wit id ${id}`)),
     catchError(this.handleError<IHero>(`getHero id=${id}`))
   );
  }
}

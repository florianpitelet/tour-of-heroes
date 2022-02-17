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
  private heroesURL = 'http://localhost:9090';
  

  constructor(private messageService: MessageService, private http: HttpClient) {
  }
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  //
  getHeroes(): Observable<IHero[]> {

    let httpOptions = {
      headers: new HttpHeaders({ 
        'Access-Control-Allow-Origin':'*'
      })
    };
    return this.http.get<IHero[]>(this.heroesURL + '/all', httpOptions).pipe(
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

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  updateHero(hero: IHero): Observable<any>{

    return this.http.put(this.heroesURL, hero, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  addHero(hero: IHero): Observable<IHero>{
    return this.http.post<IHero>(this.heroesURL, hero, this.httpOptions)
      .pipe(
        tap( (newHero:IHero) => this.log(`Added hero with id=${newHero.id}`)),
          catchError(this.handleError<IHero>('addHero'))
      );
  }

  /** DELETE: delete the hero from the server */
deleteHero(id: number): Observable<IHero> {
  const url = `${this.heroesURL}/${id}`;

  return this.http.delete<IHero>(url, this.httpOptions).pipe(
    tap(_ => this.log(`deleted hero id=${id}`)),
    catchError(this.handleError<IHero>('deleteHero'))
  );
}
}

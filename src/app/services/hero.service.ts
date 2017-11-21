import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Observable for ajax request.
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
//This is for handle httpclients errors
import { catchError, map, tap } from 'rxjs/operators';

//Message Service
import { MessagesService } from './messages.service';

import { Hero } from '../models/hero';
//We do not need it anymore
//import { HEROES } from '../data/mock-heroes';
import { Configs } from '../config/config';

@Injectable()
export class HeroService {
    private heroesUrl = Configs.API_URL + '/heroes';  // URL to web api
    
    private httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    // Create a new private property htt
    //Create a new private property messages
  constructor(
        private http: HttpClient,
        private messagesService: MessagesService
  ) { }
  
  private log(body: string, type: string = 'success'){
      this.messagesService.add({
          title: 'Hero Service',
          body: body,
          type: type
      });
  }
  
  getHeroes(): Observable<Hero[]>{
      return this.http.get<Hero[]>(this.heroesUrl)
        //cath errors in services.
            .pipe(
                tap(heroes => this.log(`fetched heroes`)),
                catchError(this.handleError('getHeroes', []))
            );
  }
  
  getHero(id: number): Observable<Hero>{
      const url = `${this.heroesUrl}/${id}`;
      
      return this.http.get<Hero>(url)
        //cath errors in services.
              .pipe(
                tap(_ => this.log(`Fetched hero id=${id}`)),
                catchError(this.handleError<Hero>(`getHero id=${id}`))
              );
  }
  
  addHero(hero: Hero): Observable<Hero> {
      return this.http.post(this.heroesUrl, hero, this.httpOptions)
            .pipe(
                tap((hero: Hero) => this.log(`added hero id=${hero.id}`)),
                catchError(this.handleError<Hero>('addHero'))
            );
  }
  
    /** DELETE: delete the hero from the server */
    deleteHero (hero: Hero | number): Observable<Hero> {
      const id = typeof hero === 'number' ? hero : hero.id;
      const url = `${this.heroesUrl}/${id}`;

      return this.http.delete<Hero>(url, this.httpOptions).pipe(
        tap(_ => this.log(`deleted hero id=${id}`)),
        catchError(this.handleError<Hero>('deleteHero'))
      );
    }
    
    /* GET heroes whose name contains search term */
    searchHeroes(term: string): Observable<Hero[]> {
      if (!term.trim()) {
        // if not search term, return empty hero array.
        return of([]);
      }
      const url = `${this.heroesUrl}/?name=${term}`;
      return this.http.get<Hero[]>(url)
              .pipe(
                tap(_ => this.log(`found heroes matching "${term}"`)),
                catchError(this.handleError<Hero[]>('searchHeroes', []))
              );
    }
  
  updateHero(hero: Hero): Observable<any> {
        return this.http.put(this.heroesUrl, hero, this.httpOptions)
            .pipe(
                tap(_ => this.log(`updated hero id=${hero.id}`)),
                catchError(this.handleError<any>('updateHero'))
            );
  }
  
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {

        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead

        // TODO: better job of transforming error for user consumption
        // We can here had a service to save in DB the errors
        this.log(`${operation} failed: ${error.message}`, 'fail');

        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }

}


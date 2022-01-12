import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { NewsArticles } from '../Models/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T): any {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      // console.error('HANDLE ERROR =' + JSON.stringify(error)); // log to console instead
      // Let the app keep running by returning an empty result.
      // if (error.status === 401 || error.status === 403) {
      // if you've caught / handled the error, you don't want to rethrow it,
      // unless you also want downstream consumers to have to handle it as well.
      // }
      return of(result as T);
    };
  }

  getTopHeadLines(): Observable<NewsArticles[]> {
    console.log('FETCHING NEWS ARTICLES...');

    const apiKey = '0e05526ed3a4427989c18e5caec1ee58';
    let selectedCountry = 'gr';
    const newsApi = `https://newsapi.org/v2/top-headlines?country=${selectedCountry}&category=business&apiKey=${apiKey}`;

    const httpOptions = {
      headers: new HttpHeaders({
        // 'Content-Type': 'application/json',
      }),
    };
    return this.http.get<NewsArticles[]>(newsApi, httpOptions).pipe(
      tap((_) => console.log('NEWS ARTICLES FETCHED')),
      catchError(this.handleError<any[]>('getNewsArticles', []))
    );
  }
}
